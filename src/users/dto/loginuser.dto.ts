import { IsNotEmpty,IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class LoginUserDto {

  @ApiProperty({
    example: 'kaur1234@gmail.com',
    required: true,      
  })
  @IsNotEmpty()
  @IsEmail()
  readonly username: string;

  @ApiProperty({
    required: true,   
    example:'123456789',
    description:"Minimum 8 characters password"   
  })
  @IsNotEmpty()
  readonly password: string;
}