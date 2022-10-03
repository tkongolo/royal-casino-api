import { Test, TestingModule } from '@nestjs/testing';
import { NotificationSenderService } from './notification-sender.service';

describe('NotificationSenderService', () => {
  let service: NotificationSenderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificationSenderService],
    }).compile();

    service = module.get<NotificationSenderService>(NotificationSenderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
