import {
  Get,
  Post,
  ParseIntPipe,
  Body,
  Req,
  UseGuards,
  Controller,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LootService } from './loot.service';
import { AddLootDto } from './dto/addLoot.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('Loot')
@Controller('loots')
@UseGuards(JwtAuthGuard)
export class LootController {
  constructor(private readonly lootService: LootService) {}
  @Get()
  getLoot(@Req() req) {
    return this.lootService.getLootlist(req.user.id);
  }

  @Post()
  addLoot(@Req() req, @Body() dto: AddLootDto) {
    console.log('user:', req.user);
    console.log('dto:', dto);
    return this.lootService.addLoot(req.user.id, dto);
  }

  @Delete(':lootId')
  removeLoot(@Req() req, @Param('lootId', ParseIntPipe) lootId: number) {
    return this.lootService.removeLoot(req.user.id, lootId);
  }
}
