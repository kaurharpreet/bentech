import {
    IsNotEmpty
  } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
  export class UpdateClientDto {

    @ApiProperty({
      example: '998-222-9494',
      required: true,      
    })
    @IsNotEmpty()
    readonly contactNo?: string;
  
    @ApiProperty({
      example: 'plot no-123, phase 8',    
    })
    readonly address?: string; 

    @ApiProperty({
        example: 'mohali',    
    })
    readonly district?: string;

    @ApiProperty({
        example: 'punjab',    
    })
    readonly state?: string;

    @ApiProperty({
        example: '56.646546',    
    })
    readonly latitude?: string;

    @ApiProperty({
        example: '23.565656',    
    })
    readonly longitude?: string;   

  }
  
