// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACwiB_noPh0_5Lbl8Ana4IeYJW6bXDUwY",
  authDomain: "watermelon-cup-33a1d.firebaseapp.com",
  projectId: "watermelon-cup-33a1d",
  storageBucket: "watermelon-cup-33a1d.appspot.com",
  messagingSenderId: "570273796548",
  appId: "1:570273796548:web:9021633dfffad327c69491",
  measurementId: "G-HPN6NK2HJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };