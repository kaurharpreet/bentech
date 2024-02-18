import { Module } from '@nestjs/common';
import { ServiceRequestService } from './service-request.service';
import { ServiceRequestController } from './service-request.controller';
import { ServiceRequestProviders } from './service-request.providers';

@Module({
  controllers: [ServiceRequestController],
  providers: [ServiceRequestService, ...ServiceRequestProviders],
})
export class ServiceRequestModule {}
