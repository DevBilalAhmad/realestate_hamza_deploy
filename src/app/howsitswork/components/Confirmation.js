import React from 'react'

const Confirmation = () => {
  return (
    <div className='flex justify-center items-center  '>
        
        <div className='lg:w-[800px] lg:h-[400px] '>
        <div className='lg:flex lg:flex-row flex-col'> 
        <img src='/w4.png' className='w-[100px] h-[100px] lg:mr-10 mb-5'/>
        <div>
            <div className=''>
        <p className='text-[28px] justify-center font-bold' > 3. Confirmation</p>
        </div>
        <div>
        <h1 class="  mt-10 text-[15px]">As soon as the landlord accepts the booking, your payment method will automatically be charged. We will put you in contact with the landlord via email, so you can arrange the move-in time, key collection, and transfer any documentation that they requested in their policies.</h1>
        <h3 className='font-bold mt-5'>We are here to help</h3>
        </div>
        
        <div className='h-[2px] w-[300px] mt-8'></div>
        <div className='flex flex-row gap-7'>
        <div className='flex-1'>
            
            <p className='pt-[10px]'>Many of our tenants are moving to a new country for the first time. In Spotahome, we speak 8 European languages and deal with landlords every day.</p>
        </div>
          <div className='lg:flex-1'>
            
            <p className='pt-[10px]'></p>
        </div>
        </div>
        </div>
        </div>
        </div>
        
        
    </div>
  )
}

export default Confirmation
