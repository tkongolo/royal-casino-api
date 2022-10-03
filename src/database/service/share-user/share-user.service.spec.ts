import { Test, TestingModule } from '@nestjs/testing';
import { ShareUserService } from './share-user.service';

describe('ShareUserService', () => {
  let service: ShareUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShareUserService],
    }).compile();

    service = module.get<ShareUserService>(ShareUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
