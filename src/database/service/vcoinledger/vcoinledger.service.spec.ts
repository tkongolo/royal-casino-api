import { Test, TestingModule } from '@nestjs/testing';
import { VcoinledgerService } from './vcoinledger.service';

describe('VcoinledgerService', () => {
  let service: VcoinledgerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VcoinledgerService],
    }).compile();

    service = module.get<VcoinledgerService>(VcoinledgerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
