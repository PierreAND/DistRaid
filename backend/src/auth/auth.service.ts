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
    // Vérifier que l'email n'existe pas déjà
    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (existingUser) {
      throw new ConflictException('Un utilisateur avec cet email existe déjà');
    }

    // Vérifier que la classe existe
    const classe = await this.prisma.classe.findUnique({
      where: { id: dto.classeId },
    });
    if (!classe) {
      throw new BadRequestException('Classe introuvable');
    }

    // Vérifier que la spécialisation existe et appartient à la classe
    const specialisation = await this.prisma.specialisation.findUnique({
      where: { id: dto.specialisationId },
    });
    if (!specialisation || specialisation.classeId !== dto.classeId) {
      throw new BadRequestException(
        "Spécialisation introuvable ou n'appartient pas à cette classe",
      );
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    // Créer l'utilisateur
    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        email: dto.email,
        password: hashedPassword,
        classeId: dto.classeId,
        specialisationId: dto.specialisationId,
      },
      include: { classe: true, specialisation: true },
    });

    const { password, ...userWithoutPassword } = user;

    return {
      user: userWithoutPassword,
      access_token: this.generateToken(user.id, user.email),
    };
  }

  async login(dto: LoginDto) {
    // Trouver l'utilisateur
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
      include: { classe: true, specialisation: true },
    });
    if (!user) {
      throw new UnauthorizedException('Email ou mot de passe incorrect');
    }

    // Vérifier le mot de passe
    const isPasswordValid = await bcrypt.compare(dto.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Email ou mot de passe incorrect');
    }

    const { password, ...userWithoutPassword } = user;

    return {
      user: userWithoutPassword,
      access_token: this.generateToken(user.id, user.email),
    };
  }

  private generateToken(userId: number, email: string): string {
    return this.jwtService.sign({ sub: userId, email });
  }
}