import { Inject, Injectable } from '@nestjs/common';
import { PlayerRefreshToken } from 'src/database/db-models/player-refresh-token.entity';
import { Player } from 'src/database/db-models/player.entity';
import { RoyalcasinologgerService } from 'src/logger/royalcasinologger/royalcasinologger.service';
import { Repository } from 'typeorm';

@Injectable()
export class PlayerRefreshTokenService {
    

}
