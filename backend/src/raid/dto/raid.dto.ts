import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateRaidDto {
  @ApiProperty({ example: 'Raid Aventure' })
  @IsString()
  @IsNotEmpty()
  name: string;
}