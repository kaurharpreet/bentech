import { Test, TestingModule } from '@nestjs/testing';
import { LifterService } from './lifter.service';

describe('LifterService', () => {
  let service: LifterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LifterService],
    }).compile();

    service = module.get<LifterService>(LifterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
