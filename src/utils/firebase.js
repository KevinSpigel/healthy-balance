// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzTZrNvkZIQSo8L3jUc6_xmgOc5qe6cZk",
    authDomain: "healthy-balance-99079.firebaseapp.com",
    projectId: "healthy-balance-99079",
    storageBucket: "healthy-balance-99079.appspot.com",
    messagingSenderId: "91734638961",
    appId: "1:91734638961:web:c116b5b07e2ffddc12b6d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//Database Instance

export const db = getFirestore(app);