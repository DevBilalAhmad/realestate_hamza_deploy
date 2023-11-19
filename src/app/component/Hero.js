import React from 'react'
import Seacrh from './Seacrh'
import Property_Feature from './Property_Feature'
import Testimonial from './Testimonial'
import Properties from './Properties';
import Guarantee from './Guarantee';
import Location from './Location';
import Team from './Team';
import Faq from './Faq';



const Hero = () => {
  return (
    <div>
      
      <div className=''>
          <div className='flex justify-center'> <h1 className=' font-serif text-center my-10 text-5xl lg:w-[700px] w-[600px] lg:h-3/4'>Find and book your ideal place for months</h1>
            </div>
        <p className='text-center'>Rent quality homes with all guarantees, 100% online</p>
            <Seacrh/>
        <div className='flex flex-row mx-0'>
        <div className='flex-1'>
      <div className=' '>
        <img src='./Home.png'/>
      </div>
      </div>
      <div className='lg:flex lg:justify-between  lg:pt-10 '>
      <div className=' '>
        <img src='./trustpilot.png'/>
      </div>
      </div>
          
      </div>
      </div>
    
    <Property_Feature/>
    <Testimonial/>
    <Properties/>
    <Guarantee/>
    <Location/>
    <Team/>
    <Faq/>
    
    </div>
  )
}

export default Hero
