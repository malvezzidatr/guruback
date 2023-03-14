import { UserModel } from "../models/UserModel"

const userModel = new UserModel()
export default class UsersController {

    async listAllUsers(req, res) {
        const users = await userModel.listAllUsers()
        res.status(200).json(users)
    }

    async createUser(req, res) {
        const { name, email } = req.body
        await userModel.createUser(name, email).then(user => {
            res.status(200).json(user)
        }).catch(error => {
            res.status(500).json(error);
        })
    }
}
