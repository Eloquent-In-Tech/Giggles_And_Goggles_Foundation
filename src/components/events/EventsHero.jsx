import React from 'react'
import hero from "../../assets/events/eventsHero.png"
import EventsNavBar from './EventsNavBar'

function EventsHero() {
  return (
    <div>
      <EventsNavBar/>
        <div>
            <img src={hero} alt="..." className='h-[450px] w-full  mb-[40px] p-[20px]'/>
        </div>
        <div>
            <h3 className=' text-4xl text-gray-600 mb-[10px]'>WELCOME TO EVENTS</h3>
            <h4 className='text-gray-600 mb-[50px] ml-[250px] mr-[250px]'> 
            A hidden gem… a quintessentially British venue in the heart of London. <br /> <br />
            Set in 42 acres of landscaped grounds, with an elegant Georgian-style Clubhouse and south-facing 
            terraces overlooking the River Thames, The Goggle and Giggles Foundation is one of the world's most exclusive 
            private members' clubs. <br className='mb-[15px]'/> 
            The Club is available for private hire to members and non-members for all types of events, from small
            meetings to large conferences, intimate weddings to elaborate charity galas and award ceremonies. 
            Our experienced events management team will work with you, providing you with a fully tailored, 
            bespoke experience at every stage of the planning process to create your event. <br className='mb-[15px]' />
            With lofty ceilings and large windows that flood the rooms with sunlight, period features and stunning 
            gardens, The Hurlingham Club provides a unique venue, catering for between 30 and 1200 guests. <br />
            <a href="#hire-space" className=' text-blue-500 hover:underline hover:text-blue-300'>Please click here to enquire about hosting your event at The Hurlingham Club</a>
            </h4>
        </div>
    </div>
  )
}

export default EventsHero