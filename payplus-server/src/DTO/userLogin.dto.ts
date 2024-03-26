import { IsInt, IsNotEmpty, Min, MinLength } from "class-validator";

export class UserLoginDTO{
    @IsNotEmpty()
    @MinLength(5)
    pass?: string;

    @IsInt()
    @Min(0)
    id?: number;
}