import UserSchema from "../schemas/UserSchema";

export class UserModel {
    async listAllUsers() {
        return await UserSchema.findAll({
            attributes: ['email', 'name']
        })
    }

    async createUser(
        name: string,
        email: string
    ): Promise<void> {
        if (!name || !email) {
            return Promise.reject({
                code: 500,
                message: 'Name or email not found.'
            })
        }
        
        return await UserSchema.create({ name, email });
    }
}