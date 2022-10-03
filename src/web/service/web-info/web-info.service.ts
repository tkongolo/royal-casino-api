import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Player } from 'src/database/db-models/player.entity';
import { User } from 'src/database/db-models/user.entity';
import { VCoinLedger } from 'src/database/db-models/vcoinledger.entity';
import { VCoinWin } from 'src/database/db-models/vcoinwin.entity';
import { PlayerService } from 'src/database/service/player/player.service';
import { UserService } from 'src/database/service/user/user.service';
import { VcoinclaimService } from 'src/database/service/vcoinclaim/vcoinclaim.service';
import { VcoinledgerService } from 'src/database/service/vcoinledger/vcoinledger.service';
import { VcoinloseService } from 'src/database/service/vcoinlose/vcoinlose.service';
import { VcoinrewardService } from 'src/database/service/vcoinreward/vcoinreward.service';
import { VcointopupCompiledService } from 'src/database/service/vcointopup-compiled/vcointopup-compiled.service';
import { VcointopupRazorpayService } from 'src/database/service/vcointopup-razorpay/vcointopup-razorpay.service';
import { VcointopupShareService } from 'src/database/service/vcointopup-share/vcointopup-share.service';
import { VcoinwinService } from 'src/database/service/vcoinwin/vcoinwin.service';
import { RoyalcasinologgerService } from 'src/logger/royalcasinologger/royalcasinologger.service';
import { DashboardDto } from 'src/web/dtos/dashboard.dto';
import { GamesInfo } from 'src/web/dtos/games-info';
import { GameTypeModel } from 'src/web/utils/models/models';

@Injectable()
export class WebInfoService {

}
