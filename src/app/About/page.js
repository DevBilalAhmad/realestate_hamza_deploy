import React from 'react'

const page = () => {
  return (
    <div className=''>
   
   <div class="absolute">
      <h1 class="text-white font-semibold lg:text-2xl text-center py-14  lg:px-96 lg:py-80"> SPOTAHOME IS A MID- TO LONG-TERM ONLINE BOOKING PLATFORM FOR HOME RENTALS </h1> </div>
        <img src='/About.jpg'className='w-full sm-h-[300px]'/>
    <div className='lg:mx-96 mx-5'>
    <div className=''>
        <h1 className='font-bold text-center pt-[70px] pb-8'>WHAT MAKES ROOMFLOG DIFFERENT?</h1>
        <div className='text-left items-center justify-between lg:px-60 '>
        <p >Roomflog follows a similar business model to online holiday rentals, but instead focuses on finding you a home for stays of a minimum of 30 days, dependent on city regulations. We are an 100% online booking platform, offering an exhaustive list of apartments, rooms, studios, and student residences. We’re for anyone, regardless of age or professional status.</p>
        <p className='pt-[50px]'>The Roomflog experience removes the need for in-person viewings, saving both tenants and landlords time and expense. We show you real photos and high-quality videos of the property and neighbourhood. We also design floor plans and write detailed descriptions about the home and local area.</p>    
        <p className='pt-[50px] pb-36' >We play a pivotal role in eliminating communication and language barriers between local landlords and foreign tenants by offering excellent customer support in several languages on both sides. We currently have more than 150 employees of different nationalities.</p>
        </div>
        </div>
        <div>
            <h1 className='text-center font-bold pb-[40px]'>HOW DID EVERYTHING START?</h1>
            <div className=' pb-8'>
            <img src='/human.jpg' />
            </div>
        </div>
        <div>
            <p className='text-left lg:px-60'>This is the story of an international startup from its beginnings. Before creating Roomflog, our four founders, led by Alejandro Artacho, had lived and traveled all over the world. They knew the hurdles and pitfalls that you need to navigate to rent a home, wherever you are.</p>
            <p className='text-left lg:px-60 pt-10'>So they formulated a question: how easy should renting a home be?</p>
            <p className='text-left lg:px-60 pt-10'>They realised two things:</p>
            <ul className='text-left lg:px-60 pt-10'>
                <li> The housing sector was dominated by classified websites, local real estate agencies, and platforms aimed at holiday or short-term rentals.</li>
                <li> Customers visiting holiday rental platforms were happy to rent accommodation without visiting the properties – in fact, they were happy to do everything online</li>
            </ul>
            <p className='text-left lg:px-60 pt-10 pb-20'>The answer: renting a home should be as easy as buying your shopping online. And so, in March 2014 in Madrid Roomflog was born.</p>
        </div>
        <div>
            <h1 className='font-bold text-center text-xl'>OUR MISSION & VALUES</h1>
        </div>
        <div class="lg:flex lg:flex-row flex-col  lg:pr-[100px] pt-[50px] gap-10">
        <div className="flex-1 pb-10 ">
        <h3 className="text-xl">MISSION</h3>
        <p className="text-left pb-10 pt-10">To reinvent real estate. Make it transparent, instant, and exciting. Loved at last. Unreal estate.</p>
        <p className='text-left pb-10'>Our dream is to make renting as simple and fast as getting a coffee. We work to teleport people into homes anywhere, so they can live the experience without being there. We connect with them. We bring the reality to them.</p>
        </div>
      <div className="flex-1  ">
        <h3 className="text-xl ">VALUES</h3>
        <p className="text-left pb-10 pt-10 ">How do we do it?</p>
        <ol className="pl-[20px]">
          <li className="">We live for the customer</li>
          <li className="">We are a team</li>
          <li className="">We trust in trust</li>
          <li className="">We Innovate to win</li>
          <li className="">We are decisive</li>
          <li className="">We embrace simplicity</li>
          <li className="">We live for the mission</li>
          <li className="">We get more from less</li>
        </ol>
      </div>
    
    </div>
    </div>
    <div className='pt-[50px]'>
        <img src='/destop.jpg' />
    </div>
    
     </div>
    
    
    
  )
}

export default page
