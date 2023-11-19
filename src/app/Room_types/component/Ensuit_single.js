import React from 'react'
import Link from 'next/link'
const Ensuit_single = () => {
  return (
    <div>
       <div className='lg:flex lg:flex-row flex flex-col-reverse lg:my-20 '>
      <div className='flex-1 lg:ml-20 pl-5'>
        
        <h1 className='text-2xl lg:mb-3'>Single - Private Bathroom <br></br>Room size: 5-10 sq m</h1>
        <p>- Single size bed</p>
        <p>- Bills included</p>
        <p>- Desk & TV</p>
        <p>- Closet & Under Bed Storage</p>
        <p>- Only for 1 guest</p>
        <p>- Private bathroom located outside your room</p>
        <p>- Set of sheets and towels included</p>
        
        <p className='my-5'>Rates from 990 €/month</p>
        <div className='text-white relative pt-5 pb-[100px]'>
        <Link href="/">
        <button class="bg-[#283618] hover:bg-[#d8dcbc] text-white font-light py-2 px-4 border border-[#283618] rounded">
        Search Single Rooms</button>
        </Link>
        </div>
        
      </div>
      <div className='flex-1 mr-2'>
        <img src='/c11.png'/>
      </div>
      <div className='flex-1'>
        <img src='/c12.png'/>
      </div>
    </div>
    </div>
  )
}

export default Ensuit_single
