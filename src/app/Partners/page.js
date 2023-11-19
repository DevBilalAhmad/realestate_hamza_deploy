import React from 'react'
import Link from 'next/link';
const page = () => {
  return (
    <div className='lg:mx-28 mx-auto'>
      <div className='text-[#283618]'>
        <h1 className='lg:text-center leading-9 lg:text-5xl mt-20 mb-[10px] text-left text-[36px] font-serif  '>
        Become a Roomflog <br></br>Real Estate Partner
        </h1>
        <p className='lg:text-center lg:text-2xl text-[20px] text-left mb-[30px]  mt-3'>Stress-free rental experience and predictable cashflow.</p>
      </div>
      <div className='flex items-center justify-center '>
      <img src='/room.png' className=' lg:w-full w-full lg:h-[550px] h-[300px] '/>
      </div>
      <div className='text-[#283618] lg:text-center text-left'>
        <h1 className=' font-medium pt-[50px] lg:text-3xl  text-2xl '>
        We are industry leaders in flexible and shared living solutions. We do the job so you can relax.
        </h1>

        <div className='text-white relative pt-5 pb-[100px]'>
        <Link href="/Team">
        <button className="bg-[#283618] hover:bg-[#d8dcbc] text-white font-light py-2 px-4 border border-[#283618] rounded">
        Meet our team</button>
        </Link>
        </div>
        
      </div>
      <div className='lg:flex lg:flex-row flex flex-col text-[#283618] pb-[100px]'>
        <div className='flex-1 mr-5'>
            <h1 className='text-2xl font-serif pb-3'> 100% Reliable Income</h1>
            <p> Never again worry about tenants not paying the rent or your apartments being empty. With Roomflog you count with a constant and reliable stream of income. </p>
        </div>
        <div className='flex-1 mr-5'>
            <h1 className='text-2xl font-serif pb-3'>Property leasing for multiple properties</h1>
            <p> If you own multiple properties, Roomflog can manage and lease them all efficiently and profitably. </p>
        </div>
        <div className='flex-1 mr-5'>
            <h1 className='text-2xl font-serif pb-3'>Long term contracts</h1>
            <p>With Roomflog, you can sign leases for up to 10 years, so you'll never have to worry about finding new tenants.</p>
        </div>
      </div>
      <div className='lg:flex lg:flex-row flex flex-col text-[#283618] pb-[100px]'>
        <div className='flex-1 mr-5'>
            <h1 className='text-2xl font-serif pb-3'> Professional Maintenance</h1>
            <p> Roomflog will take care of the cleaning and maintenance of your apartments on a weekly basis, ensuring they are kept in perfect condition. </p>
        </div>
        <div className='flex-1 mr-5'>
            <h1 className='text-2xl font-serif pb-3'>No more tenant complaints</h1>
            <p> Roomflog will find and communicate with tenants directly and promptly, so you'll never have to deal with tenant complaints. </p>
        </div>
        <div className='flex-1 mr-5'>
            <h1 className='text-2xl font-serif pb-3'>Outstanding design</h1>
            <p>Roomflog ensures that your apartments have exceptional design and impeccable presentation, making them attractive to even the most demanding tenants.</p>
        </div>
      </div>
      <div className='lg:flex lg:flex-row flex flex-col text-[#283618] items-center justify-center mb-32'>
      <div className='flex flex-row'>
      <div className='lg:flex-1 lg:mr-1 mr-1 '>
        <img src='/before.png'className='lg:w-[90%] lg:h-[90%] w-[100%] h-[100%] ' /> </div>
      <div className='lg:flex-1 lg:mr-1 '>
      <img src='/after.png'className='lg:w-[90%] lg:h-[90%] w-[100%] h-[100%]' /> </div></div>
      <div className='flex-1 items-center justify-center my-20 mr-1'>
        <h1 className='text-2xl'>Before & After</h1>
        <p className='pt-3'> We focus on offering the best quality standards for our tenants.</p>
        <p className='pt-2'>That is why we invest in your asset. We adapt, design and furnish the spaces, contributing to the appreciation of your asset.</p>
      </div>
      </div>
      <div className=' text-[#283618] pb-[100px] lg:flex lg:flex-row flex flex-col-reverse'>
      <div className='flex-1 items-center justify-center my-20'>
        <h1 className='text-2xl'>Creativity</h1>
        <p className='pt-3'> Our interior design team has carefully crafted a top-class atmosphere that strikes the perfect balance between style and substance, ensuring you get the best out of your property.</p>
      </div>
      <div className='flex flex-row'>
      <div className='flex-1 mr-1'>
        <img src='/creative.png' className='lg:w-[90%] lg:h-[90%] w-[100%] h-[100%] '/> </div>
      <div className='flex-1 mr-1'>
      <img src='/creatives.png' className='lg:w-[90%] lg:h-[90%] w-[100%] h-[100%] '/> </div>
      </div>
      </div>
      
    </div>
  )
}

export default page
