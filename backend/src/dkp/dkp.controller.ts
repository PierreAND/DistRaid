// =============================================
// backend/src/dkp/dkp.controller.ts
// Module SÉPARÉ — LootController reste intact
// =============================================

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { DkpService } from './dkp.service';
import {
  SetPointsDto,
  AttributeLootDto,
  RecordAttendanceDto,
} from './dto/dkp.dto';

@ApiTags('DKP')
@Controller()
@UseGuards(JwtAuthGuard)
export class DkpController {
  constructor(private dkpService: DkpService) {}

  @Get('raids/:raidId/dkp')
  getDkpTable(@Param('raidId', ParseIntPipe) raidId: number) {
    return this.dkpService.getRaidDkpTable(raidId);
  }

  @Post('raids/:raidId/dkp/points')
  setPoints(
    @Request() req,
    @Param('raidId', ParseIntPipe) raidId: number,
    @Body() dto: SetPointsDto,
  ) {
    return this.dkpService.setPoints(req.user.id, raidId, dto);
  }

  @Post('raids/:raidId/dkp/attribute-loot')
  attributeLoot(
    @Request() req,
    @Param('raidId', ParseIntPipe) raidId: number,
    @Body() dto: AttributeLootDto,
  ) {
    return this.dkpService.attributeLoot(req.user.id, raidId, dto);
  }

  @Post('raids/:raidId/dkp/attendance')
  recordAttendance(
    @Request() req,
    @Param('raidId', ParseIntPipe) raidId: number,
    @Body() dto: RecordAttendanceDto,
  ) {
    return this.dkpService.recordAttendance(req.user.id, raidId, dto);
  }

  @Get('raids/:raidId/dkp/loot-history')
  getLootHistory(@Param('raidId', ParseIntPipe) raidId: number) {
    return this.dkpService.getLootHistory(raidId);
  }

  @Get('raids/:raidId/dkp/attendance-history')
  getAttendanceHistory(@Param('raidId', ParseIntPipe) raidId: number) {
    return this.dkpService.getAttendanceHistory(raidId);
  }

  @Get('raids/:raidId/dkp/loot/:lootId/candidates')
  getLootCandidates(
    @Param('raidId', ParseIntPipe) raidId: number,
    @Param('lootId', ParseIntPipe) lootId: number,
  ) {
    return this.dkpService.getLootCandidates(raidId, lootId);
  }

  @Get('boss/:bossId/loot-candidates')
  getLootCandidatesByBoss(@Param('bossId', ParseIntPipe) bossId: number) {
    return this.dkpService.getLootCandidatesByBoss(bossId);
  }
}
