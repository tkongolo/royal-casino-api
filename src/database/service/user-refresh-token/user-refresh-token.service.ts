import { Inject, Injectable } from '@nestjs/common';
import { UserRefreshToken } from 'src/database/db-models/user-refresh-token.entity';
import { User } from 'src/database/db-models/user.entity';
import { RoyalcasinologgerService } from 'src/logger/royalcasinologger/royalcasinologger.service';
import { Repository } from 'typeorm';

@Injectable()
export class UserRefreshTokenService {
    
}
