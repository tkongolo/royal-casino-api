import { IsNotEmpty} from "class-validator";

export class TransactionGameDto{
    @IsNotEmpty()
    amount: number;

    @IsNotEmpty()
    action: string;

    @IsNotEmpty()
    game: string;
}