import { Test, TestingModule } from '@nestjs/testing';
import { RazorpayOrdersService } from './razorpay-orders.service';

describe('RazorpayOrdersService', () => {
  let service: RazorpayOrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RazorpayOrdersService],
    }).compile();

    service = module.get<RazorpayOrdersService>(RazorpayOrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
