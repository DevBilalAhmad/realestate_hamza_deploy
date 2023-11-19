import React from 'react'

function Easy() {
  return (
    <div className='flex justify-center items-center mt-20 '>
        
        <div className='lg:w-[800px] lg:h-[400px] '>
        <div className='lg:flex lg:flex-row flex flex-col'> 
        <img src='/w2.png' className='w-[100px] h-[100px] lg:mr-10 mb-5'/>
        <div>
            <div className=''>
        <p className='text-[28px] justify-center font-bold' > 1.Easy and search</p>
        </div>
        <div>
        <h1 class=" text-[15px] my-5">Search for your perfect property. Our virtual tours, and detailed home and neighbourhood descriptions will help you make your decision. Don’t forget to check the landlord policies before you book!.</h1>
 
        </div>
        
        <div className='h-[2px] w-[300px] mt-8'></div>
        <div className='lg:flex lg:flex-row flex-col gap-7'>
        <div className='flex-1'>
            <h3 className='font-bold'>We verify the properties</h3>
            <p className='lg:pt-[20px] my-5'>We show you real photos and videos of each property. We let you see inside drawers and cupboards, and show you every corner of the property.</p>
        </div>
          <div className='flex-1'>
            <h3 className='font-bold'>Detailed description</h3>
            <p className='lg:pt-[20px] my-5'>Your property visit is completely online, so you can revisit it as many times as you like. It’s just like being there.</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        
        
    </div>
  )
}

export default Easy