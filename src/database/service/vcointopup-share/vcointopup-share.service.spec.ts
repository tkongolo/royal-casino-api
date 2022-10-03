import { Test, TestingModule } from '@nestjs/testing';
import { VcointopupShareService } from './vcointopup-share.service';

describe('VcointopupShareService', () => {
  let service: VcointopupShareService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VcointopupShareService],
    }).compile();

    service = module.get<VcointopupShareService>(VcointopupShareService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
