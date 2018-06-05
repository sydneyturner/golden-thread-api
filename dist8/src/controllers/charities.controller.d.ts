import { Charity } from "../models/charity";
import { CharitiesRepository } from "../repositories/charities.repository";
export declare class CharitiesController {
    private charityRepo;
    constructor(charityRepo: CharitiesRepository);
    getCharity(charity: Charity): Promise<Charity[]>;
    findCharityById(id: number): Promise<Charity>;
}
