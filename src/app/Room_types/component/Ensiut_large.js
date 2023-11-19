import React from 'react'
import Link from 'next/link'
const Ensiut_large = () => {
  return (
    <div className='lg:flex lg:flex-row flex flex-col-reverse lg:my-20'>
      <div className='flex-1 lg:ml-24 pl-5'>
        
        <h1 className='text-2xl mb-3'>Suite Large<br></br>Room size: 20-25 sq m</h1>
        <p>- Double Size Bed</p>
        <p>- Bills included</p>
        <p>- Desk & TV</p>
        <p>- Closet & Under Bed Storage</p>
        <p>- Ideal for couples</p>
        <p>- En suite private bathroom</p>
        <p>- Set of sheets and towels included</p>
        <p>- Weekly cleaning included</p>
        <p className='my-5'>Rates from 1.290 €/month</p>
        <div className='text-white relative pt-5 pb-[100px]'>
        <Link href="/">
        <button class="bg-[#283618] hover:bg-[#d8dcbc] text-white font-light py-2 px-4 border border-[#283618] rounded">
        Search Suite Rooms</button>
        </Link>
        </div>
        
      </div>
      <div className='flex-1 mr-2'>
        <img src='/c19.png'/>
      </div>
      <div className='flex-1'>
        <img src='/c20.png'/>
      </div>
    </div>
  )
}

export default Ensiut_large