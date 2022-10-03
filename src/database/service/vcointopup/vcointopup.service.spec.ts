import { Test, TestingModule } from '@nestjs/testing';
import { VcointopupService } from './vcointopup.service';

describe('VcointopupService', () => {
  let service: VcointopupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VcointopupService],
    }).compile();

    service = module.get<VcointopupService>(VcointopupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
