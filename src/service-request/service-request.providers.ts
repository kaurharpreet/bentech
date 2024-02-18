import { ServiceRequest } from './entities/service-request.entity';
import { SR_REPOSITORY } from '../core/constants';

export const ServiceRequestProviders = [
  {
    provide: SR_REPOSITORY,
    useValue: ServiceRequest,
  },
];
