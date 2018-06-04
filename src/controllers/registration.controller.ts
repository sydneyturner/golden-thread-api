// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;
import { repository } from "@loopback/repository";
import { post, get, requestBody } from "@loopback/rest";
import { User } from "../models/user";
import { UserRepository } from "../repositories/users.repository";

export class RegistrationController {
  constructor(@repository(UserRepository.name) private userRepo: UserRepository) {}


  @post('/registration')
  async createNewUser(@requestBody() user: User){
    return await this.userRepo.create(user);
  }
}
