import {IsDefined, IsEmail, IsString, MaxLength, MinLength} from "class-validator";

export class RegisterUserDto {
    @IsEmail()
    @IsDefined()
    @MaxLength(255)
    email: string;

    @IsString()
    @IsDefined()
    @MaxLength(20)
    name: string;

    @IsDefined()
    @MinLength(6)
    @MaxLength(35)
    password: string;
}