import { Test, TestingModule } from '@nestjs/testing';
import { VcointopupCompiledService } from './vcointopup-compiled.service';

describe('VcointopupCompiledService', () => {
  let service: VcointopupCompiledService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VcointopupCompiledService],
    }).compile();

    service = module.get<VcointopupCompiledService>(VcointopupCompiledService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
