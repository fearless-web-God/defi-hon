import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_APP_API_KEYY,
    authDomain: "defi-c9a4a.firebaseapp.com",
    projectId: "defi-c9a4a",
    storageBucket: "defi-c9a4a.appspot.com",
    messagingSenderId: "543557918264",
    appId: "1:543557918264:web:dc76c3c166f239a90b90cd"
  };

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_APP_API_KEY,
//   authDomain: "decentralized-rectification.firebaseapp.com",
//   projectId: "decentralized-rectification",
//   storageBucket: "decentralized-rectification.appspot.com",
//   messagingSenderId: "255716531009",
//   appId: "1:255716531009:web:07c2cfdf25c3ccb8e31fc0"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);