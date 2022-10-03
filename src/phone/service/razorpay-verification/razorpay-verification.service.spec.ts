import { Test, TestingModule } from '@nestjs/testing';
import { RazorpayVerificationService } from './razorpay-verification.service';

describe('RazorpayVerificationService', () => {
  let service: RazorpayVerificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RazorpayVerificationService],
    }).compile();

    service = module.get<RazorpayVerificationService>(RazorpayVerificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
