import { PrismaService } from 'src/prisma/prisma.service';
import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { AddLootDto } from './dto/addLoot.dto';

@Injectable()
export class LootService {
  constructor(private prisma: PrismaService) {}

  async addLoot(userId: number, dto: AddLootDto) {
    const loot = await this.prisma.loot.findUnique({
      where: { id: dto.lootId },
    });
    if (!loot) throw new NotFoundException('Loot introuvable');

    const user = await this.prisma.user.update({
      where: { id: userId },
      data: {
        loots: { connect: { id: dto.lootId } },
      },
      include: { loots: true },
    });

    const { password, ...result } = user;
    return result;
  }
  async removeLoot(userId: number, lootId: number) {
    return this.prisma.user.update({
      where: { id: userId },
      data: {
        loots: { disconnect: { id: lootId } },
      },
      include: { loots: true },
    });
  }

  async getLootlist(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        loots: {
          include: { boss: true },
        },
      },
    });
    if (!user) throw new NotFoundException('Utilisateur introuvable');
    return user.loots;
  }

  async getRaidLootList(requesterId: number, raidId: number) {
    const raid = await this.prisma.raid.findUnique({
      where: { id: raidId },
      include: { users: true },
    });
    if (!raid) throw new NotFoundException('Raid introuvable');

    const isInRaid = raid.users.some((u) => u.id === requesterId);
    if (!isInRaid)
      throw new ForbiddenException('Vous ne faites pas partie de ce raid');

    return this.prisma.user.findMany({
      where: { raidId },
      select: {
        id: true,
        name: true,
        email: true,
        classe: true,
        specialisation: true,
        loots: {
          include: { boss: true },
        },
      },
    });
  }
}
