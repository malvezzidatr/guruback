import { Auth } from "firebase/auth";
import { AuthRepository } from "../repository/AuthRepository";

export class AuthModel {
    private repository;

    constructor() {
        this.repository = new AuthRepository()
    }

    async createFirebaseUser(auth: Auth, email: string, password: string) {
        const newUser = {
            auth,
            email,
            password
        }
        return this.repository.createFirebaseUser(newUser)
    }
}