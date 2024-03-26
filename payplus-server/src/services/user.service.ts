import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDTO } from "src/DTO/createUser.dto";
import { UserLoginDTO } from "src/DTO/userLogin.dto";
import { Hours } from "src/entities/Hours";
import { User } from "src/entities/User";
import { Repository } from "typeorm";
import { HoursService } from "./hours.service";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        private readonly hoursService: HoursService
      ) {}

      async createUser(user: CreateUserDTO){
          return await this.usersRepository.save(user)
      }

      async findUser(user: UserLoginDTO){
          try{
            let response
            const result = await this.usersRepository.findOneBy({
                userID: user.id,
                password: user.pass
            })
            console.log(result)
            if(user){
                const date = new Date();
                response = await this.hoursService.findHoursByUserAndMonth(user.id, date)
            }
            return result
          }
          catch(err){
              console.log(err)
              throw err
          }
      }
    
}