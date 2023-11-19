import React from 'react'

const Location = () => {
  return (
    <div>
    <div>
      <h1 className='text-4xl text-center my-5'>Explore By Location</h1>
      <p className='text-center px-[40px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
    </div>
    <div className='lg:flex lg:flex-row lg:mx-40 mt-10'>
    <div className='flex-1 mr-2'>
    <div class="absolute">
      <h1 class="text-white font-semibold text-2xl text-center py-28 lg:px-40 lg:py-40"> London </h1> </div>
        <img src='/city-1.png'className='mb-2'/>
         
    </div> 
    <div className='flex-1 mr-2'>
    <div class="absolute">
      <h1 class="text-white font-semibold text-2xl text-center py-32 lg:px-40 lg:py-40"> London </h1> </div>
    <img src='/city-2.png'className='mb-2'/>
    </div>
    <div className='flex-1 mr-2'>
    <div class="absolute">
      <h1 class="text-white font-semibold text-2xl text-center py-32 lg:px-40 lg:py-40"> London </h1> </div>
    <img src='/city-3.png'className='mb-2'/>
    </div>

    </div>
    <div className='lg:flex lg:flex-row flex flex-col lg:mx-40 mt-2'>
    <div className='flex-1 mr-2'>
    <div class="absolute">
      <h1 class="text-white font-semibold text-2xl text-center py-32 lg:px-40 lg:py-40"> London </h1> </div>
        <img src='/city-4.png'className='mb-2'/>
    </div>
    <div className='flex-1 mr-2'>
    <div class="absolute">
      <h1 class="text-white font-semibold text-2xl text-center py-32 lg:px-40 lg:py-40"> London </h1> </div>
    <img src='/city-5.png'className='mb-2'/>
    </div>
    <div className='flex-1 mr-2'>
    <div class="absolute">
      <h1 class="text-white font-semibold text-2xl text-center py-32 lg:px-40 lg:py-40"> London </h1> </div>
    <img src='/city-6.png'className='mb-2'/>
    </div>

    </div>
    </div>
  )
}

export default Location
