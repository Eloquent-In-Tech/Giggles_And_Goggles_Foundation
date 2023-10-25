import React from 'react'
import hero from "../../assets/summer/summerHero.jpg"


function SummerHero() {
  return (
    <div>
        <div>
        <div>
            <img src={hero} alt="..." className='h-[450px] w-full  mb-[40px]'/>
        </div>
        <div>
            <h3 className=' text-4xl text-gray-600 mb-[40px] mt-[70px] tracking-widest'>SUMMER EVENTS</h3>
            <h4 className='text-gray-600 mb-[50px] ml-[250px] mr-[250px]'> 
            The outdoor space available at the venue enables guests to spill out onto beautiful terraces
            during the summer months for reception drinks, lavish barbecues or to simply take in the views 
            of the landscaped gardens.
            <br className='mb-[5px]' />
            Summer events at The Hurlingham Club make use Club's stunning south facing terraces with 
            glorious sunsets and views across the River Thames. Our dedicated events team offers bespoke
            packages that include strawberries and Pimms, Aperol spritz at the outdoor bar or arrival to
            the Club by boat.  <br className='mb-[5px]' />
            <br />
            The Hurlingham Club feels like a summer country escape in the heart of Fulham, catering for up to 1200 guests. <br className='mb-[45px]'/>
                <a href="/private-events-form" className=' text-blue-500 hover:underline hover:text-blue-400'>Please click here to enquire about hosting your Christmas event at The Hurlingham Club </a>
            </h4>
        </div>
    </div>
    </div>
  )
}

export default SummerHero