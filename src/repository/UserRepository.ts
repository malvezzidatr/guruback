import UserSchema from "../schemas/UserSchema";
import { initializeApp } from 'firebase/app'
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCvdaijR7fO7son_4KhgCJXWjcMXGiK1xg",
    authDomain: "guru-0312.firebaseapp.com",
    projectId: "guru-0312",
    storageBucket: "guru-0312.appspot.com",
    messagingSenderId: "241084399475",
    appId: "1:241084399475:web:e9afbcf609f6cabc5b4f06",
    measurementId: "G-MHJ9EYQ8EN"
};

const appFirebase = initializeApp(firebaseConfig)
export const db = getFirestore(appFirebase)


export class UserRepository {

    async listAllUsers() {
        return UserSchema.findAll({
            attributes: ['id', 'email', 'name']
        })
    }

    async createUser(name: string, email: string) {
        return await addDoc(collection(db, 'users'), {
            name,
            email
        })
        return await UserSchema.create({ name, email });
    }
}