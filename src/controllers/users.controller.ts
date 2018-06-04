// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;
import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/users.repository";
import { post, get, requestBody } from "@loopback/rest";
import { User } from "../models/user";

export class UsersController {
  constructor(@repository(UserRepository.name) private userRepo: UserRepository) {}

  @get('/users')
  async getAllUsers(): Promise<Array<User>>{
    return await this.userRepo.find();
  }

  

}
