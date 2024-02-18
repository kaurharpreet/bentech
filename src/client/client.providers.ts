import { Client } from './entities/client.entity';
import { CLIENT_REPOSITORY } from '../core/constants';

export const ClientProviders = [
  {
    provide: CLIENT_REPOSITORY,
    useValue: Client,
  },
];
