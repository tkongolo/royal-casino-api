import { Module } from '@nestjs/common';
import { WebModule } from './web/web.module';
import { PhoneModule } from './phone/phone.module';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from './logger/logger.module';
import configuration from './config/configuration';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load:[configuration]
    }),
    WebModule, PhoneModule,LoggerModule,DatabaseModule
  ],
})
export class AppModule {}
