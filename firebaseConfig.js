// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2te5SVPNdlFnOWzm9_-MRYgX9sP2Ljes",
  authDomain: "boyles-mobile-application.firebaseapp.com",
  projectId: "boyles-mobile-application",
  storageBucket: "boyles-mobile-application.firebasestorage.app",
  messagingSenderId: "194328371621",
  appId: "1:194328371621:web:ff09955bbf7c6fcc78084c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)