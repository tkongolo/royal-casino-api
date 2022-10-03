import { Inject, Injectable } from '@nestjs/common';
import { RolePermissions } from 'src/database/db-models/role-permissions.entity';
import { RoyalcasinologgerService } from 'src/logger/royalcasinologger/royalcasinologger.service';
import { Repository } from 'typeorm';

@Injectable()
export class RolePermissionsService {
}
