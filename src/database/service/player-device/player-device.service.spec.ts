import { Test, TestingModule } from '@nestjs/testing';
import { PlayerDeviceService } from './player-device.service';

describe('PlayerDeviceService', () => {
  let service: PlayerDeviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerDeviceService],
    }).compile();

    service = module.get<PlayerDeviceService>(PlayerDeviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
