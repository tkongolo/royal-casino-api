import { IsNotEmpty} from "class-validator";

export class TransactionMainDto{
    @IsNotEmpty()
    amount: number;
}