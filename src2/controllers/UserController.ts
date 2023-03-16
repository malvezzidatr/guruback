import { Request, Response } from "express";
import { UserModel } from "../models/UserModel"

export class UsersController {
    userModel;

    constructor() {
        this.userModel = new UserModel()
    }

    async listAllUsers(req: Request, res: Response) {
        console.log(this)
        const users = await this.userModel.listAllUsers()
        res.status(200).json(users)
    }

    async createUser(req: Request, res: Response) {
        const { name, email } = req.body
        await this.userModel.createUser(name, email).then(user => {
            res.status(200).json(user)
        }).catch(error => {
            res.status(500).json(error);
        })
    }
}
