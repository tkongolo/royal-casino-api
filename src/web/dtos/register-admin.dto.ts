import { IsNotEmpty } from "class-validator";

export class RegisterAdminDto{
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    role: string;
}