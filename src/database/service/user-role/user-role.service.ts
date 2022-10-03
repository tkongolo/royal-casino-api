import { Inject, Injectable } from '@nestjs/common';
import { RolePermissions } from 'src/database/db-models/role-permissions.entity';
import { UserRole } from 'src/database/db-models/user-role.entity';
import { RoyalcasinologgerService } from 'src/logger/royalcasinologger/royalcasinologger.service';
import { Repository } from 'typeorm';
import { RolePermissionsService } from '../role-permissions/role-permissions.service';

@Injectable()
export class UserRoleService {
    
}
