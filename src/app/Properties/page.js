"use client"
// import React from 'react'
// import Link from 'next/link'
// import { useState } from 'react';
import  Image from 'next/image'
// import DataList from '../../component/DataList'
import React, { useEffect, useState } from 'react'
// import {useRouter}  from 'next/router'
import { useRouter } from 'next/navigation'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { database } from '../../../firebase';
import Link from 'next/link'
const page = () => {
  const [city, setCity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [roomType, setRoomType] = useState('double');
  const [priceFilter, setPriceFilter] = useState('');
  const router = useRouter();
  
  const [Data, setData] = useState([]);

  useEffect(() => {
    if(!sessionStorage.getItem("username")){
      router.push("/Login")
      // setUsername(sessionStorage.getItem("username"))
    }
    
  }, [])
  

  useEffect(() => {
    getData();
  }, [])
  

  const getData = async () => {
    await getDocs(collection(database, 'ads'))
    .then((response) => {
      setData(response.docs);
    })
  }

  console.log(Data);

  const updateStudent = () => {
    alert('update');
  }

  const deleteStudent = async (id) => {
    let fieldToDelete = doc(database, 'ads', id);
    await deleteDoc(fieldToDelete)
    .then(() => {
      alert('Data Deleted')
    })
    .catch((err) => {
      console.log(err);
    })

  }
  
  const logout = () => {
    sessionStorage.removeItem('username');
    router.push('/Login')
  }
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling form submission here
    // You can use the state variables (city, startDate, endDate, etc.) to send data to the server or perform other actions
  };
  return (
    <div className='lg:mx-32 mx-5'>
        <h1 className='lg:text-5xl text-3xl'>Find your perfect<br></br> stay today</h1>
        <p className='lg:text-2xl lg:mr-[1150px] mt-5 mb-14'>Our rooms are selected for their stellar locations, design-led decor and all the curated details that make a house a home.</p>
        
      <form
      className="calendar-container"
      action=""
      method="get"
      id="formBooking"
      target="_top"
      onSubmit={handleSubmit}
    >
      <div className='lg:flex lg:flex-row flex flex-col'>
    <div className='flex-1'>
    <div class="">
    <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Search Location</label>
    <input type="text" id="large-input" className="block lg:w-[430px] w-[330px] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
</div></div>
      <div className='flex-1'>
    <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type of room</label>
<select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Type of room</option>
  <option value="single">Single room</option>
  <option value="double">Double room</option>
  <option value="ensuit">Ensuit</option>
  <option value="Studio">Studio</option>
</select></div>
<div className='flex-1'>
<label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">filter by price</label>
<select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>filter by price</option>
  <option value="600">600£-700£</option>
  <option value="700">700£-800£</option>
  <option value="800">800£-900£</option>
  <option value="900">900£-1000£</option>
  <option value="1000">1000£-1100£</option>
  <option value="1100">1000£-1200£</option>
</select></div>
<div className='flex-1'>
<div className='text-white relative pt-7'>
        <Link href="/">
        <button className="bg-[#283618] hover:bg-[#d8dcbc] text-white font-light py-2 px-4 border border-[#283618] rounded">
        Search</button>
        </Link>
        </div>
        </div></div>
    </form>


        <h2 className='my-12 bg-[#fff4f4] text-center py-5'>Enjoy a 5% discount on accomodation when you stay with us this DECEMBER! Book directly with our team on: +020 8004 8516 or info@roomflog.co.uk</h2>
    <div>
     <div className='flex flex-col w-[97%] h-[100%] '>
      
      
            { Data.map((items) =>(
 <div onClick={() => router.push('/Listing_view/' + items.id) } >

  
<div className='flex text-[#283618] shadow rounded-xl my-5 border-current mx-96'>
      <div className='flex' key={items.id}>
        <img src={items.data().imageUrl} className='w-[200px] h-[200px]'/>
        <h1>{items.room}</h1>
        <div className="flex flex-col pl-5">
            <div className="flex-1 font-bold mt-5">{items.data().title}</div>
            
            <div className='flex flex-row'>
            <div className="flex-1">{items.data().acting}<span>|</span> </div>
            <div className="flex-1">{items.data().date}<span>|</span> </div>
            <div className="flex-1">{items.data().room} </div>
            
            </div>
            <div className="flex-1">{items.data().postercode}</div>
            <div className="font-bold mb-2">£{items.data().rent}pcm</div>
            
            </div>
            
      </div>
      
    
      
    </div>  
 </div>
  
     ))}
   </div>
   <div className='text-[#283618] mt-40'>
      <h1 className='text-3xl mb-3'>There are multiple reasons to relocate,<br></br>but we all have one need in common:<br></br>a home away from home.</h1>
      <div className='lg:flex lg:flex-row flex flex-col'>
        <div>
      <img src='/p1.png'/>
      </div>
      <div className='flex-1 lg:my-52 lg:pl-10 '>
      <h1 className='text-2xl'>Hand-picked homes</h1>
      <p className='lg:my-5 mb-5'>We offer our guests only the best apartments and neighborhoods. Spacious and artfully-designed bedrooms with work station, smart tv and incredible common areas.</p>
      <Link href="/Room_types">
        <button className="bg-[#283618] hover:bg-[#d8dcbc] text-white font-light py-2 px-4 border border-[#283618] rounded">
        Room Categories</button>
        </Link>
        </div>
        </div>
        <div className='lg:flex lg:flex-row flex flex-col-reverse lg:my-14 my-7'>
        <div className='flex-1 lg:my-52'>
      <h1 className='text-2xl'>Guest care<br></br>& Community</h1>
      <p className='lg:my-5 '>Online Concierge, weekly cleaning, wifi, community events and more included in the rental price. Our matching process ensures like-minded housemates.</p>
      <Link href="/Guest_Expeience">
        <button className="bg-[#283618] hover:bg-[#d8dcbc] text-white font-light py-2 px-4 border border-[#283618] rounded">
        Guest experience</button>
        </Link>
        </div>
        <div className='flex flex-row mt-5'>
        <div className='flex-1 '>
          <img src='/p2.png'className='lg:w-[100%] pr-[10px] w-[100%] h-[100%]'/>
        </div>
        <div className='flex-1 '>
          <img src='/p3.png' className='lg:w-[100%] pr-[10px] w-[100%] h-[100%]'/>
        </div></div>
        </div>
    </div>
  
      </div></div>
      
      
  )
}

export default page