import React from 'react'
import Rent_type from './component/Rent_type'
import Agent_type from './component/Agent_type'
import File_upload from './component/File_upload'
import Property_detail from './component/Property_detail'
import Link from 'next/link'

const page = () => {
  return (
    <div className='lg:mx-[600px]'>
    <h1 className='text-3xl font-bold my-5'>Post an Ad</h1>
    <Rent_type/>
    <Agent_type/>
    <File_upload/>
    <div class="mb-6">
    <label for="default-input" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Title<sup>*</sup></label>
    <input type="text" 
    id="default-input" 
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "/>
    </div>
    
    <label for="message" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Description</label>
    <textarea 
    id="message" 
    rows="4" 
    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your Description..."></textarea>
    <Property_detail/>
    <h1 className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Contact Details <sup>*</sup></h1>
    <p> select at least one option to be contacted by:</p>
    <div class="flex items-center mb-4">
        <input id="default-checkbox" 
        type="checkbox" 
        value="" 
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email: <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "/></label>
        </div>
        <div className="flex items-center">
        <input checked id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone: <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "/></label>
        </div>
        <div className='h-[1px] bg-neutral-700 my-5'></div>
        <p>Enter your post code</p>
        <input type="text" id="default-input" className="my-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "/>
      <div className='lg:flex lg:flex-row flex flex-col gap-4'>
        <div className='flex-1'>
        <p>By selecting Post My Ad you agree you've read and accepted our Terms of Use and Posting Rules. Please see our Privacy Notice for information regarding the processing of your data.</p>
        </div>
        <div className='flex-1'>
        <div className='text-white relative pt-5 pb-[100px]'>
        <Link href="">
        <button className="bg-[#283618] hover:bg-[#d8dcbc] text-white font-light py-2 px-32 border border-[#283618] rounded">
        Post My Ad</button>
        </Link>
        </div>      
        </div>
      </div>
    </div>
  )
}

export default page