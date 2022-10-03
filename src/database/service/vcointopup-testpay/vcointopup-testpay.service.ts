import { Inject, Injectable } from '@nestjs/common';
import { TopupType } from 'src/database/db-models/topup-type.model';
import { VcoinTopUpCompiled } from 'src/database/db-models/vcointopup-compiled.entity';
import { VcoinTopUpTestPay } from 'src/database/db-models/vcointopup-testpay.entity';
import { RoyalcasinologgerService } from 'src/logger/royalcasinologger/royalcasinologger.service';
import { Repository } from 'typeorm';
import { VcointopupCompiledService } from '../vcointopup-compiled/vcointopup-compiled.service';

@Injectable()
export class VcointopupTestpayService {
    
}
