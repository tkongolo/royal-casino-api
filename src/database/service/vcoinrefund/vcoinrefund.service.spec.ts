import { Test, TestingModule } from '@nestjs/testing';
import { VcoinrefundService } from './vcoinrefund.service';

describe('VcoinrefundService', () => {
  let service: VcoinrefundService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VcoinrefundService],
    }).compile();

    service = module.get<VcoinrefundService>(VcoinrefundService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
