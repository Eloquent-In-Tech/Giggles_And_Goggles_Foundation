import React from 'react'
import hero from "../../assets/cleanAir/cleanAirHero.jpeg"

function CleanAirHero() {
  return (
      <div>
          <div>
              <img src={hero} alt="..." className='h-[450px] w-full  mb-[40px]'/>
          </div>
        <div>
            <h3 className=' text-4xl text-gray-600 font-bold mb-[20px] mt-[70px] tracking-widest'>CLEAN AIR NEIGHBOURHOODS PROGRAMME</h3>
            <h4 className='text-gray-600 mb-[50px] ml-[250px] mr-[250px] text-justify'> 
            The scheme will be trialled for 6-18 months and will gather data to use as the driver to decide whether cameras are kept 
            or removed from their current locations.
            <br className='mb-[20px]' />
            The programme is not without controversy but is being implemented by
            LBH&F with an aim to improve air quality in the local area. It does not prevent access to any 
            areas in the borough but does make traffic use prescribed (arterial) routes to stop out-of-borough 
            traffic using residential streets as cut-throughs. The programme is being policed by a series of 
            five cameras (marked with a camera icon on the map below) and seven monitoring devices 
            (marked with a white circle) west of Wandsworth Bridge Road. Once the scheme is up and running, 
            vehicles passing through one of the cameras could receive a fine of up to £130.  <br className='mb-[5px]' />
            <br className='mb-[25px]'/>
                <a href="#host-christmas" className=' text-blue-500 hover:underline hover:text-blue-400'>Please click here to enquire about hosting your event at The Hurlingham Club | events@hurlinghamclub.org.uk</a>
            </h4>
        </div>
    </div>
  )
}

export default CleanAirHero