"use client"

import Link from 'next/link'
import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../../firebase";

function Loginb() {

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
  return (
    <div>
       
    <div className="hidden lg:flex   items-center pl-6 text-[15px]">
     <button onClick={googleSignIn}>Log in</button>
     <div className="   bg-[#e20112] py-[6px] text-white rounded-full px-4 ml-6 flex items-center ">
      <Link href='/Signup'><button>Sign up</button></Link>
     </div>
   </div>
    </div>
  )
}

export default Loginb
