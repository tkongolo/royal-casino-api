import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Player } from 'src/database/db-models/player.entity';
import { RazorpayOrdersStatusType } from 'src/database/db-models/razorpay-order-status.model';
import { RazorpayPayoutStatusType } from 'src/database/db-models/razorpay-payoutlink-status.model';
import { VCoinClaim } from 'src/database/db-models/vcoinclaim.entity';
import { VCoinLedger } from 'src/database/db-models/vcoinledger.entity';
import { VcoinTopUpRazorPay } from 'src/database/db-models/vcointopup-razorpay.entity';
import { PlayerDeviceService } from 'src/database/service/player-device/player-device.service';
import { RazorpayOrdersService } from 'src/database/service/razorpay-orders/razorpay-orders.service';
import { RazorpayPayoutlinkService } from 'src/database/service/razorpay-payoutlink/razorpay-payoutlink.service';
import { VcoinclaimService } from 'src/database/service/vcoinclaim/vcoinclaim.service';
import { VcoinledgerService } from 'src/database/service/vcoinledger/vcoinledger.service';
import { VcointopupRazorpayService } from 'src/database/service/vcointopup-razorpay/vcointopup-razorpay.service';
import { RoyalcasinologgerService } from 'src/logger/royalcasinologger/royalcasinologger.service';
import { MessageDto } from 'src/phone/dtos/message.dto';
import { PayoutDto } from 'src/phone/dtos/payout.dto';
import { TopUpDto } from 'src/phone/dtos/topup.dto';
import { NotificationModel } from 'src/phone/models/notification.model';
import { NotificationSenderService } from '../notification-sender/notification-sender.service';

@Injectable()
export class RazorpayVerificationService {
    
}
