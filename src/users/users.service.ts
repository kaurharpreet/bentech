import { Injectable, Inject } from '@nestjs/common';

import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/createuser.dto';
import { USER_REPOSITORY } from '../core/constants';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async create(user: CreateUserDto): Promise<User> {
    return await this.userRepository.create<User>(user);
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne<User>({ 
      where: { email, isActive:true },
      attributes: { exclude: ['isActive','createdAt', 'updatedAt', 'deletedAt'] } 
    });
  }

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({ 
      where: { id, isActive:true },
      attributes: { exclude: ['isActive','createdAt', 'updatedAt', 'deletedAt'] } 
    });
  }
}
