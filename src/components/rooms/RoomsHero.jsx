import React from 'react'
import hero from "../../assets/rooms/rooms.jpg"

function RoomsHero() {
  return (
    <div>
        <div>
            <img src={hero} alt="..." className='h-[450px] w-full  mb-[40px]'/>
        </div>
        <div>
            <h3 className=' text-4xl text-gray-600 font-bold mb-[20px] mt-[70px] tracking-widest'>ROOMS</h3>
            <h4 className='text-gray-600 mb-[50px] ml-[250px] mr-[250px]'> 
            The Hurlingham Club's venue space is fully customisable, a blank canvas upon which our 
            dedicated team will help you create your perfect event. 
            <br className='mb-[5px]' />
            The adjustable walls offer room configurations that offer access to the south facing 
            terraces, spaces flooded with natural light and an exclusive entrance and facilities for 
            guests.   <br className='mb-[5px]' />
            
            Please see the diagram below for a plan of our venue space<br className='mb-[25px]'/>
                <a href="#host-christmas" className=' text-blue-500 hover:underline hover:text-blue-400'>Please click here to enquire about hosting your event at The Hurlingham Club | events@hurlinghamclub.org.uk</a>
            </h4>
        </div>
    </div>
  )
}

export default RoomsHero