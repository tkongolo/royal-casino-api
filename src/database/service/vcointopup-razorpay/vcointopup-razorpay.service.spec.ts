import { Test, TestingModule } from '@nestjs/testing';
import { VcointopupRazorpayService } from './vcointopup-razorpay.service';

describe('VcointopupRazorpayService', () => {
  let service: VcointopupRazorpayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VcointopupRazorpayService],
    }).compile();

    service = module.get<VcointopupRazorpayService>(VcointopupRazorpayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
