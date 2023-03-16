import { Request, Response } from "express";
import { getAuth } from "firebase/auth";
import { AuthModel } from "../models/AuthModel";

export class AuthController {
    auth;
    authModel;
    
    constructor() {
        this.auth = getAuth()
        this.authModel = new AuthModel()
    }

    async createFirebaseUser(req: Request, res: Response) {
        const { email, password } = req.body;
        if (!email || !password) return res.status(500).send({ message: 'E-mail or Password not found '})

        await this.authModel.createFirebaseUser(this.auth, email, password)
            .then((teste) => {
                return res.status(201).send(teste)
            })
            .catch((error) => {
                return res.status(500).send(error)
            })
    }

}