import { IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddLootDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  lootId: number;
}
