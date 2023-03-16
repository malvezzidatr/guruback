import { UserRepository } from "../repository/UserRepository";
import UserSchema from "../schemas/UserSchema";

export class UserModel {
    private repository;
    teste
    constructor() {
        this.repository = new UserRepository()
        this.teste = 'ola'
    }

    async listAllUsers() {
        return this.repository.listAllUsers()
        
    }

    async createUser(
        name: string,
        email: string
    ) {
        if (!name || !email) {
            return Promise.reject({
                code: 500,
                message: 'Name or email not found.'
            })
        }

        return this.repository.createUser(name, email)
    }
}