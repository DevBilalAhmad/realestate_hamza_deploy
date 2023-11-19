import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div>
        <h1>Lovely furnished Beautiful Ensuit Double ROOM JUST 865pcm</h1>
        <div className='flex flex-row'>
            <div className='flex-1'>
            <p>Hendon, London</p>
            </div>
            <div className='flex-1'>
            <p>£865.00pm</p>
            </div>
        </div>
        <div className='flex flex-row'>
            <div className='flex-1'>
            <h1>Posted</h1>
            <h1>17 day ago</h1>
            </div>
            <div className='flex-1'>
            <h1>Seller Type</h1>
            <h1>Agency</h1>
            </div>
            <div className='flex-1'>
                <h1>Date Available</h1>
                <h1>17 Novenmber 2018</h1>
            </div>
            <div className='flex-1'>
            <h1>Property Type</h1>
            <h1>House</h1>
            </div>
            <div className='flex-1'>
            <h1>Room Type</h1>
            <h1>Double room</h1>
            </div>
        </div>
        <div>
            <h1 className='text-3xl'>Description</h1>
            <p>write description here...............</p>
            <h1>Ad ID: .......</h1>

        </div>
        <div>
            <span>Hamza</span>
            <div className='flex flex-row '>
            <div className='flex-1'>
            <p>posting 3 year ago</p></div>
            <div className='flex-1'>
            <Link href=''>See all ad</Link></div></div>
        </div>
    <div>
        <h1>Contact <span>Hamza</span></h1>
        
        <h2>0765678997</h2>
        <span></span>
    </div>
    <div>
    <Link href="">
        <button className="bg-[#283618] hover:bg-[#d8dcbc] text-white font-light py-2 px-32 border border-[#283618] rounded">
        Email</button>
        </Link>
    </div>
    </div>
  )
}

export default page