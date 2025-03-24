
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp ,getApp,getApps} from "firebase/app";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOSKZTG_QJ0Fs-D5qL9VFxYahvLNGinDc",
  authDomain: "prepwise-ae5b2.firebaseapp.com",
  projectId: "prepwise-ae5b2",
  storageBucket: "prepwise-ae5b2.firebasestorage.app",
  messagingSenderId: "840245544589",
  appId: "1:840245544589:web:21fb730571cbfce31684c4",
  measurementId: "G-PTTK605CRV"
};

// Initialize Firebase
const app =!getApps.length? initializeApp(firebaseConfig):getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
