import { IsEmail, IsNumber, IsOptional, IsString, max } from "class-validator";

export class CreateUserDto {
    @IsOptional()
    @IsNumber()
    id?: number;
    @IsString()
    name: string;
    @IsString()
    @IsEmail()
    email: string;
}
