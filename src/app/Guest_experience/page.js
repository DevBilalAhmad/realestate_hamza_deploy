import React from 'react'
import Link from 'next/link'
const Page = () => {
  return (
    <div className='lg:mx-32 mx-5'>
      <div className='lg:mt-20 my-5'>
        <h1 className='lg:text-4xl text-3xl text-[#283618]'>Unmatched comfort <br></br>with all-inclusive convenience</h1>
      </div>
      <div className='lg:flex lg:flex-row flex-col text-[#283618] items-center justify-center lg:mb-2 mb-[40px]'>
      <div className='flex flex-row'>
      <div className='flex-1 '>
        <img src='/e1.png'className='lg:w-[100%] pr-[20px] w-[100%] h-[100%] ' /> </div>
      <div className='flex-1 '>
      <img src='/e2.png'className='lg:w-[100%] pr-[20px] w-[100%] h-[100%]' /> </div></div>
      <div className='flex-1 items-center justify-center lg:my-20 lg:pr-10 lg:p-20'>
        <h1 className='text-2xl mt-[10px]'>Design & Location</h1>
        <p className='pt-3 lg:mt-5 lg:text-lg text-xs'> We only offer to our guests properties and rooms located in neighborhoods where we would like to live in.</p>
        <p className='pt-2 mb-5 lg:text-lg text-xs'>Our interior design team creates a top-class atmosphere where guests can both enjoy private areas and share experiences.</p>
        <div className='text-white relative pt-5 pb-[100px]'>
        <Link href="/Properties">
        <button className="bg-[#283618] hover:bg-[#d8dcbc] text-white font-light py-2 px-4 border border-[#283618] rounded">
        Discover our rooms</button>
        </Link>
        </div>
      </div>
      </div>
      <div className='lg:flex lg:flex-row flex flex-col-reverse text-[#283618] items-center justify-center lg:mb-10 mb-[40px]'>
      <div className='lg:flex lg:flex-row flex flex-col-reverse '>
      
      <div className='flex-1 items-center justify-center lg:my-20  '>
        <h1 className='text-2xl mt-[10px]'>Peace of mind</h1>
        <p className='pt-3  mt-5 lg:text-lg text-xs'> A clean and connected home, without any extra worries. The convenience of having everything taken care of.</p>
        <p className='pt-2 mb-5 lg:text-lg text-xs'>Clean set of sheets and towels, exhaustive weekly cleaning of common areas, full-speed wifi and bills, everything included.</p>
        <div className='text-white relative pt-5 pb-[100px]'>
        <Link href="/Properties">
        <button className="bg-[#283618] hover:bg-[#d8dcbc] text-white font-light py-2 px-4 border border-[#283618] rounded">Explore rooms</button>
        </Link>
        </div>
      </div>
      <div className=''>
      <img src='/e5.png'className='' /> </div>
      </div>
      </div>
      <div className='lg:flex lg:flex-row text-[#283618] items-center justify-center lg:mb-10 mb-[40px]'>
      <div className='lg:flex lg:flex-row flex flex-col'>
      <div className=''>
      <img src='/e6.png'className='' /> </div>
      <div className='flex-1 items-center justify-center lg:my-20 lg:pl-10 '>
        <h1 className='text-2xl mt-[10px]'>The heart of a home</h1>
        <p className='pt-3  mt-5 lg:text-lg text-xs'> All our homes offer a fully-equipped kitchen with all the necessary tools and appliances.</p>
        <p className='pt-2 mb-5 lg:text-lg text-xs'>Our guests can bring their culinary dreams to life, from the simplest of meals to the most elaborate of dishes.</p>
        <div className='text-white relative pt-5 pb-[100px]'>
        <Link href="/Properties">
        <button className="bg-[#283618] hover:bg-[#d8dcbc] text-white font-light py-2 px-4 border border-[#283618] rounded">Find your rooms</button>
        </Link>
        </div>
      </div>
      </div>
      </div>
      <div className='lg:flex lg:flex-row flex flex-col text-[#283618] items-center justify-center lg:mb-10 mb-[40px]'>
      <div className='lg:flex lg:flex-row flex flex-col-reverse'>
      
      <div className='flex-1 items-center justify-center lg:my-20  '>
        <h1 className='text-2xl mt-[10px]'>Creativity and inspiration</h1>
        <p className='pt-3  mt-5 lg:text-lg text-xs'> Our homes are thoughtfully designed for a hybrid or full remote working experience.</p>
        <p className='pt-2 mb-5 lg:text-lg text-xs'>All our rooms come with a comfortable work station, some of our homes have their own coworking space.</p>
        <div className='text-white relative pt-5 pb-[100px]'>
        <Link href="/Properties">
        <button className="bg-[#283618] hover:bg-[#d8dcbc] text-white font-light py-2 px-4 border border-[#283618] rounded">Find my rooms</button>
        </Link>
        </div>
      </div>
      <div className=''>
      <img src='/e7.png'className=' ' /> </div>
      </div>
      </div>
      <div className='lg:flex lg:flex-row flex flex-col text-[#283618] items-center justify-center lg:mb-10 mb-[40px]'>
      <div className='flex flex-row'>
      <div className='flex-1 '>
        <img src='/e8.png'className='lg:w-[100%] lg:pr-[20px] w-[100%] h-[100%] ' /> </div>
      <div className='flex-1 '>
      <img src='/e9.png'className='lg:w-[100%] lg:pr-[20px] w-[100%] h-[100%]' /> </div></div>
      <div className='flex-1 lg:items-center lg:justify-center lg:my-20 lg:pr-10 lg:p-20'>
        <h1 className='text-2xl mt-[10px]'>Natural light</h1>
        <p className='pt-3  mt-5 lg:text-lg text-xs'> At Badi, we seek homes where natural light is abundant.</p>
        <p className='pt-2 mb-5 lg:text-lg text-xs'>Our terraces and balconies offer amazing views of the city landscape.</p>
        <div className='text-white relative pt-5 pb-[100px]'>
        <Link href="/Properties">
        <button className="bg-[#283618] hover:bg-[#d8dcbc] text-white font-light py-2 px-4 border border-[#283618] rounded">
        Discover our homes</button>
        </Link>
        </div>
      </div>
      </div>
      <div className='lg:flex lg:flex-row flex flex-col text-[#283618] items-center justify-center lg:mb-32 mb-[40px]'>
      <div className='lg:flex lg:flex-row flex flex-col-reverse'>
      
      <div className='flex-1 items-center justify-center lg:my-20  '>
        <h1 className='text-2xl mt-[10px]'>Form and function</h1>
        <p className='pt-3  mt-5 lg:text-lg text-xs'> Although we offer weekly cleaning and additional laundry services, our homes are fully-equipped with functional bathrooms and laundry areas so our guests can take care of their daily routines with ease and comfort.</p>
        <div className='text-white relative pt-5 pb-[100px]'>
        <Link href="/Properties">
        <button className="bg-[#283618] hover:bg-[#d8dcbc] text-white font-light py-2 px-4 border border-[#283618] rounded">Find your Place</button>
        </Link>
        </div>
      </div>
      <div className=' '>
      <img src='/e8.png'className=' ' /> </div>
      </div>
      </div>
      <div className='lg:flex lg:flex-row flex flex-col-reverse '>
        <div className='flex-1'>
            <h1 className='text-3xl mb-3 '>Online Concierge <br></br>& Community Events</h1>
            <p className='lg:pr-96 mb-3 lg:text-lg text-xs'>Our concierge service is always available, just a click away, to make your life easier. Just remember that we don’t use bots, so from time to time we may need to sleep too :)</p>
            <p className='lg:pr-96 mb-3 lg:text-lg text-xs'>After your guided onboarding by a member of Badi’s team we’ll give you access to your “casa” communication channel where our guests and our team share information, news and recurrent events in the city.</p>
            <div className='text-white relative pt-5 pb-[100px]'>
             <Link href="/Properties">
             <button className="bg-[#283618] hover:bg-[#d8dcbc] text-white font-light py-2 px-4 border border-[#283618] rounded">I'm interested</button>
            </Link>
             </div>
        </div>
        <div className='flex-1 place-content-end'>
            <img src='/e10.png' className='conent-right'/>
        </div>
      </div>
    </div>
    
  )
}

export default Page
