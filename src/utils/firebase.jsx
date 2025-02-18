// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnrMgGKaOvuuJWGbrxD-bSVNkh9kERRnk",
  authDomain: "netflix-gpt-b1191.firebaseapp.com",
  projectId: "netflix-gpt-b1191",
  storageBucket: "netflix-gpt-b1191.firebasestorage.app",
  messagingSenderId: "1086082078592",
  appId: "1:1086082078592:web:4d0d3880c3dd1750b41365",
  measurementId: "G-348DH8R39Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();

