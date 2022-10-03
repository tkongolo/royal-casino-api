import { Controller, Request, Response, Post, UseGuards, Get, Body, HttpCode, Param, Query, Patch } from '@nestjs/common';
import { DeviceUpdateDto } from '../dtos/device-update.dto';
import { LoginDto } from '../dtos/login.dto';
import { PayoutDto } from '../dtos/payout.dto';
import { RefreshDto } from '../dtos/refresh.dto';
import { RegisterPlayerDto } from '../dtos/register-player.dto';
import { TestTransactionMainDto } from '../dtos/test-transaction-main.dto';
import { TopUpDto } from '../dtos/topup.dto';
import { TransactionMainDto } from '../dtos/transaction-main.dto';
import { TransactionSuccessRazor } from '../dtos/transaction-success-razor.dto';
import { UpdatePlayerDto } from '../dtos/update-player.dto';
import { JwtAuthGuard } from '../jwt/jwt-auth.guard';
import { DocService } from '../service/doc/doc.service';
import { GameService } from '../service/game/game.service';
import { PlayerControlService } from '../service/player-control/player-control.service';
import { RazorpayVerificationService } from '../service/razorpay-verification/razorpay-verification.service';
import { TransactionService } from '../service/transaction/transaction.service';

@Controller('api/royal-casino')
export class PhoneController {
    constructor(
        private playerControlService: PlayerControlService,
        private documentationService: DocService,
        private gameService: GameService,
        private razorpayVerificationService: RazorpayVerificationService,
        private transactionService: TransactionService
    ){}


    @Post('players/login')
    async login(@Body() loginDto: LoginDto) {
        return this.playerControlService.login(loginDto);
    }

    @Post('players/refresh')
    @HttpCode(201)
    async refresh(@Body() refreshDto: RefreshDto) {
        return this.playerControlService.generateAccessTokenFromRefreshToken(refreshDto);
    }

    @Post('players/forgot-password')
    async forgotPassword() {

    }

    @Post('players/password-reset')
    async passwordReset() {

    }

    @UseGuards(JwtAuthGuard)
    @Get('players/:playerId/summary')
    async getProfile(@Param('playerId') playerId: number) {
        return this.playerControlService.getSummaryUserProfile(playerId);
    }

    @Post('players')
    @HttpCode(201)
    async registerNewPlayer(@Body() registerDto: RegisterPlayerDto) {
        return this.playerControlService.registerNewPlayer(registerDto);
    }

    @UseGuards(JwtAuthGuard)
    @Patch('players/:playerId/device/update')
    async updateDeviceToken(@Param('playerId') playerId: number,@Body() deviceupdateDto: DeviceUpdateDto, @Request() req: any) {
        return this.playerControlService.updateDevice(playerId, deviceupdateDto);
    }

    @UseGuards(JwtAuthGuard)
    @Patch('players/:playerId')
    async updatePlayerInfo(@Param('playerId') playerId: number, @Body() updatePlayerDto: UpdatePlayerDto, @Request() req:any){
        return this.playerControlService.updatePlayerInfo(playerId,req.user.sub,updatePlayerDto);
    }

    @UseGuards(JwtAuthGuard)
    @Post('test/player/accounts/vcoins/add')
    @HttpCode(201)
    async doTestTransaction(@Body() testTransactionDto: TestTransactionMainDto, @Request() req: any){
        return this.transactionService.performTestAddTransaction(req.user.sub, testTransactionDto);
    }

    @UseGuards(JwtAuthGuard)
    @Post('players/:playerId/transactions/topups')
    @HttpCode(201)
    async doTopupTransaction(@Param('playerId') playerId: number,@Body() transactionDto: TransactionMainDto){
        return this.transactionService.performTopUpTransaction(playerId,transactionDto);
    }

    @UseGuards(JwtAuthGuard)
    @Post('players/:playerId/transactions/claims')
    @HttpCode(201)
    async doClaimsTransaction(@Param('playerId') playerId: number,@Body() transactionDto: TransactionMainDto){
        return this.transactionService.performClaimTransaction(playerId,transactionDto);
    }

    // @UseGuards(JwtAuthGuard)
    // @Post('player/accounts/vcoins/transact')
    // @HttpCode(201)
    // async doTransactionMain(@Body() transactionDto: TransactionMainDto, @Request() req: any) {
    //     return this.transactionService.performMainTransaction(req.user.sub, transactionDto);
    // }

    @UseGuards(JwtAuthGuard)
    @Post('player/accounts/vcoins/payment/topup')
    @HttpCode(201)
    async doUpdatePaymentForVcoin(@Body()transactionSuccess: TransactionSuccessRazor,@Request()req:any){
        return this.transactionService.updateTopUpTransaction(req.user.sub,transactionSuccess);
    }

    
    @Post('verification/payment/razorpay/topup')
    async doUpdatePlayerTopUp(@Body() orderInfo: TopUpDto,@Request() req: any){
        this.razorpayVerificationService.performTopUpOperation(orderInfo);
    }


    @Post('verification/payment/razorpay/payout')
    async doUpdatePayoutInfo(@Body() payoutInfo:PayoutDto){
        this.razorpayVerificationService.performPayoutOperation(payoutInfo);
    }

    @UseGuards(JwtAuthGuard)
    @Get('games/:gameName/bet')
    async dobetGame(@Param('gameName') gameVal: string,@Query('amount')amt: number,@Query('choice')choiceVal:string,@Request() req: any){
        return this.gameService.processGameRequest(req.user.sub,gameVal,amt,choiceVal);
    }

    @Get('documentation')
    @HttpCode(200)
    async getDocumentation(@Query('doctype') dType: String) {
        return this.documentationService.getDocumentation(dType);
    }
}
