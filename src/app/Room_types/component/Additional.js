import React from 'react'
import Link from 'next/link'
const Additional = () => {
  return (
    <div className='bg-[#fff4f4] mt-20'>
    <div className='lg:flex lg:flex-row flex flex-col-reverse lg:py-20 '>
   <div className='flex-1 lg:pl-20 '>
     
     <h1 className='lg:text-4xl text-2xl mb-3'>There’s enough room for all :)</h1>
    
     <p className='my-5 lg:pr-96'>Pets are allowed in some of our Studios and One bedroom apartments, just let us know if you come with a four-legged companion in advance during your booking process. Contact our team for more information or additional questions.</p>
     <div className='text-white relative pt-5 pb-[100px]'>
     <Link href="/Contact">
     <button class="bg-[#283618] hover:bg-[#d8dcbc] text-white font-light py-2 px-4 border border-[#283618] rounded">
     Contact Us</button>
     </Link>
     </div>
     
   </div>
   <div className='flex-1 mr-2'>
     <img src='/c27.png'/>
   </div>
   
 </div>
 </div>
  )
}

export default Additional