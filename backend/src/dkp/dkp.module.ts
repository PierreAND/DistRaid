import { Module } from '@nestjs/common';
import { DkpController } from './dkp.controller';
import { DkpService } from './dkp.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DkpController],
  providers: [DkpService],
})
export class DkpModule {}
