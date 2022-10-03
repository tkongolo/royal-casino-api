import { Test, TestingModule } from '@nestjs/testing';
import { WebNotificationsService } from './web-notifications.service';

describe('WebNotificationsService', () => {
  let service: WebNotificationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebNotificationsService],
    }).compile();

    service = module.get<WebNotificationsService>(WebNotificationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
