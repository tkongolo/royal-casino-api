import { Inject, Injectable } from '@nestjs/common';
import { PlayerDevice } from 'src/database/db-models/player-device.entity';
import { Player } from 'src/database/db-models/player.entity';
import { RoyalcasinologgerService } from 'src/logger/royalcasinologger/royalcasinologger.service';
import { Repository } from 'typeorm';

@Injectable()
export class PlayerDeviceService {
}
