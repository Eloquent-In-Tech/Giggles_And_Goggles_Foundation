import React from 'react'
import hero from "../../assets/Swim/news1.jpg"
import EventsNavBar from './NeewsNavBar'

function EventsHero() {
  return (
    <div>
      <EventsNavBar/>
        <div>
            <img src={hero} alt="..." className='h-[450px] w-full  mb-[40px] p-[20px]'/>
        </div>
        <div>
            <h3 className=' text-4xl text-blue-600 mb-[30px]'>KEEP UP TO DATE WITH SOME OF OUR 
            LATEST PRESS AND MEDIA COVERAGE</h3>
            
        </div>
    </div>
  )
}

export default EventsHero