"use client"
// import React from 'react'
// import Link from 'next/link'
// import { useState } from 'react';
import  Image from 'next/image'
// import DataList from '../../component/DataList'
import React, { useEffect, useState } from 'react'
// import {useRouter}  from 'next/router'
import { useRouter } from 'next/navigation'
import { Firestore, collection,getFirestore,query, where, deleteDoc, doc, getDocs } from 'firebase/firestore';
// import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

// import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { app, firestore, onAuthStateChanged } from "../../../firebase";
import { database } from '../../../firebase';
import Link from 'next/link'
import { getAuth } from 'firebase/auth';
const page = () => {
  const [city, setCity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [roomType, setRoomType] = useState([]);
  const [priceFilter, setPriceFilter] = useState('');
  const router = useRouter();
  
  const [Data, setData] = useState([]);

  
    
  // const auth = getAuth(app) // import auth instance 

const [user, setUser] = useState(null);

const [visibleItems, setVisibleItems] = useState(4); 
useEffect(() => {
  const unsubscribe = onAuthStateChanged((authUser) => {
    setUser(authUser);
  },)
}
,
[])

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
  
  const [selectedRoom, setSelectedRoom] = useState(''); // State to store the selected room
  // const [roomData, setRoomData] = useState([]); // State to store the data fetched from Firestore

//------------------------------------------------------------------
const [selectedPrice, setselectedPrice] = useState([])
const fetchData = () => {
  console.log(selectedRoom);
  const userRoom = selectedRoom;
  const userPrice = selectedPrice;

  // Query Firestore to get user data by room and optionally by price
  let q;
  if (userPrice) {
    q = query(
      collection(firestore, 'ads'),
      where('room', '==', userRoom),
      where('rentp', '==', userPrice)
    );
  } else {
    q = query(collection(firestore, 'ads'), where('room', '==', userRoom));
  }

  getDocs(q)
    .then((querySnapshot) => {
      const userDatas = querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
      setRoomType(userDatas);
    })
    .catch((error) => {
      console.error('Error getting user data:', error);
    });
};

useEffect(() => {
  const unsubscribe = onAuthStateChanged((authUser) => {
    // setUserData(authUser);
    if (authUser) {
      fetchData();
    }
  });

  return () => unsubscribe();
}, [selectedRoom, selectedPrice]); // Add selectedPrice as a dependency



  //-------------------------------------------------------------------
  const handleSearch = async () => {
    const unsubscribe = onAuthStateChanged((authUser) => {
      setUser(authUser);
      if (authUser) {
        console.log(selectedRoom)
        const userEmail = selectedRoom;

        // Query Firestore to get user data by email
        const q = query(collection(firestore, 'ads'), where('room', '==', userEmail));

        getDocs(q)
          .then((querySnapshot) => {
            const userDatas = querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
             setRoomType(userDatas);
          })
          .catch((error) => {
            console.error('Error getting user data:', error);
          });
      }
    });

    return () => unsubscribe();  };

  const handleShowMore = () => {
    // Increase the number of visible items on "Show More" click
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
    
  };
  return (
    <div className='mx-5 lg:mx-32'>
        <h1 className='text-3xl lg:text-5xl'>Find your perfect<br></br> stay today</h1>
        <p className='lg:text-2xl lg:mr-[1150px] mt-5 mb-14'>Our rooms are selected for their stellar locations, design-led decor and all the curated details that make a house a home.</p>
        
      <div
      className="calendar-container"
      // action=""
      // method="get"
      // id="formBooking"
      // target="_top"
      // onSubmit={handleSubmit}
    >
      <div className='flex flex-col lg:flex lg:flex-row'>
    <div className='flex-1'>
    <div class="">
    <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Search Location</label>
    <input type="text" id="large-input" className="block lg:w-[430px] w-[330px] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
</div></div>
      <div className='flex-1'>
    <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type of room</label>
<select id="countries" onChange={(e) =>  setSelectedRoom(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Type of room</option>
  <option value="Single">Single room</option>
  <option value="Double">Double room</option>
  <option value="ensuit">Ensuit</option>
  <option value="Studio">Studio</option>
</select></div>
<div className='flex-1'>
<label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">filter by price</label>
<select id="countries"   onChange={(e) =>  setselectedPrice(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>filter by price</option>
  <option value="600">600£-700£</option>
  <option value="700">700£-800£</option>
  <option value="800">800£-900£</option>
  <option value="900">900£-1000£</option>
  <option value="1000">1000£-1100£</option>
  <option value="1100">1000£-1200£</option>
</select></div>
<div className='flex-1'>
<div className='relative text-white pt-7'>
       
        <button  onClick={handleSearch} className="bg-[#283618] hover:bg-[#d8dcbc] text-white font-light py-2 px-4 border border-[#283618] rounded">
        Search</button>
       
        </div>
        </div></div>
    </div>


        <h2 className='my-12 bg-[#fff4f4] text-center py-5'>Enjoy a 5% discount on accomodation when you stay with us this DECEMBER! Book directly with our team on: +020 8004 8516 or info@roomflog.co.uk</h2>
    <div>
     <div className='flex flex-col w-[97%] h-[100%] '>
     
     {  roomType.map((items) => (
      <div key={items.id} onClick={() => router.push('/Listing_view/' + items.id)}>
      <div className='flex text-[#283618] shadow rounded-xl my-5 border-current mx-96'>
      <div className='flex' >
        <img src={items.data.imageUrl} className='w-[200px] h-[200px]'y/>
        <h1>{items.room}</h1>
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
      </div>
    ))}
    <div>oher</div>
      
            { Data.slice(0, visibleItems).map((items) =>(
 <div onClick={() => router.push('/Listing_view/' + items.id) } >

  
<div className='flex text-[#283618] shadow rounded-xl my-5 border-current mx-96'>
      <div className='flex' key={items.id}>
        <img src={items.data().imageUrl} className='w-[200px] h-[200px]'y/>
        <h1>{items.room}</h1>
        <div className="flex flex-col pl-5">
            <div className="flex-1 mt-5 font-bold">{items.data().title}</div>
            
            <div className='flex flex-row'>
            <div className="flex-1">{items.data().acting}<span>|</span> </div>
            <div className="flex-1">{items.data().date}<span>|</span> </div>
            <div className="flex-1">{items.data().room} </div>
            
            </div>
            <div className="flex-1">{items.data().postercode}</div>
            <div className="mb-2 font-bold">£{items.data().rent}pcm</div>
            
            </div>
            
      </div>
     
         
    </div> 
   
        
 </div>
  
     ))}
   </div>
   <div className='flex items-center justify-center'>
      {visibleItems < Data.length && (
        <button onClick={handleShowMore}>Show More</button>
      )}</div>
   <div className='text-[#283618] mt-40'>
      <h1 className='mb-3 text-3xl'>There are multiple reasons to relocate,<br></br>but we all have one need in common:<br></br>a home away from home.</h1>
      <div className='flex flex-col lg:flex lg:flex-row'>
        <div>
      <img src='/p1.png'/>
      </div>
      <div className='flex-1 lg:my-52 lg:pl-10 '>
      <h1 className='text-2xl'>Hand-picked homes</h1>
      <p className='mb-5 lg:my-5'>We offer our guests only the best apartments and neighborhoods. Spacious and artfully-designed bedrooms with work station, smart tv and incredible common areas.</p>
      <Link href="/Room_types">
        <button className="bg-[#283618] hover:bg-[#d8dcbc] text-white font-light py-2 px-4 border border-[#283618] rounded">
        Room Categories</button>
        </Link>
        </div>
        </div>
        <div className='flex flex-col-reverse lg:flex lg:flex-row lg:my-14 my-7'>
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