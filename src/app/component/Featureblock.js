import React from 'react'
// import { BsFillHouseFill } from 'react-icons/bs';


const Featureblock = ({icon, Propertytype, NumberofProprty }) => {
    return (
        <div className='flex flex-col justify-center gap-y-3 w-[300px] h-[300px]  gap-x-5  lg:px-5 lg:py-5 my-10  items-center  bg-white border border-gray-200 rounded-lg shadow'>
            <div>{icon}</div>
            <div >{Propertytype}</div>
            <div>{NumberofProprty} Property</div>

        </div>
    )
}

export default Featureblock