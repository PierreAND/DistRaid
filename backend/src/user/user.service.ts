import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDTO } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    const users = await this.prisma.user.findMany({
      include: { classe: true, specialisation: true },
    });
    return users.map(({ password, ...user }) => user);
  }

  async getOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: { classe: true, specialisation: true },
    });
    if (!user) {
      throw new NotFoundException(`Utilisateur #${id} introuvable`);
    }
    const { password, ...result } = user;
    return result;
  }

  async update(id: number, dto: UpdateUserDTO) {
    await this.getOne(id);

    const user = await this.prisma.user.update({
      where: { id },
      data: dto,
      include: { classe: true, specialisation: true },
    });
    const { password, ...result } = user;
    return result;
  }

  async delete(id: number) {
    await this.getOne(id); 

    await this.prisma.user.delete({ where: { id } });
    return { message: `Utilisateur #${id} supprimé` };
  }
}