import {
  ConflictException,
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto, LoginDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { name: dto.name },
    });
    if (existingUser) {
      throw new ConflictException('Un utilisateur avec ce pseudo existe déjà');
    }

    const classe = await this.prisma.classe.findUnique({
      where: { id: dto.classeId },
    });
    if (!classe) {
      throw new BadRequestException('Classe introuvable');
    }

    const specialisation = await this.prisma.specialisation.findUnique({
      where: { id: dto.specialisationId },
    });
    if (!specialisation || specialisation.classeId !== dto.classeId) {
      throw new BadRequestException(
        "Spécialisation introuvable ou n'appartient pas à cette classe",
      );
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        password: hashedPassword,
        classeId: dto.classeId,
        specialisationId: dto.specialisationId,
      },
      include: { classe: true, specialisation: true },
    });

    const { password, ...userWithoutPassword } = user;

    return {
      user: userWithoutPassword,
      access_token: this.generateToken(user.id, user.name),
    };
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { name: dto.name },
      include: { classe: true, specialisation: true },
    });
    if (!user) {
      throw new UnauthorizedException('Pseudo ou mot de passe incorrect');
    }

    const isPasswordValid = await bcrypt.compare(dto.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Pseudo ou mot de passe incorrect');
    }

    const { password, ...userWithoutPassword } = user;

    return {
      user: userWithoutPassword,
      access_token: this.generateToken(user.id, user.name),
    };
  }

  private generateToken(userId: number, name: string): string {
    return this.jwtService.sign({ sub: userId, name });
  }
}
