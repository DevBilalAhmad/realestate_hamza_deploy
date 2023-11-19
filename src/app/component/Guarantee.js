import React from 'react'

const Guarantee = () => {
  return (
    <div className='lg:mx-96 mx-10 my-28'>
      <h1 className='text-4xl mb-10'>Our Guarantees</h1>
      <div className='lg:flex lg:flex-row flex flex-col'>
        <div className='flex-1'>
            <img src='/g.png'/>
            <h1 className='text-xl mt-4 mb-3 '>Fraud protection</h1>
            <p className='lg:text-light pr-20 mb-10 '>All being well, we will transfer the money to the landlord 48 hours after you move in</p>
        </div>
        <div className='flex-1'>
            <img src='/g2.png'/>
            <h1 className='text-xl mt-4 mb-3'>Last minute cancellation</h1>
            <p className='lg:text-light pr-20 mb-10 '>If the landlord cancels at the last minute, we will relocate you and help with your hotel costs if needed</p>
        </div>
        <div className='flex-1'>
            <img src='/g3.png'/>
            <h1 className='text-xl mt-4 mb-3'>Checked by Roomflog</h1>
            <p className='lg:text-light pr-20 mb-10 '>We show you real photos and video of each property. We let you see inside drawers and cupboards and show you every corner of the property.</p>
        </div>
      </div>
      </div>
  )
}

export default Guarantee