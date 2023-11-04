import React from 'react'
import hero from "../../assets/christmas/christmasHero.jpg"
import ChristmasNavBar from './ChristmasNavBar'

function ChristmasHero() {
  return (
    <div>
      <ChristmasNavBar/>
        <div>
            <img src={hero} alt="..." className='h-[450px] w-full  mb-[40px]'/>
        </div>
        <div>
            <h3 className=' text-4xl text-gray-600 mb-[40px] mt-[70px] tracking-widest'>CHRISTMAS EVENTS</h3>
            <h4 className='text-gray-600 mb-[50px] ml-[250px] mr-[250px]'> 
            Every year, The Giggles and Gogglees Foundation decorates the traditional Clubhouse and stunning, 
            contemporary event space with twinkling lights, baubles and a towering Christmas tree.  
            <br className='mb-[5px]' />
            The Club offers bespoke Christmas packages, enabling you to create your festive event to 
            celebrate the season with colleagues or family. Our events team will tailor your event to 
            your requirements whether it is a drinks reception or an elaborate formal private dinner 
            and dancing, giving you and your guests a night to remember.  <br className='mb-[5px]' />
            <br />
                <a href="/private-events-form" className=' text-blue-500 hover:underline hover:text-blue-400'>Please click here to enquire about hosting your Christmas event at The Hurlingham Club </a>
            </h4>
        </div>
    </div>
  )
}

export default ChristmasHero