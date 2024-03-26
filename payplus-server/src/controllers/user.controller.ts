import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDTO } from "src/DTO/createUser.dto";
import { UserLoginDTO } from "src/DTO/userLogin.dto";
import { UserService } from "src/services/user.service";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('register')
    async createUser(@Body() createUser: CreateUserDTO){
        return await this.userService.createUser(createUser)
    }

    @Post('login')
    async loginUser(@Body() loginDetails: UserLoginDTO){
        const {pass, id} = loginDetails
        return await this.userService.findUser(loginDetails)
    }
}