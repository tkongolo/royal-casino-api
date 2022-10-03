import { Module } from '@nestjs/common';
import { databaseProviders } from './config/database.provider';
import { documentationRequestProviders, gameProviders, playerDeviceRequestProviders, playerProviders, playerRefreshTokenProviders, razorpayOrdersProviders, razorpayPayoutlinkProviders, refundRequestProviders, rolePermissionsProviders, shareUserRequestProviders, userProviders, userRefreshTokenProviders, userRoleProviders, vcoinClaimProviders, vcoinLedgerProviders, vcoinLoseProviders, vcoinRefundProviders, vcoinRewardProviders, vcoinTopupCompiledProviders, vcoinTopUpProviders, vcoinTopupRazorPayProviders, vcoinTopupShareProviders, vcoinTopupTestPayProviders, vcoinWinProviders, webnotificationRequestProviders } from './repositories/db.repositories';
import { PlayerService } from './service/player/player.service';
import { RolePermissionsService } from './service/role-permissions/role-permissions.service';
import { UserRoleService } from './service/user-role/user-role.service';
import { UserService } from './service/user/user.service';
import { VcoinledgerService } from './service/vcoinledger/vcoinledger.service';
import { VcoinloseService } from './service/vcoinlose/vcoinlose.service';
import { VcointopupService } from './service/vcointopup/vcointopup.service';
import { VcoinwinService } from './service/vcoinwin/vcoinwin.service';
import { PlayerRefreshTokenService } from './service/player-refresh-token/player-refresh-token.service';
import { LoggerModule } from 'src/logger/logger.module';
import { GamesService } from './service/games/games.service';
import { VcoinclaimService } from './service/vcoinclaim/vcoinclaim.service';
import { VcoinrefundService } from './service/vcoinrefund/vcoinrefund.service';
import { RefundRequestService } from './service/refund-request/refund-request.service';
import { UserRefreshTokenService } from './service/user-refresh-token/user-refresh-token.service';
import { DocumentationService } from './service/documentation/documentation.service';
import { ShareUserService } from './service/share-user/share-user.service';
import { WebNotificationsService } from './service/web-notifications/web-notifications.service';
import { PlayerDeviceService } from './service/player-device/player-device.service';
import { VcoinrewardService } from './service/vcoinreward/vcoinreward.service';
import { RazorpayOrdersService } from './service/razorpay-orders/razorpay-orders.service';
import { VcointopupTestpayService } from './service/vcointopup-testpay/vcointopup-testpay.service';
import { VcointopupShareService } from './service/vcointopup-share/vcointopup-share.service';
import { VcointopupRazorpayService } from './service/vcointopup-razorpay/vcointopup-razorpay.service';
import { RazorpayPayoutlinkService } from './service/razorpay-payoutlink/razorpay-payoutlink.service';
import { VcointopupCompiledService } from './service/vcointopup-compiled/vcointopup-compiled.service';

@Module({
    imports: [LoggerModule],
    providers: [
        PlayerService, RolePermissionsService, UserRoleService, UserService, VcoinledgerService, VcoinloseService, VcointopupService, VcoinwinService,PlayerRefreshTokenService, GamesService, VcoinclaimService, VcoinrefundService,RefundRequestService, UserRefreshTokenService, DocumentationService,WebNotificationsService, ShareUserService,PlayerDeviceService,VcoinrewardService,RazorpayOrdersService,VcointopupTestpayService,VcointopupShareService,VcointopupRazorpayService,RazorpayPayoutlinkService,VcointopupCompiledService,
        ...databaseProviders,
        ...gameProviders,...playerProviders,...playerRefreshTokenProviders,...rolePermissionsProviders,...userRoleProviders,...userProviders,...vcoinLedgerProviders,...vcoinLoseProviders,...vcoinClaimProviders,...vcoinRefundProviders,...vcoinTopUpProviders,...vcoinWinProviders,...refundRequestProviders,...userRefreshTokenProviders,...documentationRequestProviders,...webnotificationRequestProviders,...shareUserRequestProviders,...playerDeviceRequestProviders,...vcoinRewardProviders,...razorpayOrdersProviders,...vcoinTopupTestPayProviders,...vcoinTopupShareProviders,...vcoinTopupRazorPayProviders,...vcoinTopupCompiledProviders,...razorpayPayoutlinkProviders
    ],
    exports:[PlayerService,RolePermissionsService,UserRoleService,UserService,PlayerRefreshTokenService,VcoinledgerService,VcoinloseService,VcointopupService,VcoinclaimService,VcoinwinService,GamesService,RefundRequestService,UserRefreshTokenService,DocumentationService,WebNotificationsService, ShareUserService,PlayerDeviceService,VcoinrewardService,RazorpayOrdersService,VcointopupCompiledService,VcointopupTestpayService,VcointopupShareService,VcointopupRazorpayService,RazorpayPayoutlinkService]
})
export class DatabaseModule {}
