import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  SetPointsDto,
  AddWishlistItemDto,
  AttributeLootDto,
  RecordAttendanceDto,
} from './dto/dkp.dto';

const PRIORITY_COSTS: Record<number, number> = {
  1: 30, // Priorité haute
  2: 20, // Priorité moyenne
  3: 10, // Priorité basse
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
          },
        },
      },
    });
    if (!raid) throw new NotFoundException('Raid introuvable');

    const points = await this.prisma.raidPoints.findMany({
      where: { raidId },
    });

    const userIds = raid.users.map((u) => u.id);
    const wishlists = await this.prisma.wishlistItem.findMany({
      where: { userId: { in: userIds } },
      include: {
        loot: {
          include: {
            boss: true,
          },
        },
      },
    });

    const dkpTable = raid.users
      .map((user) => ({
        ...user,
        points: points.find((p) => p.userId === user.id)?.points ?? 0,
        wishlist: wishlists
          .filter((w) => w.userId === user.id)
          .map((w) => ({
            id: w.id,
            loot: w.loot,
            priority: w.priority,
          })),
      }))
      .sort((a, b) => b.points - a.points);

    return {
      raid: { id: raid.id, name: raid.name },
      priorityCosts: PRIORITY_COSTS,
      attendancePoints: ATTENDANCE_POINTS,
      members: dkpTable,
    };
  }

  async addWishlistItem(userId: number, dto: AddWishlistItemDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user || !user.raidId) {
      throw new BadRequestException(
        'Vous devez être dans un raid pour ajouter à votre wishlist',
      );
    }

    const loot = await this.prisma.loot.findUnique({
      where: { id: dto.lootId },
    });
    if (!loot) throw new NotFoundException('Loot introuvable');

    return this.prisma.wishlistItem.upsert({
      where: { userId_lootId: { userId, lootId: dto.lootId } },
      update: { priority: dto.priority },
      create: {
        userId,
        lootId: dto.lootId,
        priority: dto.priority,
      },
      include: {
        loot: { include: { boss: true } },
      },
    });
  }

  async removeWishlistItem(userId: number, wishlistItemId: number) {
    const item = await this.prisma.wishlistItem.findUnique({
      where: { id: wishlistItemId },
    });
    if (!item) throw new NotFoundException('Item introuvable');
    if (item.userId !== userId) {
      throw new ForbiddenException('Cet item ne vous appartient pas');
    }

    return this.prisma.wishlistItem.delete({
      where: { id: wishlistItemId },
    });
  }

  async getUserWishlist(userId: number) {
    return this.prisma.wishlistItem.findMany({
      where: { userId },
      include: {
        loot: { include: { boss: true } },
      },
      orderBy: { priority: 'asc' },
    });
  }

  async attributeLoot(adminId: number, raidId: number, dto: AttributeLootDto) {
    await this.verifyAdmin(adminId, raidId);

    const user = await this.prisma.user.findFirst({
      where: { id: dto.userId, raidId },
    });
    if (!user)
      throw new NotFoundException('Ce joueur ne fait pas partie du raid');

    const wishlistItem = await this.prisma.wishlistItem.findUnique({
      where: { userId_lootId: { userId: dto.userId, lootId: dto.lootId } },
      include: { loot: { include: { boss: true } } },
    });
    if (!wishlistItem) {
      throw new NotFoundException(
        "Ce loot n'est pas dans la wishlist du joueur",
      );
    }

    const pointsCost = PRIORITY_COSTS[wishlistItem.priority] || 10;

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
          priority: wishlistItem.priority,
          pointsCost,
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

      this.prisma.wishlistItem.delete({
        where: { id: wishlistItem.id },
      }),
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

    const results = await this.prisma.$transaction(
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
    const wishlistItems = await this.prisma.wishlistItem.findMany({
      where: {
        lootId,
        user: { raidId },
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
      },
    });

    const userIds = wishlistItems.map((w) => w.user.id);
    const points = await this.prisma.raidPoints.findMany({
      where: { raidId, userId: { in: userIds } },
    });

    return wishlistItems
      .map((item) => ({
        wishlistItemId: item.id,
        user: item.user,
        priority: item.priority,
        priorityCost: PRIORITY_COSTS[item.priority],
        points: points.find((p) => p.userId === item.user.id)?.points ?? 0,
      }))
      .sort((a, b) => b.points - a.points); // Trié par points décroissants
  }
}
