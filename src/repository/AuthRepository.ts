import { Auth, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { firestoreDB } from "../database/firestoredb";
import { encryptPassword } from "../middlewares/encrypt";

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
                const hashPassword = await encryptPassword(password)
                await addDoc(collection(firestoreDB, 'users'), {
                    email,
                    hashPassword
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