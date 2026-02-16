import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './user/user.module';
import { ClassesModule } from './classe/class.module';
import { RaidModule } from './raid/raid.module';
import { BossModule } from './boss/boss.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    UsersModule,
    ClassesModule,
    RaidModule,
    BossModule
  ],
})
export class AppModule {}