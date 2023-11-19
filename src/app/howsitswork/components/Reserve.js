import React from 'react'

const Reserve = () => {
  return (
    <div className='flex justify-center items-center mb-20 '>
        
        <div className='lg:w-[800px] lg:h-[400px] '>
        <div className='lg:flex lg:flex-row flex-col'> 
        <img src='/w3.png' className='w-[100px] h-[100px] lg:mr-10 my-10'/>
        <div>
            <div className=''>
        <p className='text-[28px] justify-center font-bold' > 2. Reserve the property</p>
        </div>
        <div>
        <h1 class="  mt-10 text-[15px]">When you make a reservation, that property is blocked until the landlord responds to your request (for up to 24 hours). Once the landlord accepts, your payment method will automatically be charged. This is why we take your payment details at this stage.</h1>
        <h3 className='font-bold mt-5'>What am I paying for?</h3>
        </div>
        
        <div className='h-[2px] w-[300px] mt-8'></div>
        <div className='lg:flex lg:flex-row flex-col gap-7'>
        <div className='flex-1'>
            
            <p className='pt-[10px]'>First payment: As an extra security step, your first payment is made through Spotahome. We will transfer this money to the landlord 48 hours after you move in, unless you contact us with a problem.</p>
        </div>
          <div className='flex-1'>
            
            <p className='pt-[10px]'>Booking fee: To cover our verification and customer support teams.</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        
        
    </div>
  )
}

export default Reserve
