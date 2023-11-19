import React from 'react'
import Date from './Date'
import Select from './Select'

const Property_detail = () => {
  return (
    <div>
        <h2 className='font-bold my-8'>Property details <sup>*</sup></h2>
        <div className="lg:flex lg:flex-row flex flex-col gap-5">
        <div className='flex-1'>
        <label for="price" className="mt-5 font-bold">Rent<sup>*</sup></label>
        <input type='number' id='price'
      className='w-full leading-5 h-11 border-solid border-2'/>
        
        <Date/>
        <Select/>
        
        </div>
        <div className='flex-1'>
        <h2 className='font-bold mb-2'>Rent period: <sup>*</sup></h2>
        <div className="flex">
        <div class="flex items-center me-9 mb-4">
        <input id="inline-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="inline-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Monthly</label>
        </div>
        <div class="flex items-center me-9 mb-4">
        <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="inline-2-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Weekly</label>
        </div>
        </div>
        <h2 className='font-bold my-5'>Property type: <sup>*</sup></h2>
        <select id="Propertytype" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Please Select...</option>
        <option value="Single">Flat</option>
        <option value="Double">House</option>
        <option value="Ensuit">other</option>
        </select>
        <h2 className='font-bold my-6'>Available to couples?:  <sup>*</sup></h2>
        <div className="flex">
        <div className="flex items-center me-9">
        <input id="inline-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="inline-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Yes</label>
        </div>
        <div className="flex items-center me-9">
        <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="inline-2-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
        </div>
        </div>
        </div>

        </div>
        <div className='h-[1px] bg-neutral-700 my-5'></div>
        
       

    </div>
  )
}

export default Property_detail