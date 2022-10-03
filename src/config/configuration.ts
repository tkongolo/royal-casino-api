import { Documentation } from "src/database/db-models/documentation.entity";
import { Games } from "src/database/db-models/games.entity";
import { PlayerDevice } from "src/database/db-models/player-device.entity";
import { PlayerRefreshToken } from "src/database/db-models/player-refresh-token.entity";
import { Player } from "src/database/db-models/player.entity";
import { RazorpayOrders } from "src/database/db-models/razorpay-orders.entity";
import { RazorpayPayoutlink } from "src/database/db-models/razorpay-payoutlink.entity";
import { RefundRequest } from "src/database/db-models/refund-request.entity";
import { RolePermissions } from "src/database/db-models/role-permissions.entity";
import { ShareUser } from "src/database/db-models/share-user.entity";
import { UserRefreshToken } from "src/database/db-models/user-refresh-token.entity";
import { UserRole } from "src/database/db-models/user-role.entity";
import { User } from "src/database/db-models/user.entity";
import { VCoinClaim } from "src/database/db-models/vcoinclaim.entity";
import { VCoinLedger } from "src/database/db-models/vcoinledger.entity";
import { VCoinLose } from "src/database/db-models/vcoinlose.entity";
import { VCoinRefund } from "src/database/db-models/vcoinrefund.entity";
import { VCoinReward } from "src/database/db-models/vcoinreward.entity";
import { VcoinTopUpCompiled } from "src/database/db-models/vcointopup-compiled.entity";
import { VcoinTopUpRazorPay } from "src/database/db-models/vcointopup-razorpay.entity";
import { VcoinTopUpShare } from "src/database/db-models/vcointopup-share.entity";
import { VcoinTopUpTestPay } from "src/database/db-models/vcointopup-testpay.entity";
import { VCoinTopUp } from "src/database/db-models/vcointopup.entity";
import { VCoinWin } from "src/database/db-models/vcoinwin.entity";
import { WebNotifications } from "src/database/db-models/web-notifications.entity";

export default () => ({
    port: parseInt(process.env.APP_PORT,10) || 3000,
    log:(process.env.LOGS=='1') ? true : false,
    db: {
        type:"postgres",
        host: process.env.DB_HOST,
        port: parseInt(process.env.POSTGRESQL_DOCKER_PORT,10) || 5432,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [Games,Player,PlayerRefreshToken,RolePermissions,UserRole,User,UserRefreshToken,VCoinClaim,VCoinLedger,VCoinLose,VCoinRefund,RefundRequest,RazorpayOrders,VCoinTopUp,VcoinTopUpTestPay,VcoinTopUpShare,VcoinTopUpRazorPay,VcoinTopUpCompiled,RazorpayPayoutlink,VCoinWin,Documentation,ShareUser,WebNotifications,PlayerDevice,VCoinReward],
        autoSchemaSync: true,
        synchronize: true
    },

    token:{
        player:{
            access:{
                expiration: process.env.JWT_PLAYER_USER_EXPIRATION,
                secretKey: process.env.JWT_PLAYER_SECRET
            },
            refresh:{
                expiration: process.env.JWT_PLAYER_REFRESH_EXPIRATION,
                secretKey: process.env.JWT_PLAYER_REFRESH_SECRET
            },
            reset:{
                expiration: process.env.JWT_PLAYER_USER_RESET_PASSWORD_REFRESH_EXPIRATION,
                secretKey: process.env.JWT_PLAYER_RESET_PASSWORD_SECRET
            }
        },

        user:{
            access:{
                expiration: process.env.JWT_PLAYER_USER_EXPIRATION,
                secretKey: process.env.JWT_USER_SECRET
            },
            refresh:{
                expiration: process.env.JWT_USER_REFRESH_EXPIRATION,
                secretKey: process.env.JWT_USER_REFRESH_SECRET
            },
            reset:{
                expiration: process.env.JWT_PLAYER_USER_RESET_PASSWORD_REFRESH_EXPIRATION,
                secretKey: process.env.JWT_USER_RESET_PASSWORD_SECRET
            }
        }
    },

    pay:{
        razorpay:{
            keyid: process.env.PAY_RAZORPAY_KEY_ID,
            keysecret: process.env.PAY_RAZORPAY_KEY_SECRET,
            webhooksecret: process.env.PAY_RAZORPAY_WEBHOOK_SECRET
        },
        razorpayx:{
            url: process.env.PAY_RAZORPAYX_URL,
            accountNumber: process.env.PAY_RAZORPAYX_ACCT_NUMBER
        }
    },

    axios:{
        timeout: process.env.AXIOS_TIMEOUT,
        maxRedirects: process.env.AXIOS_MAX_REDIRECTS
    }
});