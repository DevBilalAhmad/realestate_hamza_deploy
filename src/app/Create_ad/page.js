"use client"
import React, { useEffect, useState } from 'react'
// import {useRouter}  from 'next/router'
import { useRouter } from 'next/navigation'
import { collection, deleteDoc, addDoc, doc, getDocs } from 'firebase/firestore';
import { database , storage} from '../../../firebase';
import Link from 'next/link'
import DatePicker from "react-datepicker";


import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";// import Rent_type from './component/Rent_type'
import { FaCalendar } from 'react-icons/fa6';
// import Agent_type from './component/Agent_type'
// import File_upload from './component/File_upload'
// import Property_detail from './component/Property_detail'
// import Link from 'next/link'

import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

const page = () => {
  
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValue1, setSelectedValue1] = useState('');
  const [title, settitle] = useState('');
  const [dis, setdis] = useState('');
  const [rent, setrent] = useState('');
  const [rentp, setrentp] = useState('');
  const [date, setdate] = useState('');
  const [pro, setpro] = useState('');
  const [roo, setroo] = useState('');
  const [cou, setcou] = useState('');
    const [phone, setphone] = useState('');
    const [email, setemail] = useState('');
    const [pos, setpos] = useState('');
    const [imageFile, setImageFile] = useState(null);
const [imageUrl, setImageUrl] = useState('');
 const router = useRouter();
 const [imageFiles, setImageFiles] = useState([]);
 const [imageUrls, setImageUrls] = useState([]);








 const [showCalendar, setShowCalendar] = useState(false);
 const [selectedDate, setSelectedDate] = useState(null);

 const toggleCalendar = () => {
   setShowCalendar(!showCalendar);
 };

 const onChange = (dates) => {
   // The 'dates' parameter is an array containing the start and end dates when using selectsRange
   // In this example, we're assuming the user is selecting a single date, so we take the first element
   const selected = dates[0];

   setSelectedDate(selected);

   // Log the selected date to the console
   console.log('Selected Date:', selected);
     // Format the date using date-fns before logging
     const formattedDate = format(selected, 'dd/MM/yyyy', { awareOfUnicodeTokens: true });
     console.log('Selected Date:', formattedDate);
     setShowCalendar(false);
 };
//------------

 const handleFileChange = (e) => {
  const files = e.target.files;
  const newImageFiles = [...imageFiles];
  const newImageUrls = [...imageUrls];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    newImageFiles.push(file);

    // You can also display the images as they are selected
    const reader = new FileReader();
    reader.onload = (e) => {
      newImageUrls.push(e.target.result);
      setImageUrls(newImageUrls);
    };
    reader.readAsDataURL(file);
  }

  setImageFiles(newImageFiles);
};

const handleRemoveImage = (index) => {
  const newImageFiles = [...imageFiles];
  const newImageUrls = [...imageUrls];

  newImageFiles.splice(index, 1);
  newImageUrls.splice(index, 1);

  setImageFiles(newImageFiles);
  setImageUrls(newImageUrls);
};


 
//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
// setSelectedValue1(event.target.value);

