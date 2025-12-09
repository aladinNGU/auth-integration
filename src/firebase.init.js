// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrzrGQN3HEWrIoRVQdkJjNzhcwm5SlF5g",
  authDomain: "explore-email-password-a-36055.firebaseapp.com",
  projectId: "explore-email-password-a-36055",
  storageBucket: "explore-email-password-a-36055.firebasestorage.app",
  messagingSenderId: "580244354122",
  appId: "1:580244354122:web:e2e7a30647c69c1d5322b3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
