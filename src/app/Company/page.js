import React from 'react'

const Page = () => {
  return (
    <div>
      <div className=' lg:mb-32'>
        <img src='/C.png'className='h-[250px] w-full'/>
      </div>
      <div className='text-left lg:mx-96 items-center justify-center lg:px-64 my-10 mx-5'>
        <h1 className='text-left text-2xl'> The Morning Hours Ltd. </h1>
        <p className='my-5 font-bold'>Registered No:<span className='font-normal'> 12845564</span></p>
        <p className='my-5 font-bold'>Registered office:<span className='font-normal'> 43 Rainsbrough close, London, United Kingdom, NW100TR</span></p>
        <p className='my-5 font-bold'>Landline#:<span className='font-normal'> 020 8090 2752</span></p>
      </div>
    </div>
  )
}

export default Page
