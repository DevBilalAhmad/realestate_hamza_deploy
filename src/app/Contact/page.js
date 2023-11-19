import React from 'react'
import Form from './component/Form'

const page = () => {
  return (
    <div>
      <div className='text-[#283618]'>
        <h1 className='lg:text-center lg:text-5xl text-4xl lg:mt-20 mt-5'>We would love to hear <br></br> from you!</h1>
        <p className='lg:text-center lg:text-2xl lg:px-96'>We're committed to providing prompt and friendly service to<br></br> all our guests and partners.</p>
      </div>
      <div className='flex justify-center mt-5 mb-40'>
        <img src='/e11.png'/>
      </div>
      <div className='lg:flex lg:flex-row flex flex-col bg-[#fefbf3]'>
        <div className='flex-1 lg:ml-28 lg:mr-10'>
          <h1 className='mt-12 lg:ml-8 lg:mr-60 pl-5'>Whether you have questions about our establishment, want to learn more about our services, or simply want to say hello, we’re here to help.</h1>
        </div>
        <div className='flex-1 mt-10 '>
          <Form/>
        </div>
      </div>
    </div>
  )
}

export default page
