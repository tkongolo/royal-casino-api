import { IsEmail } from "class-validator";

export class UpdatePlayerDto{
    @IsEmail()
    email: string;
}