import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ClassesService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.classe.findMany({
      include: { specialisation: true },
    });
  }
}