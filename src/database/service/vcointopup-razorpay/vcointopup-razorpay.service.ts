import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Player } from 'src/database/db-models/player.entity';
import { TopupType } from 'src/database/db-models/topup-type.model';
import { VcoinTopUpCompiled } from 'src/database/db-models/vcointopup-compiled.entity';
import { VcoinTopUpRazorPay } from 'src/database/db-models/vcointopup-razorpay.entity';
import { RoyalcasinologgerService } from 'src/logger/royalcasinologger/royalcasinologger.service';
import { Raw, Repository } from 'typeorm';
import { VcointopupCompiledService } from '../vcointopup-compiled/vcointopup-compiled.service';

@Injectable()
export class VcointopupRazorpayService {
    
}
