// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI5BAkBKcRv2s0MECKW_E_0AF5I2eEqVQ",
  authDomain: "mockmate-92941.firebaseapp.com",
  projectId: "mockmate-92941",
  storageBucket: "mockmate-92941.firebasestorage.app",
  messagingSenderId: "915257433441",
  appId: "1:915257433441:web:e44dfed9a57bbc9934b920",
  measurementId: "G-V7F7T92X0K",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
