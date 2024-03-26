import { IsInt, IsNotEmpty, Min, MinLength } from "class-validator";

export class CreateUserDTO{
    @IsNotEmpty()
    @MinLength(1)
    firstName: string;

    @IsNotEmpty()
    @MinLength(1)
    lastName: string;

    @IsNotEmpty()
    @MinLength(5)
    password: string;

    @IsInt()
    @Min(0)
    userID: number;
}