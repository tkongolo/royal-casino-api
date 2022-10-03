import { Connection } from "typeorm";
import { Documentation } from "../db-models/documentation.entity";
import { Games } from "../db-models/games.entity";
import { PlayerDevice } from "../db-models/player-device.entity";
import { PlayerRefreshToken } from "../db-models/player-refresh-token.entity";
import { Player } from "../db-models/player.entity";
import { RazorpayOrders } from "../db-models/razorpay-orders.entity";
import { RazorpayPayoutlink } from "../db-models/razorpay-payoutlink.entity";
import { RefundRequest } from "../db-models/refund-request.entity";
import { RolePermissions } from "../db-models/role-permissions.entity";
import { ShareUser } from "../db-models/share-user.entity";
import { UserRefreshToken } from "../db-models/user-refresh-token.entity";
import { UserRole } from "../db-models/user-role.entity";
import { User } from "../db-models/user.entity";
import { VCoinClaim } from "../db-models/vcoinclaim.entity";
import { VCoinLedger } from "../db-models/vcoinledger.entity";
import { VCoinLose } from "../db-models/vcoinlose.entity";
import { VCoinRefund } from "../db-models/vcoinrefund.entity";
import { VCoinReward } from "../db-models/vcoinreward.entity";
import { VcoinTopUpCompiled } from "../db-models/vcointopup-compiled.entity";
import { VcoinTopUpRazorPay } from "../db-models/vcointopup-razorpay.entity";
import { VcoinTopUpShare } from "../db-models/vcointopup-share.entity";
import { VcoinTopUpTestPay } from "../db-models/vcointopup-testpay.entity";
import { VCoinTopUp } from "../db-models/vcointopup.entity";
import { VCoinWin } from "../db-models/vcoinwin.entity";
import { WebNotifications } from "../db-models/web-notifications.entity";


export const playerProviders = [
    {
      provide: 'PLAYER_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(Player),
      inject: ['DATABASE_CONNECTION'],
    },
];

export const gameProviders = [
  {
    provide: 'GAME_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Games),
    inject: ['DATABASE_CONNECTION'],
  }
];

export const playerRefreshTokenProviders = [
  {
    provide: 'PLAYER_REFRESH_TOKEN_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(PlayerRefreshToken),
    inject: ['DATABASE_CONNECTION'],
  },
];

export const userRefreshTokenProviders = [
  {
    provide: 'USER_REFRESH_TOKEN_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(UserRefreshToken),
    inject: ['DATABASE_CONNECTION'],
  },
];

export const rolePermissionsProviders = [
    {
      provide: 'ROLE_PERMISSIONS_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(RolePermissions),
      inject: ['DATABASE_CONNECTION'],
    },
];

export const userRoleProviders = [
    {
      provide: 'USER_ROLE_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(UserRole),
      inject: ['DATABASE_CONNECTION'],
    },
];

export const userProviders = [
    {
      provide: 'USER_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(User),
      inject: ['DATABASE_CONNECTION'],
    },
];

export const vcoinLedgerProviders = [
    {
      provide: 'VCOIN_LEDGER_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(VCoinLedger),
      inject: ['DATABASE_CONNECTION'],
    },
];

export const vcoinLoseProviders = [
    {
      provide: 'VCOIN_LOSE_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(VCoinLose),
      inject: ['DATABASE_CONNECTION'],
    },
];

export const vcoinWinProviders = [
  {
    provide: 'VCOIN_WIN_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(VCoinWin),
    inject: ['DATABASE_CONNECTION'],
  },
];

export const vcoinTopUpProviders = [
    {
      provide: 'VCOIN_TOP_UP_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(VCoinTopUp),
      inject: ['DATABASE_CONNECTION'],
    },
];

export const vcoinClaimProviders = [
  {
    provide: 'VCOIN_CLAIM_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(VCoinClaim),
    inject: ['DATABASE_CONNECTION'],
  }
];

export const vcoinRefundProviders = [
  {
    provide: 'VCOIN_REFUND_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(VCoinRefund),
    inject: ['DATABASE_CONNECTION'],
  }
];
export const refundRequestProviders = [
  {
    provide: 'REFUND_REQUEST_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(RefundRequest),
    inject: ['DATABASE_CONNECTION'],
  }
];

export const documentationRequestProviders = [
  {
    provide: 'DOCUMENTATION_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Documentation),
    inject: ['DATABASE_CONNECTION'],
  }
];

export const webnotificationRequestProviders = [
  {
    provide: 'WEB_NOTIFICATION_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(WebNotifications),
    inject: ['DATABASE_CONNECTION'],
  }
];

export const shareUserRequestProviders = [
  {
    provide: 'SHARE_USER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(ShareUser),
    inject: ['DATABASE_CONNECTION'],
  }
];

export const playerDeviceRequestProviders = [
  {
    provide: 'PLAYER_DEVICE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(PlayerDevice),
    inject: ['DATABASE_CONNECTION'],
  }
];

export const vcoinRewardProviders = [
  {
    provide: 'VCOIN_REWARD_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(VCoinReward),
    inject: ['DATABASE_CONNECTION'],
  }
];

export const razorpayOrdersProviders = [
  {
    provide: 'RAZORPAY_ORDERS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(RazorpayOrders),
    inject: ['DATABASE_CONNECTION'],
  }
];

export const razorpayPayoutlinkProviders = [
  {
    provide: 'RAZORPAY_PAYOUT_LINK_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(RazorpayPayoutlink),
    inject: ['DATABASE_CONNECTION'],
  }
];

export const vcoinTopupTestPayProviders = [
  {
    provide: 'VCOINTOPUP_TESTPAY_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(VcoinTopUpTestPay),
    inject: ['DATABASE_CONNECTION'],
  }
];

export const vcoinTopupShareProviders = [
  {
    provide: 'VCOINTOPUP_SHARE_REWARD_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(VcoinTopUpShare),
    inject: ['DATABASE_CONNECTION'],
  }
];

export const vcoinTopupRazorPayProviders = [
  {
    provide: 'VCOINTOPUP_RAZORPAY_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(VcoinTopUpRazorPay),
    inject: ['DATABASE_CONNECTION'],
  }
];

export const vcoinTopupCompiledProviders = [
  {
    provide: 'VCOINTOPUP_COMPILED_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(VcoinTopUpCompiled),
    inject: ['DATABASE_CONNECTION'],
  }
];