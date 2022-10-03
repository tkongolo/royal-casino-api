import { Test, TestingModule } from '@nestjs/testing';
import { PlayerRefreshTokenService } from './player-refresh-token.service';

describe('PlayerRefreshTokenService', () => {
  let service: PlayerRefreshTokenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerRefreshTokenService],
    }).compile();

    service = module.get<PlayerRefreshTokenService>(PlayerRefreshTokenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
