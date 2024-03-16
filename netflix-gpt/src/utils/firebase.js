// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfBBkL6kVdLnbvED35XuZiNFeWtvqAAO0",
  authDomain: "netflix-gpt-52e36.firebaseapp.com",
  projectId: "netflix-gpt-52e36",
  storageBucket: "netflix-gpt-52e36.appspot.com",
  messagingSenderId: "927475470769",
  appId: "1:927475470769:web:89f556d605b4feafa12d90",
  measurementId: "G-JESNCJCYV0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
