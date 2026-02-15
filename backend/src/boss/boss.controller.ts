import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BossService } from './boss.service';

@ApiTags('Boss')
@Controller('Boss')
export class BossController {
  constructor(private readonly bossesService: BossService) {}
  @Get()
  getAll() {
    return this.bossesService.getAll();
  }
  getOne(id: number) {
    return this.bossesService.getOne(id);
  }
}
