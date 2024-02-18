
import {
    IsNotEmpty
  } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
  export class CreateServiceRequestDto {
  
    @ApiProperty({
      example: '2024-02-13T18:26:59.000Z',
      required: true,      
    })
    @IsNotEmpty()
    readonly requestedTime: Date;
  
    @ApiProperty({
      example: '5000',
      required: true,      
    })
    @IsNotEmpty()
    readonly requestedQty: number;
  
  }
  
