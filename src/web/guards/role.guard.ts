import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { User } from 'src/database/db-models/user.entity';
import { UserService } from 'src/database/service/user/user.service';
import { RoyalcasinologgerService } from 'src/logger/royalcasinologger/royalcasinologger.service';

@Injectable()
export class RoleGuard implements CanActivate {

}
