import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Patch,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RaidService } from './raid.service';
import { CreateRaidDto } from './dto/raid.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Raids')
@Controller('raids')
export class RaidController {
  constructor(private readonly raidService: RaidService) {}

  @Get()
  getAll() {
    return this.raidService.getAll();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.raidService.getById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Req() req, @Body() dto: CreateRaidDto) {
    return this.raidService.create(req.user.id, dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  delete(@Req() req, @Param('id', ParseIntPipe) id: number) {
    return this.raidService.delete(req.user.id, id);
  }


  @Post(':id/join')
  @UseGuards(JwtAuthGuard)
  requestJoin(@Req() req, @Param('id', ParseIntPipe) raidId: number) {
    return this.raidService.requestJoin(req.user.id, raidId);
  }


  @Get(':id/requests')
  @UseGuards(JwtAuthGuard)
  getPendingRequests(@Req() req, @Param('id', ParseIntPipe) raidId: number) {
    return this.raidService.getPendingRequests(req.user.id, raidId);
  }


  @Patch('requests/:requestId/accept')
  @UseGuards(JwtAuthGuard)
  acceptRequest(@Req() req, @Param('requestId', ParseIntPipe) requestId: number) {
    return this.raidService.acceptRequest(req.user.id, requestId);
  }


  @Patch('requests/:requestId/reject')
  @UseGuards(JwtAuthGuard)
  rejectRequest(@Req() req, @Param('requestId', ParseIntPipe) requestId: number) {
    return this.raidService.rejectRequest(req.user.id, requestId);
  }

  @Delete(':id/kick/:userId')
  @UseGuards(JwtAuthGuard)
  kickUser(
    @Req() req,
    @Param('id', ParseIntPipe) raidId: number,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.raidService.kickUser(req.user.id, raidId, userId);
  }


  @Delete(':id/users/:userId/loots/:lootId')
  @UseGuards(JwtAuthGuard)
  removeLootFromUser(
    @Req() req,
    @Param('id', ParseIntPipe) raidId: number,
    @Param('userId', ParseIntPipe) userId: number,
    @Param('lootId', ParseIntPipe) lootId: number,
  ) {
    return this.raidService.removeLootFromUser(req.user.id, raidId, userId, lootId);
  }
}