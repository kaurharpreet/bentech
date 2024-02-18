import {
    IsNotEmpty,
    IsEmail
  } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
  export class CreateClientDto {
    @ApiProperty({
      example: 'John',
      required: true,      
    })
    @IsNotEmpty()
    readonly name: string;
  
    @ApiProperty({
      example: 'xyz@gmail.com',
      required: true,      
    })
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;   

    @ApiProperty({
      example: '998-222-9494'      
    })
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
    
    @ApiProperty({
      example: '24fsd4321266'     
    })
    readonly gstNo?: string;
   
    @ApiProperty({
      example: 'pickling | electroplating',    
    })
    readonly effluentType?: string;

    @ApiProperty({
      example: '22'
    })
    readonly effluentRate?: number;

    @ApiProperty({
      example: 'daily'
    })
    readonly monthlyEffluentGenerated?: string;

    @ApiProperty({
      example: '7000'
    })
    readonly storageTank?: number;

    @ApiProperty({
      example: '22-02-2024'
    })
    readonly agreementStartDate?: Date;

    @ApiProperty({
      example: '21-02-2025'
    })
    readonly agreementEndDate?: Date;

    @ApiProperty({
      example: 'green | red | yellow',    
    })
    readonly industryCategory?: string;

    @ApiProperty({
      example: 'pending | completed',    
    })
    readonly securityDeposit?: string;
  }
  
