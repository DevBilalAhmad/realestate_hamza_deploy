import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyByDIQtzangOmgZp2fYtVF7fVVjcpLoKxE",
    authDomain: "realestate-b9df1.firebaseapp.com",
    projectId: "realestate-b9df1",
    storageBucket: "realestate-b9df1.appspot.com",
    messagingSenderId: "545875455506",
    appId: "1:545875455506:web:a00cdd924017f186a6b2cb"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const database = getFirestore();
 const storage = getStorage();
 const auth = getAuth(app);
 const firestore = getFirestore(app);
export {app, database,storage,auth,firestore}




export const onAuthStateChanged = (onChange) => {
    return auth.onAuthStateChanged((user) => {
      onChange(user);
    });
  };