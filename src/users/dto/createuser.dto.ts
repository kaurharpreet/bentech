import {
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsEnum,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { ClientType } from '../../core/enum';

export class CreateUserDto {

  clientId?: number;

  @ApiProperty({
    example: 'lifter',
    required: true,      
  })
  @IsNotEmpty()
  @IsEnum(ClientType, {
    message: 'ClientType must be lifter, admin or client',
  })
  readonly clientType: string;

  @ApiProperty({
    example: 'John Sharma',
    required: true,      
  })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    example: 'john@gmail.com',
    required: true,      
  })
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    required: true,   
    example: '12345678',  
    description:"Minimum 8 characters required"   
  })
  @IsNotEmpty()
  @MinLength(8, { message: 'Password must have atleast 8 characters.' })
  readonly password: string;

  @ApiProperty({
    example:"989-999-9292"   
  })
  readonly contactNo?: string;
}
