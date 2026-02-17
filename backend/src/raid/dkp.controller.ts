import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DkpService } from './dkp.service';
import {
  SetPointsDto,
  AddWishlistItemDto,
  AttributeLootDto,
  RecordAttendanceDto,
} from './dto/dkp.dto';

@Controller('raids')
@UseGuards(AuthGuard('jwt'))
export class DkpController {
  constructor(private dkpService: DkpService) {}

  @Get(':raidId/dkp')
  getDkpTable(@Param('raidId', ParseIntPipe) raidId: number) {
    return this.dkpService.getRaidDkpTable(raidId);
  }

  @Post(':raidId/dkp/points')
  setPoints(
    @Request() req,
    @Param('raidId', ParseIntPipe) raidId: number,
    @Body() dto: SetPointsDto,
  ) {
    return this.dkpService.setPoints(req.user.id, raidId, dto);
  }

  @Post(':raidId/dkp/attribute-loot')
  attributeLoot(
    @Request() req,
    @Param('raidId', ParseIntPipe) raidId: number,
    @Body() dto: AttributeLootDto,
  ) {
    return this.dkpService.attributeLoot(req.user.id, raidId, dto);
  }

  @Post(':raidId/dkp/attendance')
  recordAttendance(
    @Request() req,
    @Param('raidId', ParseIntPipe) raidId: number,
    @Body() dto: RecordAttendanceDto,
  ) {
    return this.dkpService.recordAttendance(req.user.id, raidId, dto);
  }

  @Get(':raidId/dkp/loot-history')
  getLootHistory(@Param('raidId', ParseIntPipe) raidId: number) {
    return this.dkpService.getLootHistory(raidId);
  }

  @Get(':raidId/dkp/attendance-history')
  getAttendanceHistory(@Param('raidId', ParseIntPipe) raidId: number) {
    return this.dkpService.getAttendanceHistory(raidId);
  }

  @Get(':raidId/dkp/loot/:lootId/candidates')
  getLootCandidates(
    @Param('raidId', ParseIntPipe) raidId: number,
    @Param('lootId', ParseIntPipe) lootId: number,
  ) {
    return this.dkpService.getLootCandidates(raidId, lootId);
  }

  @Get('wishlist')
  getMyWishlist(@Request() req) {
    return this.dkpService.getUserWishlist(req.user.id);
  }

  @Post('wishlist')
  addWishlistItem(@Request() req, @Body() dto: AddWishlistItemDto) {
    return this.dkpService.addWishlistItem(req.user.id, dto);
  }

  @Delete('wishlist/:itemId')
  removeWishlistItem(
    @Request() req,
    @Param('itemId', ParseIntPipe) itemId: number,
  ) {
    return this.dkpService.removeWishlistItem(req.user.id, itemId);
  }
}
