import {IsDefined, IsEmail, MaxLength, MinLength} from "class-validator";

export class LogInUserDto {
    @IsEmail()
    @IsDefined()
    @MaxLength(255)
    email: string;

    @IsDefined()
    @MinLength(6)
    @MaxLength(35)
    password: string;
}
