import React from 'react'
import Link from 'next/link'
const Double_room = () => {
  return (
    <div className='bg-[#fefbf3]'>
    <div className='lg:flex lg:flex-row flex flex-col-reverse lg:py-20 '>
   <div className='flex-1 lg:pl-20 pl-5'>
     
     <h1 className='text-2xl mb-3'>Double - Shared Bathroom<br></br>Room size: 10-25 sq m</h1>
     <p>- Double Size Bed</p>
     <p>- Bills included</p>
     <p>- Desk & TV</p>
     <p>- Closet & Under Bed Storage</p>
     <p>- Only for 1 guest</p>
     <p>- Shared Bathroom with max 2 guests</p>
     <p>- Set of sheets and towels included</p>
     <p>- Weekly cleaning included</p>
     
     <p className='my-5'>Rates from 1.030 €/month</p>
     <div className='text-white relative pt-5 pb-[100px]'>
     <Link href="/Properties">
     <button class="bg-[#283618] hover:bg-[#d8dcbc] text-white font-light py-2 px-4 border border-[#283618] rounded">
     Search Double Rooms</button>
     </Link>
     </div>
     
   </div>
   <div className='flex-1 mr-2'>
     <img src='/c13.png'/>
   </div>
   <div className='flex-1'>
     <img src='/c14.png'/>
   </div>
 </div>
 </div>
  )
}

export default Double_room