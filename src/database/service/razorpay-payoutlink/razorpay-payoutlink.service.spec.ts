import { Test, TestingModule } from '@nestjs/testing';
import { RazorpayPayoutlinkService } from './razorpay-payoutlink.service';

describe('RazorpayPayoutlinkService', () => {
  let service: RazorpayPayoutlinkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RazorpayPayoutlinkService],
    }).compile();

    service = module.get<RazorpayPayoutlinkService>(RazorpayPayoutlinkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
