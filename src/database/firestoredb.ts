import { initializeApp } from 'firebase/app'
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: `${process.env.FIREBASE_API_KEY}`,
    authDomain: `${process.env.FIREBASE_AUTH_DOMAIN}`,
    projectId: `${process.env.PROJECT_ID}`,
    storageBucket: `${process.env.STORAGE_BUCKET}`,
    messagingSenderId: `${process.env.MESSAGING_SENDER_ID}`,
    appId: `${process.env.APP_ID}`,
    measurementId: `${process.env.MEASUREMENT_ID}`
};

const appFirebase = initializeApp(firebaseConfig)
export const firestoreDB = getFirestore(appFirebase)