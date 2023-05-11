import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: import.meta.env.VITE_KEY_FIREBASE, 
    authDomain: "autobot-d2cbb.firebaseapp.com",
    projectId: "autobot-d2cbb",
    storageBucket: "autobot-d2cbb.appspot.com",
    messagingSenderId: "706177573142",
    appId: "1:706177573142:web:9df4ff30378dd6e323b037",
    measurementId: "G-RPDQZ7CL1K"

};


const app = initializeApp(firebaseConfig);



export const db = getFirestore(app)
export const storage = getStorage(app)
