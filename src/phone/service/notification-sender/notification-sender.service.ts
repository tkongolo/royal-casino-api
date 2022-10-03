import { Injectable } from '@nestjs/common';
import { RoyalcasinologgerService } from 'src/logger/royalcasinologger/royalcasinologger.service';
import { getMessaging, Message } from 'firebase-admin/messaging';
import { NotificationModel } from 'src/phone/models/notification.model';

@Injectable()
export class NotificationSenderService {
    
}
