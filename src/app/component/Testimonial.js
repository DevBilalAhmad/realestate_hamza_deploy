import React from 'react'
// 
const Testimonial = () => {
  return (
    <div className=' bg-[#fefbf3] w-full lg:h-[600px] h-[700px] '>
       
      <div className='lg:flex lg:flex-row flex flex-col '>
    
    <div className="flex-1  lg:mt-32 mt-12 ">
      <div className="absolute items-center justify-center lg:pl-[440px] ">
        <img src="./pic.png" />
      </div>
      </div>
   <div className='flex-1 lg:pt-[20px] lg:mt-32 pt-96 '>
      <img src='./sign.png '/>
  <div className='  lg:pt-[40px] pt-5 w-[500px] '>

  <h1 class="font-bold  text-[25px]">I found a nice room and within minutes of sending my booking request I was accepted.</h1>
  <p class="lg:pt-[70px] pt-5">- Francesco, Barcelona</p>
  </div>
  </div>
  </div>
  
    </div>
  )
}

export default Testimonial
