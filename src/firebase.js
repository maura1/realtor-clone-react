// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsl657Y-QI-9PDNXbw-vU0REXuxapOX2I",
  authDomain: "realtor-clone-react-2fba5.firebaseapp.com",
  projectId: "realtor-clone-react-2fba5",
  storageBucket: "realtor-clone-react-2fba5.appspot.com",
  messagingSenderId: "30112052258",
  appId: "1:30112052258:web:b2ea4a0cee29b07d34c67b",
  "rewrites": [{"source": "**", "destination": "/index.html"}]
};

// Initialize Firebase
 initializeApp(firebaseConfig);
export const db = getFirestore()
//export const auth = getAuth(app)