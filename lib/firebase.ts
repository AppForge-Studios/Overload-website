// Firebase web client — used only by the /delete account-deletion flow.
// These values are the public Firebase web config (safe to ship to the
// browser; access is gated by Auth + Firestore/Storage security rules).
// The deleteAccount Cloud Function lives in the Overload iOS repo's
// functions/ and is deployed to us-central1.
import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFunctions, type Functions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyBAmJTYHfCFP6Ba0c-XvN2tU1lo03XHXPM",
  authDomain: "overload-38a46.firebaseapp.com",
  projectId: "overload-38a46",
  storageBucket: "overload-38a46.firebasestorage.app",
  messagingSenderId: "675755903689",
  appId: "1:675755903689:web:76a596591d462dad4ddb18",
  measurementId: "G-4EHGKTJVJK",
};

// Reuse the app across HMR / re-renders instead of re-initializing.
const app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth: Auth = getAuth(app);

// Must match the Cloud Function's deploy region (functions/src/deleteAccount.ts).
export const functions: Functions = getFunctions(app, "us-central1");
