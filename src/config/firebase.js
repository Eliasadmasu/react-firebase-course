// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyArwtLh-5SeC7V7OvqovKLmk9s_pGpR_us",
  authDomain: "fir-beginner-course-35264.firebaseapp.com",
  projectId: "fir-beginner-course-35264",
  storageBucket: "fir-beginner-course-35264.appspot.com",
  messagingSenderId: "473343477126",
  appId: "1:473343477126:web:94215eb6722e8f24d51807",
  measurementId: "G-MQ0WBK7ESL",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
