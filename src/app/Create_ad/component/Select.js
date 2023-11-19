import React from 'react'

const Select = () => {
  return (
    <div>
       <h2 className='font-bold my-5'>Room type: <sup>*</sup></h2>
       

<select id="Roomtype" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Please Select...</option>
  <option value="Single">Single Room</option>
  <option value="Double">Double Room</option>
  <option value="Ensuit">Ensuit Room</option>
  <option value="Shared">Shared Room</option>
  <option value="Studio">Studio</option>
  <option value="Flat">Flat</option>
</select>

    </div>
  )
}

export default Select