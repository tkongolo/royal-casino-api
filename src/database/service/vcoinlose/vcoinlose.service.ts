import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Player } from 'src/database/db-models/player.entity';
import { TransactionType } from 'src/database/db-models/transaction-type.model';
import { VCoinLedger } from 'src/database/db-models/vcoinledger.entity';
import { VCoinLose } from 'src/database/db-models/vcoinlose.entity';
import { WebNotifications } from 'src/database/db-models/web-notifications.entity';
import { RoyalcasinologgerService } from 'src/logger/royalcasinologger/royalcasinologger.service';
import { Raw, Repository } from 'typeorm';
import { GamesService } from '../games/games.service';
import { VcoinledgerService } from '../vcoinledger/vcoinledger.service';
import { WebNotificationsService } from '../web-notifications/web-notifications.service';

@Injectable()
export class VcoinloseService {
    

}
