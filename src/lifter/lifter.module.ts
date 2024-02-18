import { Module } from '@nestjs/common';
import { LifterService } from './lifter.service';
import { LifterController } from './lifter.controller';

@Module({
  controllers: [LifterController],
  providers: [LifterService],
})
export class LifterModule {}
