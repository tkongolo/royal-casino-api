import { Inject, Injectable } from '@nestjs/common';
import { UserRole } from 'src/database/db-models/user-role.entity';
import { User } from 'src/database/db-models/user.entity';
import { RoyalcasinologgerService } from 'src/logger/royalcasinologger/royalcasinologger.service';
import { Repository } from 'typeorm';
import { UserRoleService } from '../user-role/user-role.service';

@Injectable()
export class UserService {
    
}
