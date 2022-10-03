import { Test, TestingModule } from '@nestjs/testing';
import { VcoinwinService } from './vcoinwin.service';

describe('VcoinwinService', () => {
  let service: VcoinwinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VcoinwinService],
    }).compile();

    service = module.get<VcoinwinService>(VcoinwinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
