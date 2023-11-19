import React from 'react'

const Rent_type = () => {
  return (
    <div>
    <h2 className='font-bold my-5'>What are you renting? <sup>*</sup></h2>
    <div className="flex">
    <div className="flex items-center me-4">
        <input id="inline-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="inline-radio" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> An entire property</label>
    </div>
    <div className="flex items-center me-4">
        <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="inline-2-radio" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Room(s) in a shared property</label>
    </div>
    </div>
    <div className='h-[1px] bg-neutral-700 my-5'></div>
    </div>
  )
}

export default Rent_type