import { Injectable, Inject } from '@nestjs/common';
import { SR_REPOSITORY } from '../core/constants';
import { CreateServiceRequestDto } from './dto/create-service-request.dto';
import { ServiceRequest } from './entities/service-request.entity';
import { Client } from '../client/entities/client.entity';
@Injectable()
export class ServiceRequestService {
  constructor(
    @Inject(SR_REPOSITORY) private readonly srRepository: typeof ServiceRequest,
  ) {}

  async create(createServiceRequestDto: CreateServiceRequestDto, clientId) {
    return await this.srRepository.create<ServiceRequest>({
      ...createServiceRequestDto, clientId
    });
  }

  findAll(clientId) {
    return this.srRepository.findAndCountAll({ where: { clientId: clientId },
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
      include: [{
          model: Client,
          attributes: { exclude: ['gstNo','effluentType','effluentRate','storageTank','monthlyEffluentGenerated','agreementStartDate','agreementEndDate','industryCategory','securityDeposit','membershipStatus','qrCode','createdAt','updatedAt','deletedAt'] }
      }],
    });
  }

  findOne(id: number) {
    return this.srRepository.findOne({ where: { id },
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
      include: [{
          model: Client,
          attributes: { exclude: ['gstNo','effluentType','effluentRate','storageTank','monthlyEffluentGenerated','agreementStartDate','agreementEndDate','industryCategory','securityDeposit','membershipStatus','qrCode','createdAt','updatedAt','deletedAt'] }
      }], 
    });
  }

}
