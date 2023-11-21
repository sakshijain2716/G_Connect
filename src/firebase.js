import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6OjFmK2vMwsDoq6ppcU77l_h3BtJIXbc",
  authDomain: "react-authentication-68a40.firebaseapp.com",
  projectId: "react-authentication-68a40",
  storageBucket: "react-authentication-68a40.appspot.com",
  messagingSenderId: "532092892389",
  appId: "1:532092892389:web:57801708df70d5bd0d500c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
