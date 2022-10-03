import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { LoggerModule } from 'src/logger/logger.module';
import { WebController } from './web/web.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserControlService } from './service/user-control/user-control.service';
import { WebInfoService } from './service/web-info/web-info.service';

@Module({
  imports:[DatabaseModule,PassportModule,LoggerModule,
    JwtModule.register({
      secret: process.env.JWT_USER_SECRET,
      signOptions: {expiresIn: process.env.JWT_PLAYER_USER_EXPIRATION},
    })
  ],
  controllers: [WebController],
  providers: [UserControlService, WebInfoService]
})
export class WebModule {}
