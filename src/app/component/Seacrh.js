import React from 'react'
import { CiSearch } from 'react-icons/ci'
const Seacrh = () => {
  return (
    <div>
      <div className='relative pt-9 text-center mb-10'> 
        <input 
        type='Search'
        className='bg-[#e6e7e8] py-6 lg:w-[40rem] w-full rounded-full pl-5
        placeholder:text-black
        placeholder:text-[20px]'
        placeholder='Where do you want to live'
        />
        <div className='absolute text-center w-[50px] h-[50px]  rounded-full  bg-[#d16d54] lg:top-[45px] lg:right-[635px] top-[45px] right-[5px]  flex items-center justify-center'><CiSearch/></div>
      </div>
    </div>
  )
}

export default Seacrh
