import { Test, TestingModule } from '@nestjs/testing';
import { RoyalcasinologgerService } from './royalcasinologger.service';

describe('RoyalcasinologgerService', () => {
  let service: RoyalcasinologgerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoyalcasinologgerService],
    }).compile();

    service = module.get<RoyalcasinologgerService>(RoyalcasinologgerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
