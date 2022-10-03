import { IsNotEmpty} from "class-validator";

export class TestTransactionMainDto{
    @IsNotEmpty()
    phone: string;

    @IsNotEmpty()
    amount: number;
}