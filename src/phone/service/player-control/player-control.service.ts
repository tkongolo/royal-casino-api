import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PlayerDevice } from 'src/database/db-models/player-device.entity';
import { PlayerRefreshToken } from 'src/database/db-models/player-refresh-token.entity';
import { Player } from 'src/database/db-models/player.entity';
import { ShareUser } from 'src/database/db-models/share-user.entity';
import { VCoinLedger } from 'src/database/db-models/vcoinledger.entity';
import { VcoinTopUpShare } from 'src/database/db-models/vcointopup-share.entity';
import { PlayerDeviceService } from 'src/database/service/player-device/player-device.service';
import { PlayerRefreshTokenService } from 'src/database/service/player-refresh-token/player-refresh-token.service';
import { PlayerService } from 'src/database/service/player/player.service';
import { ShareUserService } from 'src/database/service/share-user/share-user.service';
import { VcoinledgerService } from 'src/database/service/vcoinledger/vcoinledger.service';
import { VcointopupShareService } from 'src/database/service/vcointopup-share/vcointopup-share.service';
import { RoyalcasinologgerService } from 'src/logger/royalcasinologger/royalcasinologger.service';
import { DeviceUpdateDto } from 'src/phone/dtos/device-update.dto';
import { LoginDto } from 'src/phone/dtos/login.dto';
import { MessageDto } from 'src/phone/dtos/message.dto';
import { RefreshDto } from 'src/phone/dtos/refresh.dto';
import { RegisterPlayerDto } from 'src/phone/dtos/register-player.dto';
import { UpdatePlayerDto } from 'src/phone/dtos/update-player.dto';
import { NotificationModel } from 'src/phone/models/notification.model';
import { generatePlayer, generateSummaryProfileDto, initializeAppDevice, initializeLedger } from 'src/phone/utils/utils';
import { NotificationSenderService } from '../notification-sender/notification-sender.service';

@Injectable()
export class PlayerControlService {
    

    
}
