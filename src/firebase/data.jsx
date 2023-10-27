// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDezC-KjDjl8Gu0Rmrxp9bpmT5V03wkQU",
  authDomain: "react-mini-tienda.firebaseapp.com",
  projectId: "react-mini-tienda",
  storageBucket: "react-mini-tienda.appspot.com",
  messagingSenderId: "711026437245",
  appId: "1:711026437245:web:de139875cdf4e2403e5514",
  measurementId: "G-7QHMYK5Y01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)