import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  NotFoundException,
  ConflictException,
  BadRequestException
} from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/createclient.dto';
import { UpdateClientDto } from './dto/updateclient.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from '../auth/auth.service';
import { ClientType } from '../core/enum';
import { CreateUserDto } from 'src/users/dto/createuser.dto';

@ApiTags('client')
@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService, private authService: AuthService) {}

  @Post()
  async create(@Body() ClientDto: CreateClientDto) {
    try {
        const client = await this.clientService.create(ClientDto);
        if(client){
            let userlogin: CreateUserDto = {
                clientId:client.id,
                clientType:ClientType.CLIENT,
                name:ClientDto.name,
                email:ClientDto.email,
                password:ClientDto.name
            };
            await this.authService.create(userlogin);
        }
        return client;
    }
    catch(err){
      throw new BadRequestException({ message: err.message, statusCode: HttpStatus.BAD_REQUEST });
    }
  }

  @Get()
  findAll() {
    return this.clientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientService.findOne(+id).catch(err => {
      throw new ConflictException({ message: err.message, statusCode: HttpStatus.CONFLICT });
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() ClientDto: UpdateClientDto) {
      return this.clientService.update(+id, ClientDto).catch(err => {
        throw new ConflictException({ message: err.message, statusCode: HttpStatus.CONFLICT });
      });
  }
  
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
        const user = await this.clientService.findOne(+id);
        if (!user) {
          throw new NotFoundException('Client does not exist!');
        }

        return this.clientService.remove(+id);
    }
    catch(err){
        throw new NotFoundException({ message: err.message, statusCode:HttpStatus.NOT_FOUND});
    }
  }
}
