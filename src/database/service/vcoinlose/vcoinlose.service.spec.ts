import { Test, TestingModule } from '@nestjs/testing';
import { VcoinloseService } from './vcoinlose.service';

describe('VcoinloseService', () => {
  let service: VcoinloseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VcoinloseService],
    }).compile();

    service = module.get<VcoinloseService>(VcoinloseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
