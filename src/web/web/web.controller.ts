import { Body, Controller, Get, HttpCode, Param, Patch, Post,Request, Put, Query, UseGuards } from '@nestjs/common';
import { RefreshDto } from 'src/phone/dtos/refresh.dto';
import { ForgotPasswordDto } from '../dtos/forgot-password.dto';
import { LoginWebDto } from '../dtos/login-web.dto';
import { PasswordResetDto } from '../dtos/password-reset.dto';
import { RegisterAdminDto } from '../dtos/register-admin.dto';
import { UserControlService } from '../service/user-control/user-control.service';
import { JwtAuthWebGuard } from '../jwt/jwt-auth-web.guard';
import { WebInfoService } from '../service/web-info/web-info.service';
import { Roles } from '../guards/guards.decorator';
import { UpdateUserDto } from '../dtos/update-user.dto';

@Controller('api/royal-casino')
export class WebController {
    constructor(
        private userControlService: UserControlService,
        private webInfoService: WebInfoService
    ){}

    //dashboard
    @UseGuards(JwtAuthWebGuard)
    @Get('dashboard')
    async getDashboardInfo(){
        return this.webInfoService.getDashboardInfo();
    }

    //users//

    @Post('users/login')
    async login(@Body() loginDto: LoginWebDto) {
        return this.userControlService.login(loginDto);
    }

    @Post('users/refresh')
    @HttpCode(201)
    async refresh(@Body() refreshDto: RefreshDto) {
        return this.userControlService.generateAccessTokenFromRefreshToken(refreshDto);
    }

    @Post('users/forgot-password')
    @HttpCode(201)
    async forgotPassword(@Body() forgotPassw: ForgotPasswordDto) {
        return this.userControlService.generateTokenForResetPassword(forgotPassw);
    }

    @Patch('users/password-reset')
    async passwordReset(@Body() newPasswReset: PasswordResetDto) {
        return this.userControlService.resetUserPassword(newPasswReset);
    }

    @UseGuards(JwtAuthWebGuard)
    @Roles('admin')
    @Post('users')
    @HttpCode(201)
    async registerUser(@Body() registerDto: RegisterAdminDto) {
        return this.userControlService.registerNewUser(registerDto);
    }

    @UseGuards(JwtAuthWebGuard)
    @Roles('admin')
    @Get('users')
    @HttpCode(201)
    async getUsers(@Query('page')pageNum?: number){
        return this.webInfoService.getAllUsers(pageNum);
    }

    @UseGuards(JwtAuthWebGuard)
    @Roles('admin')
    @Get('users/:userId')
    async getOneUser(@Param('userId')userId: number) {
        return this.webInfoService.getSpecificUser(userId);
    }

    @UseGuards(JwtAuthWebGuard)
    @Patch('users/:userId')
    async updateUserInfo(@Param('userId') playerId: number, @Body() updateUserDto: UpdateUserDto, @Request() req:any){
        return this.userControlService.updateUserInfo(playerId,req.user.sub,updateUserDto);
    }

    @UseGuards(JwtAuthWebGuard)
    @Roles('admin')
    @Patch('users/:userId/deactivate')
    async deactivateUser(@Param('userId')userId: number){
        return this.userControlService.deactivateUser(userId);
    }

    @UseGuards(JwtAuthWebGuard)
    @Roles('admin')
    @Patch('users/:userId/activate')
    async reactivateUser(@Param('userId')userId: number){
        return this.userControlService.reactivateUser(userId);
    }
    //transactions
    @UseGuards(JwtAuthWebGuard)
    @Get('transactions')
    async getTransactions(@Query('from') fromDate: string, @Query('to')toDate: string,@Query('page')pageNum?: number){
        return this.webInfoService.getTransactions(fromDate,toDate,null,pageNum);
    }

    @UseGuards(JwtAuthWebGuard)
    @Get('transactions/latest')
    async getLatestTransactions(@Query('page')pageNum?: number){
        return this.webInfoService.getTransactionsLatest(pageNum);
    }

