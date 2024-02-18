import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LifterService } from './lifter.service';
import { CreateLifterDto } from './dto/create-lifter.dto';
import { UpdateLifterDto } from './dto/update-lifter.dto';

@Controller('lifter')
export class LifterController {
  constructor(private readonly lifterService: LifterService) {}

  @Post()
  create(@Body() createLifterDto: CreateLifterDto) {
    return this.lifterService.create(createLifterDto);
  }

  @Get()
  findAll() {
    return this.lifterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lifterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLifterDto: UpdateLifterDto) {
    return this.lifterService.update(+id, updateLifterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lifterService.remove(+id);
  }
}
