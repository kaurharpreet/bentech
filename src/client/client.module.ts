import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { ClientProviders } from './client.providers';
import { UsersModule } from '../users/users.module';
import { AuthService } from '../auth/auth.service';

@Module({
  imports: [
      UsersModule,
      PassportModule,
      JwtModule.register({
        secret: process.env.JWTKEY,
        signOptions: { expiresIn: process.env.TOKEN_EXPIRATION },
      }),
    ],
  controllers: [ClientController],
  providers: [AuthService, ClientService, ...ClientProviders],
  exports: [ClientService]
})
export class ClientModule {}
