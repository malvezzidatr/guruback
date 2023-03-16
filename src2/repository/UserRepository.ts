import UserSchema from "../schemas/UserSchema";

export class UserRepository {

    async listAllUsers() {
        return UserSchema.findAll({
            attributes: ['id', 'email', 'name']
        })
    }

    async createUser(name: string, email: string) {
        return await UserSchema.create({ name, email });
    }
}