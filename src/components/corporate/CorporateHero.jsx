import React from 'react'
import hero from "../../assets/corporate/CorporateHero.jpg"

function CorporateHero() {
  return (
    <div>
        <div>
            <img src={hero} alt="..." className='h-[450px] w-full  mb-[40px]'/>
        </div>
        <div>
            <h3 className=' text-4xl text-gray-600 mb-[40px] mt-[70px]'>CORPORATE, CHARITY & AWARDS</h3>
            <h4 className='text-gray-600 mb-[50px] ml-[250px] mr-[250px]'> 
            The Hurlingham Club is an events and conference venue unlike any other in London. Set in 42 
            acres of magnificent grounds in Fulham, the Club combines traditional English charm and elegance with 
            modern venue facilities and services. The Club is one of the most sought after London venues for 
            conferences, exhibitions, award ceremonies and gala dinners as it is one of few in London that 
            can comfortable hold over 800 guests.  <br className='mb-[15px]' />
            The Hurlingham Club is 20 minutes from central London and is well served public transport. 
            The venue can also be accessed by car, boat or helicopter. VIPs feel at ease in this secluded venue, 
            with guest-list entry and on-site security as standard. <br className='mb-[15px]' />
            <br />
                <a href="/private-events-form" className=' text-blue-500 hover:underline hover:text-blue-400'>Please click here to enquire about hosting your event at The Hurlingham Club</a>
            </h4>
        </div>
    </div>
  )
}

export default CorporateHero