import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RaidService } from './raid.service';
import { CreateRaidDto } from './dto/raid.dto';

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
  create(@Body() dto: CreateRaidDto) {
    return this.raidService.create(dto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.raidService.delete(id);
  }
}