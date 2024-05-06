// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo5HtA-AA6BT-7_9uXekC4bo4BXBQil64",
  authDomain: "startup1-4cda2.firebaseapp.com",
  projectId: "startup1-4cda2",
  storageBucket: "startup1-4cda2.appspot.com",
  messagingSenderId: "998024685202",
  appId: "1:998024685202:web:cf3ecf7d38a75ca140a84b",
  measurementId: "G-65TZRK09T1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export { auth };