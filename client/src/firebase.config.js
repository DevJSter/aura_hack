import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcjsrGDHZS2NlDkrTTRpxAVnyoMzqfssg",
  authDomain: "pratishtha-e713f.firebaseapp.com",
  projectId: "pratishtha-e713f",
  storageBucket: "pratishtha-e713f.appspot.com",
  messagingSenderId: "536779966295",
  appId: "1:536779966295:web:7b3a272250b278dd94a012",
  measurementId: "G-SZ8JX9YKDZ"
};


// Initialize Firebase
const app =  getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, provider, app, firestore, storage };
