import { Test, TestingModule } from '@nestjs/testing';
import { UserControlService } from './user-control.service';

describe('UserControlService', () => {
  let service: UserControlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserControlService],
    }).compile();

    service = module.get<UserControlService>(UserControlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
