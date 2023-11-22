import React from 'react'
import Link from 'next/link';
const Properties = () => {
  return (
    <div>
      <div>
      <h1 className='text-center text-4xl my-10 text-[#283618]'>Discover Our Recent Properties</h1>
    </div>
    <div className='lg:flex lg:flex-row flex flex-col items-center justify-center lg:mx-24 text-[#283618]'>
      <div className='flex-1'>
        <img src='/r1.png'/>
        <h1>Double Room</h1>
        <div className="flex flex-row">
                    <div className="flex-1 ">Shared apartment</div><span>|</span> 
                    <div className="flex-1">4 bedrooms </div>
                </div>
                <div className="price">From <em>860 €</em> month</div>
                <Link href="/Team"><button>View More</button></Link>
      </div>
      <div>
      </div>
    
    <div className='flex-1'>
        <img src='/r1.png'/>
        <h1>Double Room</h1>
        <div className="flex flex-row">
                    <div className="flex-1 ">Shared apartment</div><span>|</span> 
                    <div className="flex-1 ">4 bedrooms </div>
                </div>
                <div className="price">From <em>860 €</em> month</div>
                <Link href="/Team"><button>View More</button></Link>
      </div>
      <div className='flex-1'>
        <img src='/r1.png'/>
        <h1>Double Room</h1>
        <div className="flex flex-row ">
                    <div className="flex-1 ">Shared apartment</div><span>|</span> 
                    <div className="flex-1 ">4 bedrooms </div>
                </div>
                <div className="price">From <em>860 €</em> month</div>
                <Link href="/Team"><button>View More</button></Link>
      </div>
      <div className='flex-1'>
        <img src='/r1.png'/>
        <h1>Double Room</h1>
        <div className="flex flex-row ">
                    <div className="flex-1 ">Shared apartment</div><span>|</span> 
                    <div className="flex-1 ">4 bedrooms </div>
                </div>
                <div className="price">From <em>860 €</em> month</div>
                <Link href="/Team"><button>View More</button></Link>
      </div>
      </div>
      <div className='text-white relative pt-10 pb-[100px] text-center'>
        <Link href="/Properties">
        <button class="bg-[#283618] hover:bg-[#d8dcbc] text-white font-light py-2 px-4 border border-[#283618] rounded">
        Show me more</button>
        </Link>
        </div>
    </div>
  )
}

export default Properties
