import { Test, TestingModule } from '@nestjs/testing';
import { LifterController } from './lifter.controller';
import { LifterService } from './lifter.service';

describe('LifterController', () => {
  let controller: LifterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LifterController],
      providers: [LifterService],
    }).compile();

    controller = module.get<LifterController>(LifterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
