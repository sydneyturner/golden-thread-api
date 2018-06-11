// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;
import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/users.repository";
import { post, get, requestBody, HttpErrors, param } from "@loopback/rest";
import { User } from "../models/user";
import {sign, verify} from 'jsonwebtoken';

export class UsersController {
  constructor(@repository(UserRepository.name) private userRepo: UserRepository) {}

  @get('/users')
  async getAllUsers(@param.query.string('jwt') jwt: string): Promise<any>{
    if (!jwt) throw new HttpErrors.Unauthorized('JWT token is required');
    
    try {
      var jwtBody = verify(jwt, 'shh');
      console.log(jwtBody);
      return jwtBody;
    } catch (err) {
      throw new HttpErrors.Unauthorized('JWT token is required');

    }
    // return await this.userRepo.find();
  }

  @get('/users/{id}')
  async findUsersById(@param.path.number('id') id: number): Promise<User> {
    // Check valid ID
    let userExists: boolean = !!(await this.userRepo.count({ id }));

    if (!userExists) {
      throw new HttpErrors.BadRequest(`user ID ${id} does not exist`);
    }

    return await this.userRepo.findById(id);
  }

  @get('/user/{user_id}/donations')
  async getDonationsById(
    @param.path.number('user_id') user_id: number,
    @param.query.date('dateFrom') dateFrom: Date,
    // @param.header.string('Authorization') authorizationToken: String
  ) {
    console.log(user_id);
    console.log(dateFrom);
  }


}
