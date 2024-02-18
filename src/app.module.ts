import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './core/database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ClientModule } from './client/client.module';
import { ServiceRequestModule } from './service-request/service-request.module';
import { LifterModule } from './lifter/lifter.module';
import { AdminModule } from './admin/admin.module';
import { HttpExceptionFilter } from './core/exceptions/http-exception.filter';
import { APP_FILTER } from '@nestjs/core';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    ClientModule,
    ServiceRequestModule,
    AdminModule,
    LifterModule,
  ],
  controllers: [],
  providers: [{
    provide: APP_FILTER,
    useClass: HttpExceptionFilter
  }],
})
export class AppModule {}
