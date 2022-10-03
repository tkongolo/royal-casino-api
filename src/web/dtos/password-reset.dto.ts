import { IsNotEmpty } from "class-validator";

export class PasswordResetDto{
    @IsNotEmpty()
    reset_token: string;

    @IsNotEmpty()
    old_password: string;

    @IsNotEmpty()
    new_password: string;
}