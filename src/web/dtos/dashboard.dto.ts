import { GamesInfo } from "./games-info";

export class DashboardDto{
    players: number;
    player_topup_amount_today: number;
    bets_made_today: number;
    winning_players: number;
    games_played_today: GamesInfo;
    games_played_total: GamesInfo;
}