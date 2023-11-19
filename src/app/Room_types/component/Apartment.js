import React from 'react'
import Link from 'next/link'
const Apartment = () => {
  return (
    <div className='bg-[#fefbf3]'>
    <div className='lg:flex lg:flex-row flex flex-col-reverse lg:py-20 '>
   <div className='flex-1 lg:pl-20 pl-5'>
     
     <h1 className='text-2xl mb-3'>Apartment<br></br>Room size: +60 sq m</h1>
     <p>- 1-2 Bedroom apartment</p>
     <p>- Max privacy – entire property</p>
     <p>- Fully-equipped Kitchen</p>
     <p>- Bills included</p>
     <p>- Desk & TV</p>
     <p>- Multiple closets and large storage space</p>
     <p>- Ideal for couples</p>
     <p>- Set of sheets and towels included</p>
     
     <p className='my-5'>Rates from 2.340 €/month</p>
     <div className='text-white relative pt-5 pb-[100px]'>
     <Link href="/">
     <button class="bg-[#283618] hover:bg-[#d8dcbc] text-white font-light py-2 px-4 border border-[#283618] rounded">
     Search Apartment</button>
     </Link>
     </div>
     
   </div>
   <div className='flex-1 mr-2'>
     <img src='/c25.png'/>
   </div>
   <div className='flex-1'>
     <img src='/c26.png'/>
   </div>
 </div>
 </div>
  )
}

export default Apartment