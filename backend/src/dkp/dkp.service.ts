/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// =============================================
// backend/src/dkp/dkp.service.ts
// Module SÉPARÉ — ne touche PAS à LootService
// =============================================

import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  SetPointsDto,
  AttributeLootDto,
  RecordAttendanceDto,
} from './dto/dkp.dto';

const PRIORITY_COSTS: Record<number, number> = {
  1: 30,
  2: 20,
  3: 10,
};

const ATTENDANCE_POINTS = 5;

@Injectable()
export class DkpService {
  constructor(private prisma: PrismaService) {}

  private async verifyAdmin(userId: number, raidId: number) {
    const raid = await this.prisma.raid.findUnique({
      where: { id: raidId },
    });
    if (!raid) throw new NotFoundException('Raid introuvable');
    if (raid.createdById !== userId) {
      throw new ForbiddenException('Accès réservé au créateur du raid');
    }
    return raid;
  }

  async getRaidDkpTable(raidId: number) {
    const raid = await this.prisma.raid.findUnique({
      where: { id: raidId },
      include: {
        users: {
          select: {
            id: true,
            name: true,
            email: true,
            classe: true,
            specialisation: true,
            loots: { include: { boss: true } },
            heroicMarkRequest: true,
          },
        },
      },
    });
    if (!raid) throw new NotFoundException('Raid introuvable');

    const points = await this.prisma.raidPoints.findMany({
      where: { raidId },
    });

    const members = raid.users
      .map((user) => ({
        ...user,
        points: points.find((p) => p.userId === user.id)?.points ?? 0,
        heroicMarks: user.heroicMarkRequest
          ? {
              wanted: user.heroicMarkRequest.quantity,
              received: user.heroicMarkRequest.received,
            }
          : { wanted: 0, received: 0 },
      }))
      .sort((a, b) => b.points - a.points);

    return {
      raid: { id: raid.id, name: raid.name },
      priorityCosts: PRIORITY_COSTS,
      attendancePoints: ATTENDANCE_POINTS,
      members,
    };
  }
  async setPoints(adminId: number, raidId: number, dto: SetPointsDto) {
    await this.verifyAdmin(adminId, raidId);

    const user = await this.prisma.user.findFirst({
      where: { id: dto.userId, raidId },
    });
    if (!user)
      throw new NotFoundException('Ce joueur ne fait pas partie du raid');

    return this.prisma.raidPoints.upsert({
      where: { userId_raidId: { userId: dto.userId, raidId } },
      update: { points: dto.points },
      create: { userId: dto.userId, raidId, points: dto.points },
    });
  }

  async attributeLoot(adminId: number, raidId: number, dto: AttributeLootDto) {
    await this.verifyAdmin(adminId, raidId);

    const user = await this.prisma.user.findFirst({
      where: { id: dto.userId, raidId },
      include: { loots: true },
    });
    if (!user)
      throw new NotFoundException('Ce joueur ne fait pas partie du raid');

    const hasLoot = user.loots.some((l) => l.id === dto.lootId);
    if (!hasLoot) {
      throw new NotFoundException(
        "Ce loot n'est pas dans la wishlist du joueur",
      );
    }

    const loot = await this.prisma.loot.findUnique({
      where: { id: dto.lootId },
      include: { boss: true },
    });

    const wishlistItem = await this.prisma.wishlistItem.findUnique({
      where: { userId_lootId: { userId: dto.userId, lootId: dto.lootId } },
    });
    const priority = wishlistItem?.priority ?? 2;
    const pointsCost = PRIORITY_COSTS[priority] || 20;

    const currentPoints = await this.prisma.raidPoints.findUnique({
      where: { userId_raidId: { userId: dto.userId, raidId } },
    });
    const currentPts = currentPoints?.points ?? 0;
    const newPoints = Math.max(0, currentPts - pointsCost);

    const [lootHistory] = await this.prisma.$transaction([
      this.prisma.lootHistory.create({
        data: {
          userId: dto.userId,
          lootId: dto.lootId,
          raidId,
          priority,
          pointsCost,
          description: 'Loot attribué',
        },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              classe: true,
              specialisation: true,
            },
          },
          loot: { include: { boss: true } },
        },
      }),

      this.prisma.raidPoints.upsert({
        where: { userId_raidId: { userId: dto.userId, raidId } },
        update: { points: newPoints },
        create: { userId: dto.userId, raidId, points: newPoints },
      }),

      this.prisma.user.update({
        where: { id: dto.userId },
        data: { loots: { disconnect: { id: dto.lootId } } },
      }),

      ...(wishlistItem
        ? [
            this.prisma.wishlistItem.delete({
              where: { id: wishlistItem.id },
            }),
          ]
        : []),
    ]);

    return {
      ...lootHistory,
      previousPoints: currentPts,
      newPoints,
    };
  }

  async recordAttendance(
    adminId: number,
    raidId: number,
    dto: RecordAttendanceDto,
  ) {
    await this.verifyAdmin(adminId, raidId);

    const users = await this.prisma.user.findMany({
      where: { id: { in: dto.userIds }, raidId },
    });
    if (users.length !== dto.userIds.length) {
      throw new BadRequestException(
        'Certains joueurs ne font pas partie du raid',
      );
    }

    await this.prisma.$transaction(
      dto.userIds.map((userId) =>
        this.prisma.raidAttendance.create({
          data: { userId, raidId, pointsGiven: ATTENDANCE_POINTS },
        }),
      ),
    );

    await Promise.all(
      dto.userIds.map((userId) =>
        this.prisma.raidPoints.upsert({
          where: { userId_raidId: { userId, raidId } },
          update: { points: { increment: ATTENDANCE_POINTS } },
          create: { userId, raidId, points: ATTENDANCE_POINTS },
        }),
      ),
    );

    return {
      message: `Participation enregistrée pour ${dto.userIds.length} joueur(s)`,
      pointsGiven: ATTENDANCE_POINTS,
      userIds: dto.userIds,
    };
  }

  async getLootHistory(raidId: number) {
    return this.prisma.lootHistory.findMany({
      where: { raidId },
      include: {
        user: {
          select: { id: true, name: true, classe: true, specialisation: true },
        },
        loot: { include: { boss: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getAttendanceHistory(raidId: number) {
    return this.prisma.raidAttendance.findMany({
      where: { raidId },
      include: {
        user: {
          select: { id: true, name: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getLootCandidates(raidId: number, lootId: number) {
    const users = await this.prisma.user.findMany({
      where: {
        raidId,
        loots: { some: { id: lootId } },
      },
      select: {
        id: true,
        name: true,
        classe: true,
        specialisation: true,
        RaidPoints: true,
        WishlistItem: {
          where: { lootId },
        },
      },
    });

    return users
      .map((user) => ({
        userId: user.id,
        name: user.name,
        classe: user.classe,
        specialisation: user.specialisation,
        priority: user.WishlistItem[0]?.priority ?? 2,
        priorityCost: PRIORITY_COSTS[user.WishlistItem[0]?.priority ?? 2],
        points: user.RaidPoints?.points ?? 0,
      }))
      .sort((a, b) => b.points - a.points);
  }

  async getLootCandidatesByBoss(bossId: number, raidId?: number) {
    const boss = await this.prisma.boss.findUnique({
      where: { id: bossId },
      include: {
        loots: true,
      },
    });

    if (!boss) throw new NotFoundException('Boss introuvable');

    const result = await Promise.all(
      boss.loots.map(async (loot) => {
        const users = await this.prisma.user.findMany({
          where: {
            loots: { some: { id: loot.id } },
            ...(raidId ? { raidId } : { raidId: { not: null } }),
          },
          select: {
            id: true,
            name: true,
            classe: true,
            specialisation: true,
            RaidPoints: raidId ? { where: { raidId } } : true,
            WishlistItem: { where: { lootId: loot.id } },
          },
        });

        return {
          id: loot.id,
          name: loot.name,
          url: loot.url,
          candidates: users
            .map((user) => ({
              userId: user.id,
              name: user.name,
              classe: user.classe,
              specialisation: user.specialisation,
              priority: user.WishlistItem[0]?.priority ?? 2,
              points:
                user.RaidPoints?.[0]?.points ?? user.RaidPoints?.points ?? 0,
            }))
            .sort((a, b) => b.points - a.points),
        };
      }),
    );

    return result;
  }
  async setHeroicMarksWanted(userId: number, quantity: number) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user || !user.raidId) {
      throw new BadRequestException('Vous devez être dans un raid');
    }

    return this.prisma.heroicMarkRequest.upsert({
      where: { userId },
      update: { quantity },
      create: { userId, quantity },
    });
  }
  async getHeroicMarksForRaid(raidId: number) {
    const requests = await this.prisma.heroicMarkRequest.findMany({
      where: { user: { raidId } },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            classe: true,
            specialisation: true,
            RaidPoints: true,
          },
        },
      },
    });

    return requests
      .map((r) => ({
        userId: r.user.id,
        name: r.user.name,
        classe: r.user.classe,
        specialisation: r.user.specialisation,
        quantity: r.quantity,
        received: r.received,
        points: r.user.RaidPoints?.points ?? 0,
      }))
      .sort((a, b) => b.points - a.points);
  }
  async getMyHeroicMarks(userId: number) {
    const request = await this.prisma.heroicMarkRequest.findUnique({
      where: { userId },
    });
    return {
      quantity: request?.quantity ?? 0,
      received: request?.received ?? 0,
    };
  }
  async attributeHeroicMark(
    adminId: number,
    raidId: number,
    targetUserId: number,
  ) {
    await this.verifyAdmin(adminId, raidId);

    const request = await this.prisma.heroicMarkRequest.findUnique({
      where: { userId: targetUserId },
    });
    if (!request || request.quantity <= request.received) {
      throw new BadRequestException("Ce joueur n'a plus besoin de marques");
    }

    const pointsCost = PRIORITY_COSTS[2];

    const currentPoints = await this.prisma.raidPoints.findUnique({
      where: { userId_raidId: { userId: targetUserId, raidId } },
    });
    const currentPts = currentPoints?.points ?? 0;
    const newPoints = Math.max(0, currentPts - pointsCost);

    await this.prisma.$transaction([
      this.prisma.heroicMarkRequest.update({
        where: { userId: targetUserId },
        data: { received: { increment: 1 } },
      }),
      this.prisma.raidPoints.upsert({
        where: { userId_raidId: { userId: targetUserId, raidId } },
        update: { points: newPoints },
        create: { userId: targetUserId, raidId, points: newPoints },
      }),
      this.prisma.lootHistory.create({
        data: {
          userId: targetUserId,
          lootId: null,
          raidId,
          priority: 2,
          pointsCost,
          description: 'Marque Héroïque T10',
        },
      }),
    ]);

    return {
      previousPoints: currentPts,
      newPoints,
      pointsCost,
      received: request.received + 1,
      quantity: request.quantity,
    };
  }
}