    @UseGuards(JwtAuthWebGuard)
    @Get('transactions/:transactId')
    async getOneTransaction(@Param('transactId')transactId: number){
        return this.webInfoService.getSpecificTransaction(transactId);
    }

    @UseGuards(JwtAuthWebGuard)
    @Get('transactions/winnings')
    async getWinnings(@Query('from') fromDate: string, @Query('to')toDate: string,@Query('page')pageNum?: number){
        return this.webInfoService.getWinningTransactions(fromDate,toDate,null,pageNum);
    }

    @UseGuards(JwtAuthWebGuard)
    @Get('transactions/winnings/:winningId')
    async getOneWinning(@Param('winningId') winningId: number){
        return this.webInfoService.getSpecificWinTransaction(winningId);
    }

    @UseGuards(JwtAuthWebGuard)
    @Get('transactions/losses')
    async getLosses(@Query('from') fromDate: string, @Query('to')toDate: string,@Query('page')pageNum?: number){
        return this.webInfoService.getLossTransactions(fromDate,toDate,null,pageNum);
    }

    @UseGuards(JwtAuthWebGuard)
    @Get('transactions/losses/:loseId')
    async getOneLoses(@Param('loseId') loseId: number){
        return this.webInfoService.getSpecificLossTransact(loseId);
    }

    @UseGuards(JwtAuthWebGuard)
    @Get('transactions/topups')
    async getTopUps(@Query('from') fromDate: string, @Query('to')toDate: string,@Query('page')pageNum?: number){
        return this.webInfoService.getTopUpTransactions(fromDate,toDate,null,pageNum);
    }

    @UseGuards(JwtAuthWebGuard)
    @Get('transactions/topups/:topupCompiledId')
    async getOneTopUp(@Param('topupCompiledId') topUpId: number){
        return this.webInfoService.getSpecificTopUpTransaction(topUpId);
    }

    @UseGuards(JwtAuthWebGuard)
    @Get('transactions/topups/razor-payments')
    async getRazorPayTopUps(@Query('from') fromDate: string, @Query('to')toDate: string,@Query('page')pageNum?: number){
        return this.webInfoService.getRazorPayTopUpTransactions(fromDate,toDate,null,pageNum);
    }

    @UseGuards(JwtAuthWebGuard)
    @Get('transactions/topups/razor-payments/:payId')
    async getOneRazorPayTopUp(@Param('payId')payId: number){
        return this.webInfoService.getSpecificRazorPayTopUpTransaction(payId);
    }

    @UseGuards(JwtAuthWebGuard)
    @Get('transactions/topups/share-reward-payments')
    async getSharedRewards(@Query('from') fromDate: string, @Query('to')toDate: string,@Query('page')pageNum?: number){
        return this.webInfoService.getShareUserTopUpTransactions(fromDate,toDate,null,pageNum);
    }

    @UseGuards(JwtAuthWebGuard)
    @Get('transactions/topups/share-reward-payments/:payId')
    async getOneSharedRewards(@Param('payId')payId: number){
        return this.webInfoService.getSpecificShareTopUpTransaction(payId);
    }

    @UseGuards(JwtAuthWebGuard)
    @Get('transactions/claims')
    async getClaims(@Query('from') fromDate: string, @Query('to')toDate: string,@Query('page')pageNum?: number){
        return this.webInfoService.getClaimsTransactions(fromDate,toDate,null,pageNum);
    }

    @UseGuards(JwtAuthWebGuard)
    @Get('transactions/claims/:claimId')
    async getOneClaim(@Param('claimId')payId: number){
        return this.webInfoService.getSpecificClaimsTransaction(payId);
    }

    @UseGuards(JwtAuthWebGuard)
    @Get('transactions/rewards')
    async getRewards(@Query('from') fromDate: string, @Query('to')toDate: string,@Query('page')pageNum?: number){
        return this.webInfoService.getRewardsTransactions(fromDate,toDate,null,pageNum);
    }

