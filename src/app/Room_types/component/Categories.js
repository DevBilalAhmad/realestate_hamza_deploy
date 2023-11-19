import React from 'react'
import Link from 'next/link'
const Categories = () => {
  return (
    <div className='bg-[#fefbf3] '>
      <div>
      <h1 className='text-[#283618] lg:text-5xl lg:text-center lg:py-20 py-10 text-3xl'>There’s a place for everyone:<br></br> find your perfect room</h1>
      </div>
    <div className='lg:flex lg:flex-row flex flex-col lg:mx-24 lg:pb-24'>
      <div className='flex-1 text-center '>
        <img src='/c5.png'className='w-full'/>
        <h1 className='text-2xl my-5'>Single</h1>
        <p className='px-24 text-xs'>The perfect room for those solo dreamers looking for a shared premium home.</p>
        <p className='px-24 text-xs my-5'>Rates from 860€/month</p>
        <Link className='text-xs font-bold' href='/'>Explore details</Link>
        </div>
        <div className='flex-1 text-center'>
        <img src='/c6.png'className='w-full'/>
        <h1 className='text-2xl my-5'>Double</h1>
        <p className='px-24 text-xs'>For independent dreamers looking for large room in shared luxury apartments.</p>
        <p className='px-24 text-xs my-5'>Rates from 1.030 €/month</p>
        <Link className='text-xs font-bold' href='/'>Explore details</Link>
        </div>
        <div className='flex-1 text-center'>
        <img src='/c7.png'className='w-full'/>
        <h1 className='text-2xl my-5'>Suite</h1>
        <p className='px-24 text-xs'>The perfect accommodation for couples or those looking for complete independence in a premium shared space.</p>
        <p className='px-24 text-xs my-5'>Rates from 1.190€/month</p>
        <Link className='text-xs font-bold' href='/'>Explore details</Link>
        </div>
        <div className='flex-1 text-center'>
        <img src='/c8.png'className='w-full'/>
        <h1 className='text-2xl my-5'>Flat</h1>
        <p className='px-24 text-xs'>A complete private apartment with all perks and benefits of Badi Rooms.</p>
        <p className='px-24 text-xs my-5'>Rates from 2.170 €/month</p>
        <Link className='text-xs font-bold' href='/'>Explore details</Link>
        </div>
        </div>  
    </div>
  )
}

export default Categories
