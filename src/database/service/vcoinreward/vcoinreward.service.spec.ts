import { Test, TestingModule } from '@nestjs/testing';
import { VcoinrewardService } from './vcoinreward.service';

describe('VcoinrewardService', () => {
  let service: VcoinrewardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VcoinrewardService],
    }).compile();

    service = module.get<VcoinrewardService>(VcoinrewardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
