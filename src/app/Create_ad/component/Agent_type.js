import React from 'react'

const Agent_type = () => {
  return (
    <div>
    <h2 className='font-bold my-7'>Are you acting as an agent? <sup>*</sup></h2>
    <div class="flex">
    <div class="flex items-center me-9">
        <input id="inline-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="inline-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Yes</label>
    </div>
    <div class="flex items-center me-9">
        <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="inline-2-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
    </div>
    </div>
    <div className='h-[1px] bg-neutral-700 my-7'></div>
    </div>
  )
}

export default Agent_type