import { Global, Module } from '@nestjs/common';
import { RoyalcasinologgerService } from './royalcasinologger/royalcasinologger.service';

@Module({
  providers: [RoyalcasinologgerService],
  exports:[RoyalcasinologgerService]
})
export class LoggerModule {}
