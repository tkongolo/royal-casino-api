import { Test, TestingModule } from '@nestjs/testing';
import { VcointopupTestpayService } from './vcointopup-testpay.service';

describe('VcointopupTestpayService', () => {
  let service: VcointopupTestpayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VcointopupTestpayService],
    }).compile();

    service = module.get<VcointopupTestpayService>(VcointopupTestpayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
