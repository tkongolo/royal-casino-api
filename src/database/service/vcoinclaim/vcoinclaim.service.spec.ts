import { Test, TestingModule } from '@nestjs/testing';
import { VcoinclaimService } from './vcoinclaim.service';

describe('VcoinclaimService', () => {
  let service: VcoinclaimService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VcoinclaimService],
    }).compile();

    service = module.get<VcoinclaimService>(VcoinclaimService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
