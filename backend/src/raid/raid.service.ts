import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRaidDto } from './dto/raid.dto';

@Injectable()
export class RaidService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.raid.findMany({
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
        createdBy: { select: { id: true, name: true, email: true } },
      },
    });
  }

  async getById(id: number) {
    const raid = await this.prisma.raid.findUnique({
      where: { id },
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
        createdBy: { select: { id: true, name: true, email: true } },
      },
    });
    if (!raid) throw new NotFoundException(`Raid #${id} introuvable`);
    return raid;
  }

  async create(userId: number, dto: CreateRaidDto) {
    const raid = await this.prisma.raid.create({
      data: {
        name: dto.name,
        createdById: userId,
        users: { connect: { id: userId } },
      },
      include: { users: true },
    });
    return raid;
  }

  async delete(userId: number, raidId: number) {
    const raid = await this.getById(raidId);
    if (raid.createdBy.id !== userId) {
      throw new ForbiddenException('Seul le créateur peut supprimer le raid');
    }

    await this.prisma.user.updateMany({
      where: { raidId },
      data: { raidId: null },
    });
    await this.prisma.joinRequest.deleteMany({ where: { raidId } });
    await this.prisma.raid.delete({ where: { id: raidId } });
    return { message: `Raid ${raidId} supprimé` };
  }

  async kickUser(adminId: number, raidId: number, userId: number) {
    const raid = await this.getById(raidId);
    if (raid.createdBy.id !== adminId) {
      throw new ForbiddenException('Seul le créateur peut retirer un joueur');
    }
    if (userId === adminId) {
      throw new ForbiddenException('Vous ne pouvez pas vous retirer vous-même');
    }
    return this.prisma.user.update({
      where: { id: userId },
      data: { raidId: null },
    });
  }

  async removeLootFromUser(
    adminId: number,
    raidId: number,
    userId: number,
    lootId: number,
  ) {
    const raid = await this.getById(raidId);
    if (raid.createdBy.id !== adminId) {
      throw new ForbiddenException(
        'Seul le créateur peut modifier les wishlists',
      );
    }
    const user = raid.users.find((u) => u.id === userId);
    if (!user)
      throw new NotFoundException('Ce joueur ne fait pas partie du raid');

    return this.prisma.user.update({
      where: { id: userId },
      data: { loots: { disconnect: { id: lootId } } },
    });
  }

  async requestJoin(userId: number, raidId: number) {
    const raid = await this.prisma.raid.findUnique({ where: { id: raidId } });
    if (!raid) throw new NotFoundException('Raid introuvable');

    return this.prisma.joinRequest.create({
      data: { userId, raidId },
    });
  }

  async getPendingRequests(adminId: number, raidId: number) {
    const raid = await this.getById(raidId);
    if (raid.createdBy.id !== adminId) {
      throw new ForbiddenException('Accès réservé au créateur du raid');
    }
    return this.prisma.joinRequest.findMany({
      where: { raidId, status: 'pending' },
      include: {
        user: {
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
  }

  async acceptRequest(adminId: number, requestId: number) {
    const request = await this.prisma.joinRequest.findUnique({
      where: { id: requestId },
      include: { raid: true },
    });
    if (!request) throw new NotFoundException('Demande introuvable');
    if (request.raid.createdById !== adminId) {
      throw new ForbiddenException('Accès réservé au créateur du raid');
    }

    await this.prisma.joinRequest.update({
      where: { id: requestId },
      data: { status: 'accepted' },
    });

    return this.prisma.user.update({
      where: { id: request.userId },
      data: { raidId: request.raidId },
    });
  }

  async rejectRequest(adminId: number, requestId: number) {
    const request = await this.prisma.joinRequest.findUnique({
      where: { id: requestId },
      include: { raid: true },
    });
    if (!request) throw new NotFoundException('Demande introuvable');
    if (request.raid.createdById !== adminId) {
      throw new ForbiddenException('Accès réservé au créateur du raid');
    }

    return this.prisma.joinRequest.update({
      where: { id: requestId },
      data: { status: 'rejected' },
    });
  }
}
