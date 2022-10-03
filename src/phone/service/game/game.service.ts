import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Games } from 'src/database/db-models/games.entity';
import { Player } from 'src/database/db-models/player.entity';
import { ShareUser } from 'src/database/db-models/share-user.entity';
import { VCoinLedger } from 'src/database/db-models/vcoinledger.entity';
import { VCoinLose } from 'src/database/db-models/vcoinlose.entity';
import { VCoinReward } from 'src/database/db-models/vcoinreward.entity';
import { VCoinWin } from 'src/database/db-models/vcoinwin.entity';
import { GamesService } from 'src/database/service/games/games.service';
import { PlayerDeviceService } from 'src/database/service/player-device/player-device.service';
import { PlayerService } from 'src/database/service/player/player.service';
import { ShareUserService } from 'src/database/service/share-user/share-user.service';
import { VcoinledgerService } from 'src/database/service/vcoinledger/vcoinledger.service';
import { VcoinloseService } from 'src/database/service/vcoinlose/vcoinlose.service';
import { VcoinrewardService } from 'src/database/service/vcoinreward/vcoinreward.service';
import { VcoinwinService } from 'src/database/service/vcoinwin/vcoinwin.service';
import { RoyalcasinologgerService } from 'src/logger/royalcasinologger/royalcasinologger.service';
import { GamesResponseDto } from 'src/phone/dtos/games-response.dto';
import { GamesResState } from 'src/phone/models/games-res-state.model';
import { GamesResponse } from 'src/phone/models/games-response.model';
import { NotificationModel } from 'src/phone/models/notification.model';
import { getGameNameForDb, getPlayerStatus } from 'src/phone/utils/utils';
import { NotificationSenderService } from '../notification-sender/notification-sender.service';

@Injectable()
export class GameService {
    
}
