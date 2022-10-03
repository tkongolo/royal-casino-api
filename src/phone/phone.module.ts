import { Module } from '@nestjs/common';
import { PhoneController } from './phone/phone.controller';
import { DatabaseModule } from 'src/database/database.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt/jwt.strategy';
import { LoggerModule } from 'src/logger/logger.module';
import { NotificationSenderService } from './service/notification-sender/notification-sender.service';
import { PlayerControlService } from './service/player-control/player-control.service';
import { DocService } from './service/doc/doc.service';
import { GameService } from './service/game/game.service';
import { HttpModule } from '@nestjs/axios';
import { TransactionService } from './service/transaction/transaction.service';
import { RazorpayVerificationService } from './service/razorpay-verification/razorpay-verification.service';

@Module({
  imports:[
    DatabaseModule, PassportModule,LoggerModule,
    JwtModule.register({
      secret: process.env.JWT_PLAYER_SECRET,
      signOptions: {expiresIn: process.env.JWT_PLAYER_USER_EXPIRATION},
    }),
    HttpModule.register({
      timeout: parseInt(process.env.AXIOS_TIMEOUT),
      maxRedirects: parseInt(process.env.AXIOS_MAX_REDIRECTS),
    }),
  ],
  controllers: [PhoneController],
  providers: [JwtStrategy, NotificationSenderService, PlayerControlService, DocService, GameService,RazorpayVerificationService, TransactionService]
})
export class PhoneModule {}
