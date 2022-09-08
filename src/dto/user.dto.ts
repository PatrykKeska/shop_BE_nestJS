import { IsString } from 'class-validator';

export class UserDto {
  id: string;
  email: string;
}

export class createNewUser {
  @IsString()
  email: string;
  @IsString()
  pwd: string;
}