    @UseGuards(JwtAuthWebGuard)
    @Get('transactions/rewards/:rewardId')
    async getOneReward(@Param('rewardId')payId: number){
        return this.webInfoService.getSpecificReward(payId);
    }

    //players
    @UseGuards(JwtAuthWebGuard)
    @Get('players')
    async getPlayers(@Query('page')pageNum?: number){
        return this.webInfoService.getAllPlayers(pageNum);
    }

    @UseGuards(JwtAuthWebGuard)
    @Patch('players/:playerId/activate')
    async activatePlayer(@Param('playerId')playerId: number){
        return this.userControlService.reactivatePlayer(playerId);
    }

    @UseGuards(JwtAuthWebGuard)
    @Patch('players/:playerId/deactivate')
    async deactivatePlayer(@Param('playerId')playerId: number){
        return this.userControlService.deactivatePlayer(playerId);
    }

    @UseGuards(JwtAuthWebGuard)
    @Get('players/:playerId/transactions')
    async getPlayerTransactions(@Param('playerId')playerId: number,@Query('from') fromDate: string, @Query('to')toDate: string,@Query('page')pageNum?: number){
        return this.webInfoService.getTransactions(fromDate,toDate,playerId,pageNum);
    }

    @UseGuards(JwtAuthWebGuard)
    @Get('players/:playerId/transactions/winnings')
    async getPlayerWinnings(@Param('playerId')playerId: number,@Query('from') fromDate: string, @Query('to')toDate: string,@Query('page')pageNum?: number){
        return this.webInfoService.getWinningTransactions(fromDate,toDate,playerId,pageNum);
    }

    @UseGuards(JwtAuthWebGuard)
    @Get('players/:playerId/transactions/losses')
    async getPlayerLosses(@Param('playerId')playerId: number,@Query('from') fromDate: string, @Query('to')toDate: string,@Query('page')pageNum?: number){
        return this.webInfoService.getLossTransactions(fromDate,toDate,playerId,pageNum);
    }

    @UseGuards(JwtAuthWebGuard)
    @Get('players/:playerId/transactions/topups')
    async getPlayerTopUps(@Param('playerId')playerId: number,@Query('from') fromDate: string, @Query('to')toDate: string,@Query('page')pageNum?: number){
        return this.webInfoService.getTopUpTransactions(fromDate,toDate,playerId,pageNum);
    }

    @UseGuards(JwtAuthWebGuard)
    @Get('players/:playerId/transactions/topups/razor-payments')
    async getPlayerRazorPayTopUps(@Param('playerId')playerId: number,@Query('from') fromDate: string, @Query('to')toDate: string,@Query('page')pageNum?: number){
        return this.webInfoService.getRazorPayTopUpTransactions(fromDate,toDate,playerId,pageNum);
    }

    @UseGuards(JwtAuthWebGuard)
    @Get('players/:playerId/transactions/topups/share-reward-payments')
    async getPlayerSharedRewards(@Param('playerId')playerId: number,@Query('from') fromDate: string, @Query('to')toDate: string,@Query('page')pageNum?: number){
        return this.webInfoService.getShareUserTopUpTransactions(fromDate,toDate,playerId,pageNum);
    }

    @UseGuards(JwtAuthWebGuard)
    @Get('players/:playerId/transactions/claims')
    async getPlayerClaims(@Param('playerId')playerId: number,@Query('from') fromDate: string, @Query('to')toDate: string,@Query('page')pageNum?: number){
        return this.webInfoService.getClaimsTransactions(fromDate,toDate,playerId,pageNum);
    }

    @UseGuards(JwtAuthWebGuard)
    @Get('players/:playerId/transactions/rewards')
    async getPlayerRewards(@Param('playerId')playerId: number,@Query('from') fromDate: string, @Query('to')toDate: string,@Query('page')pageNum?: number){
        return this.webInfoService.getRewardsTransactions(fromDate,toDate,playerId,pageNum);
    }


}
