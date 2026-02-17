import { Module } from '@nestjs/common';
import { RaidController } from './raid.controller';
import { RaidService } from './raid.service';
import { DkpController } from './dkp.controller';
import { DkpService } from './dkp.service';
@Module({
  controllers: [RaidController, DkpController],
  providers: [RaidService, DkpService],
})
export class RaidModule {}