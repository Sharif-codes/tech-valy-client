// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG8lQie5caL1glf17mWb1zUDCUgg5W96c",
  authDomain: "tech-valy.firebaseapp.com",
  projectId: "tech-valy",
  storageBucket: "tech-valy.appspot.com",
  messagingSenderId: "959438733153",
  appId: "1:959438733153:web:45d5ec11e920cb53f94f20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;