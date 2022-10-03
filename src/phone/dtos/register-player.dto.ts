import { IsNotEmpty } from "class-validator";

export class RegisterPlayerDto{
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    phoneNumber: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    deviceToken: string;

    invitedby?: string;
}