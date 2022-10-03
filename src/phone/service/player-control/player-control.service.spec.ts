import { Test, TestingModule } from '@nestjs/testing';
import { PlayerControlService } from './player-control.service';

describe('PlayerControlService', () => {
  let service: PlayerControlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerControlService],
    }).compile();

    service = module.get<PlayerControlService>(PlayerControlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
