import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Player } from 'src/database/db-models/player.entity';
import { RazorpayOrdersStatusType } from 'src/database/db-models/razorpay-order-status.model';
import { RazorpayOrders } from 'src/database/db-models/razorpay-orders.entity';
import { RazorpayPayoutStatusType } from 'src/database/db-models/razorpay-payoutlink-status.model';
import { RazorpayPayoutlink } from 'src/database/db-models/razorpay-payoutlink.entity';
import { VCoinLedger } from 'src/database/db-models/vcoinledger.entity';
import { VcoinTopUpTestPay } from 'src/database/db-models/vcointopup-testpay.entity';
import { PlayerDeviceService } from 'src/database/service/player-device/player-device.service';
import { PlayerService } from 'src/database/service/player/player.service';
import { RazorpayOrdersService } from 'src/database/service/razorpay-orders/razorpay-orders.service';
import { RazorpayPayoutlinkService } from 'src/database/service/razorpay-payoutlink/razorpay-payoutlink.service';
import { VcoinledgerService } from 'src/database/service/vcoinledger/vcoinledger.service';
import { VcointopupTestpayService } from 'src/database/service/vcointopup-testpay/vcointopup-testpay.service';
import { RoyalcasinologgerService } from 'src/logger/royalcasinologger/royalcasinologger.service';
import { MessageDto } from 'src/phone/dtos/message.dto';
import { TestTransactionMainDto } from 'src/phone/dtos/test-transaction-main.dto';
import { TransactionMainRespDto } from 'src/phone/dtos/transaction-main-resp.dto';
import { TransactionMainDto } from 'src/phone/dtos/transaction-main.dto';
import { TransactionSuccessRazor } from 'src/phone/dtos/transaction-success-razor.dto';
import { NotificationModel } from 'src/phone/models/notification.model';
import { NotificationSenderService } from '../notification-sender/notification-sender.service';
import { TransactionMainAmountRespDto } from 'src/phone/dtos/transaction-main-amount-resp.dto';
import { VcointopupRazorpayService } from 'src/database/service/vcointopup-razorpay/vcointopup-razorpay.service';
import { check } from 'prettier';
import { VcoinTopUpRazorPay } from 'src/database/db-models/vcointopup-razorpay.entity';

@Injectable()
export class TransactionService {
    
}
