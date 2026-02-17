import { IsInt, IsIn, Min } from 'class-validator';

export class SetPointsDto {
  @IsInt()
  userId: number;

  @IsInt()
  @Min(0)
  points: number;
}

export class AddWishlistItemDto {
  @IsInt()
  lootId: number;

  @IsIn([1, 2, 3])
  priority: number;
}

export class AttributeLootDto {
  @IsInt()
  userId: number;

  @IsInt()
  lootId: number;
}

export class RecordAttendanceDto {
  @IsInt({ each: true })
  userIds: number[];
}
