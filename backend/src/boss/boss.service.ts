import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BossService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.boss.findMany({});
  }

  async getOne(id: number) {
    return this.prisma.boss.findUnique({
      where: { id },
    });
  }
}
