'use client'
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import {  getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
// import { database, db } from '../../../firebase';
// import {useRouter} from 'next/router'
import { useSearchParams } from 'next/navigation'
import  Image from 'next/image'
// import { collection } from 'firebase/firestore';
// import DataList from '../../component/DataList'
// import React, { useEffect, useState } from 'react'
// import {useRouter}  from 'next/router'
import { useRouter } from 'next/navigation'
import { collection, deleteDoc, addDoc, doc, getDocs } from 'firebase/firestore';
import { database , storage} from '../../../../firebase';
import Link from 'next/link'

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { useRouter } from 'next/router';
// import { doc } from 'firebase/firestore';
// import React from 'react'
const page = (ctx) => {
    const [student, setStudent] = useState([]);
    const [title, settitle] = useState("");
    const [dis, setdis] = useState("");
    const [property, setproperty] = useState("")
    const [imageFile, setImageFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    
    const router = useRouter();
    
    const studentId = ctx.params.id;
  
    // const { id } = router.query;
    
    console.log(studentId);
    
    
  useEffect(() => {
    // Check if studentId is defined before calling getData
    if (studentId) {
      getData();
      // console.log(searchParams.get('id'))
    }
  }, [studentId]);

    const getData = async () => {
      await getDoc(doc(database, "ads", studentId))
      .then((response) => {
        settitle(response.data().title)
        setdis(response.data().discription)
        setproperty(response.data().property)
        setImageUrl(response.data().imageUrl)
      })
    }
  
    const updateData = async (e) => {
      e.preventDefault();
      
      if (imageFile) {
        const storageRef = ref(storage, `adsImages/${imageFile.name}`);
        await uploadBytesResumable(storageRef, imageFile).then(async () => {
          const imageUrl = await getDownloadURL(storageRef);
      
      let fieldToEdit = doc(database, 'students', studentId);
      await updateDoc(fieldToEdit, {
        tite: title,
        dis: dis,
        imageUrl: imageUrl
      })
      .then(() => {
        alert('Data Updated')
      })
      .catch((err) => {
        console.log(err);
      })});
        }
    };
  return (
    <div className='mx-44'>
        <div className="flex flex-row">
            <div className="flex-1">
        <h1 className='font-bold text-3xl'>{title}</h1>
        <div className='flex justify-between'>
                <div className=''>
            <p>Address</p></div>
            <div className=''><p>price</p></div>
            </div>
        <div className='flex flex-row'>
            <div className='flex-1'>
            <img src={imageUrl} className='mt-10'/>
            </div>
                 </div></div>
            <div className="border-black py-2 px-2 border-solid border-2 w-96 h-40">
        <div className='flex justify-between'>
            <div className=''>
                <p>Posting for 10+ years</p>
            </div>
            <div className=''><Link href=''>See all ads</Link></div>
            </div>
            <div className='h-[1px] bg-neutral-700 my-2'></div>
            <div>
                <h1>Hamza</h1>
            </div>
            <div className="">
            <FaPhone/><h1 className="pl-5 -mt-5">07463494058</h1>
            </div>
    <Link href="">
        <button className="bg-[#283618] hover:bg-[#d8dcbc] text-white font-light py-2 px-[160px] border border-[#283618] rounded">
        Email</button>
        </Link>
        </div>
        <div className='h-[1px] bg-neutral-700 my-2'></div>
        <div className="flex justify-between">
            <div>
            <h1>Share:</h1></div>
            <div>
            <FaFacebookF />
            </div>
        </div>
        </div>
        <div className='flex flex-row'>
            <div className='flex-1'>
            <h1>Posted</h1>
            <h1>17 day ago</h1>
            </div>
            <div className='flex-1'>
            <h1>Seller Type</h1>
            <h1>Agency</h1>
            </div>
            <div className='flex-1'>
                <h1>Date Available</h1>
                <h1>17 Novenmber 2018</h1>
            </div>
            <div className='flex-1'>
            <h1>Property Type</h1>
            <h1>{property}</h1>
            </div>
            <div className='flex-1'>
            <h1>Room Type</h1>
            <h1>Double room</h1>
            </div>
        </div>
        <div>
            <h1 className='text-3xl'>Description</h1>
            <p>{dis}</p>
            <h1>Ad ID: .......</h1>

        </div>
        
        
    </div>
    
  )
}

export default page