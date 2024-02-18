import { Injectable } from '@nestjs/common';
import { CreateLifterDto } from './dto/create-lifter.dto';
import { UpdateLifterDto } from './dto/update-lifter.dto';

@Injectable()
export class LifterService {
  create(createLifterDto: CreateLifterDto) {
    return 'This action adds a new lifter';
  }

  findAll() {
    return `This action returns all lifter`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lifter`;
  }

  update(id: number, updateLifterDto: UpdateLifterDto) {
    return `This action updates a #${id} lifter`;
  }

  remove(id: number) {
    return `This action removes a #${id} lifter`;
  }
}
