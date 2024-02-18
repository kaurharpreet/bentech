import { Controller, Body, Post, UseGuards, Request,ForbiddenException,HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ClientService } from '../client/client.service';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/createuser.dto';
import { LoginUserDto } from '../users/dto/loginuser.dto';
import { DoesUserExist } from '../core/guards/doesUserExist.guard';
import { ApiTags } from '@nestjs/swagger';
import { ClientType } from '../core/enum';
import { CreateClientDto } from '../client/dto/createclient.dto';

@ApiTags('authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private clientService: ClientService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() credentials: LoginUserDto,@Request() req) {
      try {
        return await this.authService.login(req.user);
      }
      catch(err){
          throw new ForbiddenException({ message: err.message, statusCode:HttpStatus.FORBIDDEN});
      }   
  }

  @UseGuards(DoesUserExist)
  @Post('signup')
  async signUp(@Body() user: CreateUserDto) {  
      try {
        const response = await this.authService.create(user);
        if(response){
              let usertype: CreateClientDto={
                name: user.name,
                email: user.email,
                contactNo: user?.contactNo
              }
              switch(user.clientType){
                case ClientType.ADMIN :{
                  this.clientService.create(usertype);
                  break;
                }
                case ClientType.CLIENT :{
                  this.clientService.create(usertype);
                  break;
                }
                default: {
                  this.clientService.create(usertype);
                  break;
                }
            }         
        }
        return response;
      }
      catch(err){
          throw new ForbiddenException({ message: err.message, statusCode:HttpStatus.FORBIDDEN});
      } 
  }
}
