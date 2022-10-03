import { Inject, Injectable } from '@nestjs/common';
import { RazorpayOrders } from 'src/database/db-models/razorpay-orders.entity';
import { RazorpayPayoutlink } from 'src/database/db-models/razorpay-payoutlink.entity';
import { RoyalcasinologgerService } from 'src/logger/royalcasinologger/royalcasinologger.service';
import { Repository } from 'typeorm';

@Injectable()
export class RazorpayPayoutlinkService {

}
