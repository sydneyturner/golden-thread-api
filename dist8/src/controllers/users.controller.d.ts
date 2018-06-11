import { UserRepository } from "../repositories/users.repository";
import { User } from "../models/user";
export declare class UsersController {
    private userRepo;
    constructor(userRepo: UserRepository);
    getAllUsers(jwt: string): Promise<any>;
    findUsersById(id: number): Promise<User>;
    getDonationsById(user_id: number, dateFrom: Date): Promise<void>;
}
