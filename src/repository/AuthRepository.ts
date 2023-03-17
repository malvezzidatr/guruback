import { Auth, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { firestoreDB } from "../database/firestoredb";

interface INewUser {
    auth: Auth;
    email: string;
    password: string
}

export class AuthRepository {
    async createFirebaseUser({ auth, email, password }: INewUser) {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user.refreshToken;
                return user
            })
            .then(async () => {
                await addDoc(collection(firestoreDB, 'users'), {
                    email,
                    password
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                return {
                    errorCode,
                    errorMessage
                }
                // ..
            }) 
    }
}