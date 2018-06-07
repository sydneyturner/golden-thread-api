"use strict";
// Uncomment these imports to begin using these cool features!
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
// import {inject} from @loopback/context;
const repository_1 = require("@loopback/repository");
const users_repository_1 = require("../repositories/users.repository");
const rest_1 = require("@loopback/rest");
let UsersController = class UsersController {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async getAllUsers() {
        return await this.userRepo.find();
    }
    async findUsersById(id) {
        // Check valid ID
        let userExists = !!(await this.userRepo.count({ id }));
        if (!userExists) {
            throw new rest_1.HttpErrors.BadRequest(`user ID ${id} does not exist`);
        }
        return await this.userRepo.findById(id);
    }
    async getDonationsById(user_id, dateFrom) {
        console.log(user_id);
        console.log(dateFrom);
    }
};
__decorate([
    rest_1.get('/users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllUsers", null);
__decorate([
    rest_1.get('/users/{id}'),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findUsersById", null);
__decorate([
    rest_1.get('/user/{user_id}/donations'),
    __param(0, rest_1.param.path.number('user_id')),
    __param(1, rest_1.param.query.date('dateFrom')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Date]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getDonationsById", null);
UsersController = __decorate([
    __param(0, repository_1.repository(users_repository_1.UserRepository.name)),
    __metadata("design:paramtypes", [users_repository_1.UserRepository])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map