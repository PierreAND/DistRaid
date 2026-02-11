import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRaidDto } from './dto/raid.dto';

@Injectable()
export class RaidService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.raid.findMany({
      include: { users: true },
    });
  }

  async getById(id: number) {
    const raid = await this.prisma.raid.findUnique({
      where: { id },
      include: { users: true },
    });
    if (!raid) {
      throw new NotFoundException(`Le Raid #${id} introuvable`);
    }
    return raid;
  }

  async create(dto: CreateRaidDto) {
    return this.prisma.raid.create({
      data: { name: dto.name },
    });
  }
  async delete(id: number) {
    await this.getById(id);
    await this.prisma.raid.delete({ where: { id } });
    return { message: `Le Raid ${id} supprimé` };
  }
}
