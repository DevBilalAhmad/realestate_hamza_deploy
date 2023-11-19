"use client"
import React from 'react'
import Featureblock from './Featureblock';
import { BsFillHouseFill } from 'react-icons/bs';
import { MdOutlineApartment } from 'react-icons/md';
import { MdHolidayVillage } from 'react-icons/md';
import { HiOfficeBuilding } from 'react-icons/hi';

const Property_Feature = () => {
  return (
    <div>
      
    <section className=' w-screen' >

    <div className='flex flex-col items-center justify-center lg:h-[700px]'>
        <div>
            {/* heading */}
            <h1 className='font-bold text-2xl'>
                Featured property Types
            </h1>
            <p className='text-center'>Find all Type of Property</p>
        </div>
        <div className='lg:flex lg:gap-x-14 '>
            {/* cards sesion */}

            <Featureblock icon={<BsFillHouseFill/>}  Propertytype="Family House" NumberofProprty="125"/>
            <Featureblock icon={<MdHolidayVillage/>}  Propertytype="House and vila" NumberofProprty="155"/>
            <Featureblock icon={<MdOutlineApartment/>}  Propertytype="Apartments" NumberofProprty="300"/>
            <Featureblock icon={<HiOfficeBuilding/>}  Propertytype="Office & Studio" NumberofProprty="80"/>
            <Featureblock icon={<HiOfficeBuilding/>}  Propertytype="villa & Condo" NumberofProprty="80"/>
          
        </div>
      
    </div>
    </section>
    
    </div>
  )
}

export default Property_Feature
