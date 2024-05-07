// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const p = process.env;

const firebaseConfig = JSON.parse(p.REACT_APP_FIREBASE_CONFIG);
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };