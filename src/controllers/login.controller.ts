// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;
import { repository } from "@loopback/repository";
import { post, get, requestBody } from "@loopback/rest";
import { User } from "../models/user";
import { UserRepository } from "../repositories/users.repository";
import { request } from "http";

export class LoginController {
  constructor(@repository(UserRepository.name) private userRepo: UserRepository) {}

  @post('/login')
  async login(@requestBody() login: User){
    var users = await this.userRepo.find();
    var email = login.email;
    var password = login.password;

    // TODO: 
    // loop through users
    for (var i = 0; i < users.length; i++){
      var user = users[i];
      // find by email + password
      if (user.email == users[i].email && user.password == users[i].password){
        return users[i];
      }
    }
    return console.error();

  }


}
