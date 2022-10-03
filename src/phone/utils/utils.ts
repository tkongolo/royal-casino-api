import { Player } from "src/database/db-models/player.entity";
import { RegisterPlayerDto } from "../dtos/register-player.dto";
import * as bcrypt from 'bcrypt';
import { VCoinLedger } from "src/database/db-models/vcoinledger.entity";
import { TransactionType } from "src/database/db-models/transaction-type.model";
import { SummaryProfileDto } from "../dtos/summary-profile.dto";
import { Games } from "src/database/db-models/games.entity";
import { TransactionRefundableRespDto } from "../dtos/transaction-refundable-resp.dto";
import { PlayerDevice } from "src/database/db-models/player-device.entity";
import { GamesResponse } from "../models/games-response.model";
import { GamesResState } from "../models/games-res-state.model";


