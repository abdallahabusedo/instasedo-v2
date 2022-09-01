import { initializeApp } from 'firebase/app';
import { getAuth} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAXFszRQy2cziAF6WOY9sdkEJsqoqE1vTs",
    authDomain: "instagram-sedo.firebaseapp.com",
    databaseURL: "https://instagram-sedo.firebaseio.com",
    projectId: "instagram-sedo",
    storageBucket: "instagram-sedo.appspot.com",
    messagingSenderId: "389187503497",
    appId:"1:389187503497:web:4f1faf7f33fdb7b1d24d58",
    measurementId: "G-XDJCW3BCXR"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app);

export {auth ,db}