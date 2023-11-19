import React from 'react'
import Categories from './component/Categories'
import Single_rooms from './component/Single_rooms'
import Ensuit_single from './component/Ensuit_single'
import Double_room from './component/Double_room'
import Ensuit_double from './component/Ensuit_double'
import Ensuit from './component/Ensuit'
import Ensiut_large from './component/Ensiut_large'
import Ensuit_monumental from './component/Ensuit_monumental'
import Studio from './component/Studio'
import Apartment from './component/Apartment'
import Additional from './component/Additional'
const page = () => {
  return (
    <div className=''>
    <div className='text-[#283618] mx-5'>
      <h1 className='lg:text-5xl text-4xl lg:text-center lg:mt-10 lg:mb-5 mb-3'>Your room is <br></br>your sanctuary</h1>
      <p className='lg:text-2xl lg:text-center text-xl mb-10'>We offer real privacy inside spectacular shared homes.</p>
    </div>
    <div className='lg:flex lg:flex-row flex flex-col text-[#283618] lg:mx-32 mb-20 mx-5'>
      <div className='flex-1'>
      <img src='c2.png'/>
      <h1 className='lg:text-4xl text-3xl lg:text-center mt-5'>Privacy & Amenities</h1>
      <p className='lg:text-2xl lg:text-center mb-10'>Smart lock, smart TV, work station, closet <br></br>and high-speed wifi.</p>
      </div>
      <div className='flex-1'>
      <img src='c3.png'className=''/>
      <h1 className='lg:text-4xl text-3xl lg:text-center mt-5'>Services & Bills included</h1>
      <p className='lg:text-2xl lg:text-center mb-10 '>Set of sheets and towels, weekly cleaning<br></br> and online concierge.</p>
      </div>
    </div>
    <Categories/>
    <Single_rooms/>
    <Ensuit_single/>
    <Double_room/>
    <Ensuit_double/>
    <Ensuit/>
    <Ensiut_large/>
    <Ensuit_monumental/>
    <Studio/>
    <Apartment/>
    <Additional/>
    </div>
  )
}

export default page
