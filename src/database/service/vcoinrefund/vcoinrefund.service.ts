import { Inject, Injectable } from '@nestjs/common';
import { TransactionType } from 'src/database/db-models/transaction-type.model';
import { VCoinLedger } from 'src/database/db-models/vcoinledger.entity';
import { VCoinRefund } from 'src/database/db-models/vcoinrefund.entity';
import { RoyalcasinologgerService } from 'src/logger/royalcasinologger/royalcasinologger.service';
import { Repository } from 'typeorm';
import { VcoinledgerService } from '../vcoinledger/vcoinledger.service';

@Injectable()
export class VcoinrefundService {
    
}
