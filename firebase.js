// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgxGTsxeuAy3vBsjejwgw8HIsGtjZstk0",
    authDomain: "viewpoint-c67ec.firebaseapp.com",
    projectId: "viewpoint-c67ec",
    storageBucket: "viewpoint-c67ec.appspot.com",
    messagingSenderId: "719596746888",
    appId: "1:719596746888:web:5635bbfce46fc571f8473d",
    measurementId: "G-N1FFS1LPRS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)