//   };
 const handleSubmit = async (e) => {
 
   console.log('Selected value:', selectedValue);
    console.log('Selected value:', selectedValue1);
    console.log('Selected value:', title);
     console.log('Selected value:', dis);
     console.log('Selected value:', rent);
     console.log('Selected value:', rentp);
     console.log('Selected value:', date);
      console.log('Selected value:', pro);
      console.log('Selected value:', roo);
          console.log('Selected value:', cou);
          console.log('Selected value:', email);
          console.log('Selected value:', phone);
                  console.log('Selected value:', pos);
  
   e.preventDefault();
     
   if (imageFiles.length > 0) {
    // Loop through each image file
    for (let i = 0; i < imageFiles.length; i++) {
      const storageRef = ref(storage, `adsImages/${imageFiles[i].name}`);
      await uploadBytesResumable(storageRef, imageFiles[i]).then(async () => {
        const imageUrl = await getDownloadURL(storageRef);
        // Save each image URL along with other data
                   await addDoc(collection(database, 'ads'), {
             rentind: selectedValue,
             acting: selectedValue1,
             imageUrl: imageUrl,
             title: title,
             discription:dis,
             rent:rent,
             rentp:rentp,
             date:date,
             property:pro,
             room:roo,
             couple:cou,
             email:email,
             phone:phone,
             postercode:pos,

              // Save the image URL
           })
           .then(() => {
             alert('Data Saved');
             // setName('');
             // setMarks('');
             setImageFile(null);
             setImageUrl('');
             setImageFiles([]);
             setImageUrls([]);
           })
           .catch((err) => {
             console.log(err);
           });
         });
       }}
    
    
 };

  return (
    <div className='lg:mx-[600px]'>
    <form onSubmit={handleSubmit}>
    <h1 className='my-5 text-3xl font-bold'>Post an Ad</h1>
    <h2 className='my-5 font-bold'>What are you renting? <sup>*</sup></h2>
    <div className="flex">
    <div className="flex items-center me-4">
        <input id="inline-radio"  onChange={(e) => setSelectedValue(e.target.value)} type="radio" value="entireProperty" name="inlinegroup" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="inline-radio" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> An entire property</label>
    </div>
    <div className="flex items-center me-4">
        <input id="inline-2-radio" type="radio" onChange={(e) =>setSelectedValue(e.target.value)} value="shareroom" name="inlinegroup" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="inline-2-radio" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Room(s) in a shared property</label>
    </div>
    </div>
    <div className='h-[1px] bg-neutral-700 my-5'></div>

    <div>
    <h2 className='font-bold my-7'>Are you acting as an agent? <sup>*</sup></h2>
    <div class="flex">
    <div class="flex items-center me-9">
        <input id="inline-radio" type="radio" value="Agency" onChange={(e) =>setSelectedValue1(e.target.value)} name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="inline-radio" className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"> Yes</label>
    </div>
    <div class="flex items-center me-9">
        <input id="inline-2-radio" type="radio" value="private" onChange={(e) =>setSelectedValue1(e.target.value)} name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="inline-2-radio" className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">No</label>
    </div>
    </div>
    <div className='h-[1px] bg-neutral-700 my-7'></div>
    </div>
    <div>
    <h2 className='font-bold my-7'>Photo</h2>
<div className="flex items-center justify-center w-full">
<label htmlFor="file">
Upload Images:
<input
  required
  style={{ display: 'none' }}
  type="file"
  id="file"
  onChange={handleFileChange}
  className="hidden"
  multiple  // Allow selecting multiple files
/>
</label>
    {imageUrls.map((url, index) => (
      <div key={index}>
        <img src={url} alt={`Image ${index}`} style={{ width: '100px', height: 'auto' }} />
        <button type="button" onClick={() => handleRemoveImage(index)}>
          Remove
        </button>
      </div>
    ))}
</div>
<div className='h-[1px] bg-neutral-700 my-7'></div> 
</div>
    <div class="mb-6">
    <label for="default-input" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Title<sup>*</sup></label>
    <input type="text" 
    id="default-input" 
    onChange={(e) => settitle(e.target.value)}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "/>
    </div>
    
    <label for="message" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Description</label>
    <textarea 
    id="message" 
    onChange={(e) =>setdis(e.target.value)}
    rows="4" 
    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your Description..."></textarea>
    
    <div>
        <h2 className='my-8 font-bold'>Property details <sup>*</sup></h2>
        <div className="flex flex-col gap-5 lg:flex lg:flex-row">
        <div className='flex-1'>
        <label for="price" className="mt-5 font-bold">Rent<sup>*</sup></label>
        <input type='number' id='price'
        onChange={(e) =>setrent(e.target.value)}
      className='w-full leading-5 border-2 border-solid h-11'/>
        
        <div>
        
        <h2 className='my-5 font-bold'>Date available:<sup>*</sup></h2>
        <div className="">
        <img
          src="/about.jpg"
          alt="schedule-icon"
          className=" w-[17px] cursor-pointer animate__transition"
          onClick={toggleCalendar}
        />

        {showCalendar === true ? (
          <div
          >
            <DatePicker
              // selected={timeData.date}
               selected={selectedDate}
              onChange={onChange}
              selectsRange
              inline
              maxDate={new Date(2026, 11, 31)} // December 31, 2026
              dateFormat="dd/MM/yyyy"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    <div className="relative max-w-sm ">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
      
      </div>
      <input datepicker type="text"   onChange={(e) => setdate(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
    </div>
        </div>
        <div>
       <h2 className='my-5 font-bold'>Room type: <sup>*</sup></h2>
       

<select id="Roomtype" onChange={(e) => setroo(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Please Select...</option>
  <option value="Single">Single Room</option>
  <option value="Double">Double Room</option>
  <option value="Ensuit">Ensuit Room</option>
  <option value="Shared">Shared Room</option>
  <option value="Studio">Studio</option>
  <option value="Flat">Flat</option>
</select>

    </div>
        
        </div>
        <div className='flex-1'>
        <h2 className='mb-2 font-bold'>Rent period: <sup>*</sup></h2>
        <div className="flex">
        <div class="flex items-center me-9 mb-4">
        <input id="inline-radio" type="radio" value="monthly" onChange={(e) => setrentp(e.target.value)}  name="radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="inline-radio" className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"> Monthly</label>
        </div>
        <div class="flex items-center me-9 mb-4">
        <input id="inline-2-radio" type="radio" value="weekly" onChange={(e) => setrentp(e.target.value)} name="radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="inline-2-radio" className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">Weekly</label>
        </div>
        </div>
        <h2 className='my-5 font-bold'>Property type: <sup>*</sup></h2>
        <select id="Propertytype"  onChange={(e) => setpro(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Please Select...</option>
        <option value="Flat">Flat</option>
        <option value="House">House</option>
        <option value="other">other</option>
        </select>
        <h2 className='my-6 font-bold'>Available to couples?:  <sup>*</sup></h2>
        <div className="flex">
        <div className="flex items-center me-9">
        <input id="inline-radio" type="radio" onChange={(e) => setcou(e.target.value)} value="yes" name="group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="inline-radio" className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"> Yes</label>
        </div>
        <div className="flex items-center me-9">
        <input id="inline-2-radio" type="radio" value="no" onChange={(e) => setcou(e.target.value)} name="group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="inline-2-radio" className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">No</label>
        </div>
        </div>
        </div>

        </div>
        <div className='h-[1px] bg-neutral-700 my-5'></div>
        
       

    </div>

    <h1 className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Contact Details <sup>*</sup></h1>
    <p> select at least one option to be contacted by:</p>
    <div class="flex items-center mb-4">
        <input id="default-checkbox" 
        type="checkbox" 
         onChange={(e) => setemail(e.target.value)}
        value={email} 
        name={email}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="default-checkbox" className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">Email: <input type="text" onChange={(e) => setemail(e.target.value)} id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "/></label>
        </div>
        <div className="flex items-center">
        <input  id="checked-checkbox"  onChange={(e) => setphone(e.target.value)} type="checkbox" value={phone} name={phone} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone: <input type="text" onChange={(e) => setphone(e.target.value)} id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "/></label>
        </div>
        <div className='h-[1px] bg-neutral-700 my-5'></div>
        <p>Enter your post code</p>
        <input type="text" id="default-input"  onChange={(e) => setpos(e.target.value)} className="my-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "/>
      <div className='flex flex-col gap-4 lg:flex lg:flex-row'>
        <div className='flex-1'>
        <p>By selecting Post My Ad you agree you've read and accepted our Terms of Use and Posting Rules. Please see our Privacy Notice for information regarding the processing of your data.</p>
        </div>
        <div className='flex-1'>
        <div className='text-white relative pt-5 pb-[100px]'>
        
        <button  type='submit' className="bg-[#283618] hover:bg-[#d8dcbc] text-white font-light py-2 px-32 border border-[#283618] rounded">
        Post My Ad</button>
        
        </div>      
        </div>
      </div>
      </form>
    </div>
  )
}

export default page