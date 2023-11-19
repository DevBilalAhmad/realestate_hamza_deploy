
'use client'
import React, { useState } from 'react';
import {Checkbox} from "@nextui-org/checkbox";
import Link from 'next/link';

const Form = () => {

    const [title, setTitle] = useState('');
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Input Value:', inputValue);
    };
  
   

  return (
    <div>
      <form onSubmit={handleSubmit}>
    <div className=''>
      <div className=' flex flex-1'><div className="ml-4 mt-4">
                  
                  <input type="text"  placeholder='Name'  className="bg-[#fefbf3] border py-2 px-16 block w-full appearance-none " value={inputValue} onChange={handleInputChange} />
              </div>
              <div class="ml-4 mt-4">
                  
                  <input type="text" placeholder='Email' className="bg-[#fefbf3] border py-2 px-16 block w-full appearance-none "  onChange={(e) => setTitle(e.target.value)} name="email"/>
              </div>
       </div>
       <div className='  flex flex-1'>
       <div class="ml-4 mt-4">
                  
                  <input type="text" placeholder='Phone' className="bg-[#fefbf3] border py-2 px-16 block w-full appearance-none " onChange={(e) => setTitle(e.target.value)} name="phone"/>
              </div>
              <div class="ml-4 mt-4">
                  
                  <input type="text" placeholder='Subject' className="bg-[#fefbf3] border py-2 px-16 block w-full appearance-none "  onChange={(e) => setTitle(e.target.value)} name="subject"/>
              </div> 
      </div>
      <div className=' ml-4 lg:mr-36 mt-4'>
<textarea type="text" className='bg-[#fefbf3] border rounded py-10  block w-full appearance-none pl-5 ' placeholder='Message' onChange={(e) => setTitle(e.target.value)} name="message" />

      </div>
      <div>
      <div className="flex items-center justify-center " >
      
      <Checkbox className='bg-white ml-4 pr-1 pl-3 items-center justify-center' defaultSelected ></Checkbox><h1 className='w-full'>I have read and agreed to the Privacy Policy.</h1>
     
      <Checkbox className='bg-white pr-1 pl-3' defaultSelected ></Checkbox><h1 className='mr-36'>I accept receiving information updates and news by subscribing to the newsletter.</h1>
     
    </div> 
    </div> 
    <div className='text-white relative ml-4 pb-[100px] text-left'>
        <Link href="/Team">
        <button type="button"  className="bg-[#283618] hover:bg-[#d8dcbc] text-white font-light py-2 px-4 border border-[#283618] rounded">
        Send</button>
        </Link>
       
 

   
        </div>
    </div>
    </form>
    </div>
  )
}

export default Form
