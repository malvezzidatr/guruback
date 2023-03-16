import UserSchema from "../schemas/UserSchema";
import { firestoreDB } from "../database/firestoredb";
import { addDoc, collection } from "firebase/firestore";

export class UserRepository {

    async listAllUsers() {
        return UserSchema.findAll({
            attributes: ['id', 'email', 'name']
        })
    }

    async createUser(name: string, email: string) {
        return await addDoc(collection(firestoreDB, 'users'), {
            name,
            email
        })
        return await UserSchema.create({ name, email });
    }
}