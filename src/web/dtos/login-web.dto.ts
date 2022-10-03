import { IsNotEmpty } from "class-validator";

export class LoginWebDto{
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;
}