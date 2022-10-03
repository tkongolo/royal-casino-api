import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Player } from 'src/database/db-models/player.entity';
import { TransactionType } from 'src/database/db-models/transaction-type.model';
import { VCoinClaim } from 'src/database/db-models/vcoinclaim.entity';
import { VCoinLedger } from 'src/database/db-models/vcoinledger.entity';
import { WebNotifications } from 'src/database/db-models/web-notifications.entity';
import { RoyalcasinologgerService } from 'src/logger/royalcasinologger/royalcasinologger.service';
import { Raw, Repository } from 'typeorm';
import { VcoinledgerService } from '../vcoinledger/vcoinledger.service';
import { WebNotificationsService } from '../web-notifications/web-notifications.service';

@Injectable()
export class VcoinclaimService {
    
}
