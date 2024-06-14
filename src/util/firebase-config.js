
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC1uLGJscTcDy3zCS_Tn7hHbuLuOuyRs8Q",
  authDomain: "shop-18781.firebaseapp.com",
  projectId: "shop-18781",
  storageBucket: "shop-18781.appspot.com",
  messagingSenderId: "463133939327",
  appId: "1:463133939327:web:76b8a4b8dad6b5fcab914a",
  measurementId: "G-SZHPBMS6S0"
};

// Initialize Firebase
const firebaseAppConfig = initializeApp(firebaseConfig);
export default firebaseAppConfig