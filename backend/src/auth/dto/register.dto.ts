import { IsInt, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsInt()
  @IsNotEmpty()
  classeId: number;

  @IsInt()
  @IsNotEmpty()
  specialisationId: number;
}
