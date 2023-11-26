"use client"
// Importing Firebase SDK functions
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import React, { useEffect, useState } from 'react'
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { app, firestore, onAuthStateChanged } from "../../../firebase";
// import { useState } from "react";

function Page() {
  const [userData, setUserData] = useState([]);
const [Data, setData] = useState([])

useEffect(() => {
    const unsubscribe = onAuthStateChanged((authUser) => {
      setUserData(authUser);
      if (authUser) {
        const userEmail = authUser.email;

        // Query Firestore to get user data by email
        const q = query(collection(firestore, 'ads'), where('email', '==', userEmail));

        getDocs(q)
          .then((querySnapshot) => {
            const userDatas = querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
            setData(userDatas);
          })
          .catch((error) => {
            console.error('Error getting user data:', error);
          });
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div>
      {userData ? (
        <div>
          <h2>Welcome, {userData.displayName}</h2>
         <div>
         { Data.map((items) =>(
          
             
           <div className='flex text-[#283618] shadow rounded-xl my-5 border-current mx-96'>
                 <div className='flex' key={items.id}>
                   <img src={items.data.imageUrl} className='w-[200px] h-[200px]'/>
                   <h1>{items.data.room}</h1>
                   <div className="flex flex-col pl-5">
                       <div className="flex-1 mt-5 font-bold">{items.data.title}</div>
                       
                       <div className='flex flex-row'>
                       <div className="flex-1">{items.data.acting}<span>|</span> </div>
                       <div className="flex-1">{items.data.date}<span>|</span> </div>
                       <div className="flex-1">{items.data.room} </div>
                       
                       </div>
                       <div className="flex-1">{items.data.postercode}</div>
                       <div className="mb-2 font-bold">£{items.data.rent}pcm</div>
                       
                       </div>
                       
               
                 
               </div>  
            </div>
             
                ))}
         
         </div>
        </div>
      ) : (
        <p>Please sign in</p>
      )}
    </div>
  );
}

export default Page;
