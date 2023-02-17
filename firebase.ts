// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0Tdke3m20eEfteMwa8yfnJN3ph-ogTvc",
  authDomain: "contentbay-fe2e9.firebaseapp.com",
  databaseURL: 'https://contentbay-fe2e9-default-rtdb.firebaseio.com',
  projectId: "contentbay-fe2e9",
  storageBucket: "contentbay-fe2e9.appspot.com",
  messagingSenderId: "367721095988",
  appId: "1:367721095988:web:428570419ee6806b317b61",
  measurementId: "G-75ZBDLQRDE",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const auth = getAuth()
// const analytics = getAnalytics(app);

export default app
export { auth, db}