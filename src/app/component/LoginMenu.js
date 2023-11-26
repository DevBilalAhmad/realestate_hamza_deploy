"use client"

import Link from 'next/link'
import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../../firebase";

function LoginMenu() {

    
    const auth = getAuth(app) // import auth instance 

    const googleSignIn = async () => {
        try {
          const provider = new GoogleAuthProvider();
          const result = await signInWithPopup(auth, provider)
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          console.log(credential)
        } catch (e) {
          console.log(e.code, e.message)
        }
      }    
  
// const [user, setUser] = useState(null);
// const [showLoginPrompt, setShowLoginPrompt] = useState(false);

// useEffect(() => {
//   const unsubscribe = onAuthStateChanged((authUser) => {
//     setUser(authUser);

//     // If the user is not authenticated and the login prompt is not shown,
//     // set a timeout to show the login prompt after 3 to 5 seconds.
//     if (!authUser && !showLoginPrompt) {
//       const timeoutId = setTimeout(() => {
//         setShowLoginPrompt(true);
//         console.log("jjhkhkhjk")
//       }, 1000);
      

//       // Cleanup the timeout on component unmount
//       return () => clearTimeout(timeoutId);
//     }
//   });

//   // Cleanup the observer on unmount
//   return () => unsubscribe();
// }, [showLoginPrompt]);


  return (
    <div>
    <div className="absolute right-0 flex flex-col w-56 py-5 bg-black border-2 border-gray-800 top-14">
    <div className="flex flex-col gap-3">
      <div className="flex flex-row items-center w-full gap-3 px-3 group/item">
        <img className="w-8 rounded-md" src="/images/default-blue.png" alt="" />
        <p className="text-sm text-white group-hover/item:underline">account</p>
      </div>
    </div>
    <hr className="h-px my-4 bg-gray-600 border-0" />
    <div  className="px-3 text-sm text-center text-white hover:underline">
    <button onClick={googleSignIn}>Log in</button>
    </div>
  </div>  
    </div>
  )
}

export default LoginMenu
