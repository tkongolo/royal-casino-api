import { IsNotEmpty } from "class-validator";

export class RefundRequestDto{

    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    actionDone: string;
}