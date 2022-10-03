import { Inject, Injectable } from '@nestjs/common';
import { Player } from 'src/database/db-models/player.entity';
import { TransactionType } from 'src/database/db-models/transaction-type.model';
import { VCoinLedger } from 'src/database/db-models/vcoinledger.entity';
import { RoyalcasinologgerService } from 'src/logger/royalcasinologger/royalcasinologger.service';
import { Raw, Repository, Transaction} from 'typeorm';

@Injectable()
export class VcoinledgerService {
    

}
