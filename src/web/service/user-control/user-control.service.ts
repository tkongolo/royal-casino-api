import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/database/service/user/user.service';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import { RoyalcasinologgerService } from 'src/logger/royalcasinologger/royalcasinologger.service';
import { LoginWebDto } from 'src/web/dtos/login-web.dto';
import { User } from 'src/database/db-models/user.entity';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { UserRefreshTokenService } from 'src/database/service/user-refresh-token/user-refresh-token.service';
import { UserRefreshToken } from 'src/database/db-models/user-refresh-token.entity';
import { RegisterAdminDto } from 'src/web/dtos/register-admin.dto';
import { generatePassword } from 'src/web/utils/utils';
import { UserRoleService } from 'src/database/service/user-role/user-role.service';
import { RefreshDto } from 'src/phone/dtos/refresh.dto';
import { RegisterUserResp } from 'src/web/dtos/register-user-resp.dto';
import { ForgotPasswordDto } from 'src/web/dtos/forgot-password.dto';
import { PasswordResetDto } from 'src/web/dtos/password-reset.dto';
import { MessageDto } from 'src/phone/dtos/message.dto';
import { PlayerService } from 'src/database/service/player/player.service';
import { Player } from 'src/database/db-models/player.entity';
import { UpdateUserDto } from 'src/web/dtos/update-user.dto';

@Injectable()
export class UserControlService {


}
