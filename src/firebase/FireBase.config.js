// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7A-qVo62V2sCb3vRhfOGcGX2ZD1s0sZU",
  authDomain: "gamingconventions.firebaseapp.com",
  projectId: "gamingconventions",
  storageBucket: "gamingconventions.appspot.com",
  messagingSenderId: "851552853050",
  appId: "1:851552853050:web:9a681ac81bc620a4c9e903"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;