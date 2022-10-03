import { Test, TestingModule } from '@nestjs/testing';
import { WebInfoService } from './web-info.service';

describe('WebInfoService', () => {
  let service: WebInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebInfoService],
    }).compile();

    service = module.get<WebInfoService>(WebInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
