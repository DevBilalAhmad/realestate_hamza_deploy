import React from 'react'
// import PNarbar from './components/PNarbar'
import Easy from './components/Easy'
import Reserve from './components/Reserve'
import Confirmation from './components/Confirmation'
import Movein from './components/Movein'
import Guarantee from '../component/Guarantee'

const page = () => {
  return (
    <div className=''>
      <div className='flex justify-center lg:mt-28 mt-5'>
        <h1 className='lg:text-6xl text-5xl'>4 easy steps to<br></br> book your home</h1>
        
      </div>
      <div className='lg:flex lg:flex-row flex-col lg:mt-10'>
        <div className='flex-1'>
      <div className=' '>
        <img src='./w1.png'/>
      </div>
      </div>
      <div className='lg:flex-5 lg:pt-10 '>
      <div className=''>
        <img src='' />
      </div>
      </div>
          
      </div>
      <Easy/>
      <Reserve/>
      <Confirmation/>
      <Movein/>
      <Guarantee/>
    </div>
  )
}

export default page
