import React from 'react'
import Link from 'next/link'
const Ensuit_double = () => {
  return (
    <div className='bg-[#fefbf3]'>
    <div className='lg:flex lg:flex-row flex flex-col-reverse lg:py-20'>
   <div className='flex-1 lg:pl-20 pl-5'>
     
     <h1 className='text-2xl mb-3'>Double - Shared Bathroom<br></br>Room size: 10-25 sq m</h1>
     <p>- Double Size Bed</p>
     <p>- Bills included</p>
     <p>- Desk & TV</p>
     <p>- Closet & Under Bed Storage</p>
     <p>- Only for 1 guest</p>
     <p>- Ideal for 1 guest, couples accepted</p>
     <p>- Private bathroom located outside your room</p>
     <p>- Set of sheets and towels included</p>
     
     <p className='my-5'>Rates from 1.110 €/month</p>
     <div className='text-white relative pt-5 pb-[100px]'>
     <Link href="/Properties">
     <button class="bg-[#283618] hover:bg-[#d8dcbc] text-white font-light py-2 px-4 border border-[#283618] rounded">
     Search Double Rooms</button>
     </Link>
     </div>
     
   </div>
   <div className='flex-1 mr-2'>
     <img src='/c15.png'/>
   </div>
   <div className='flex-1'>
     <img src='/c16.png'/>
   </div>
 </div>
 </div>
  )
}

export default Ensuit_double