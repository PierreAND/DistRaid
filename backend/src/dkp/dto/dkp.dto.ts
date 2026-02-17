import { IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SetPointsDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  userId: number;

  @ApiProperty({ example: 50 })
  @IsInt()
  @Min(0)
  points: number;
}

export class AttributeLootDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  userId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  lootId: number;
}

export class RecordAttendanceDto {
  @ApiProperty({ example: [1, 2, 3] })
  @IsInt({ each: true })
  userIds: number[];
}
