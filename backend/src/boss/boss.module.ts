import { BossController } from './boss.controller';
import { BossService } from './boss.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [BossController],
  providers: [BossService],
})
export class BossModule {}
