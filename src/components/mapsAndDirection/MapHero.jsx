import React from 'react'
import hero from "../../assets/mapsAndDirections/map.jpg"
import Maps from './Maps'
import logo from '../../assets/Hurlingham_logo.png'

function MapHero() {
  return (
    <div>
        <div>
        <div>
            <img src={hero} alt="..." className='h-[450px] w-full  mb-[px]'/>
            
        </div>
        <h2 className='text-4xl mt-[70px] mb-[70px]'> HURLINGHAM MAP & DIRECTIONS</h2>
        <Maps/>
        
        <div>
          <h1 className='mr-[700px]'>The Hurlingham Club, Ranelagh Gardens, London, SW6 3PR</h1>
            <h3 className=' text-4xl text-gray-600 font-bold mb-[20px] mt-[70px] tracking-widest'>PEDESTRIAN ACCESS</h3>
              <h4 className='text-gray-600 mb-[150px] ml-[250px] mr-[250px]'> 
                The main gate on Ranelagh Gardens and the back gate on Broomhouse Lane provide pedestrian access to the Club.
              <br className='mb-[5px]' />
              <h3 className=' text-4xl text-gray-600 font-bold mb-[20px] mt-[70px] tracking-widest'>UNDERGROUND</h3>
              Connected by the District Line to the West End and the City, the Club is 0.3 miles from Putney 
              Bridge Tube station, at the eastern end of Ranelagh Gardens. Turn left out of the station and 
              left again under the bridge. The Club is straight ahead.   <br className='mb-[5px]' />

              <h3 className=' text-4xl text-gray-600 font-bold mb-[20px] mt-[70px] tracking-widest'>RAIL</h3>
              The Hurlingham Club is 1.1 miles from Putney train station and the Club can be reached by walking 
              over Putney Bridge, or taking a bus. Bus routes from the station that stop near the Club 
              are 39, 85, 93, 14 and 430.   <br className='mb-[5px]' />

              <h3 className=' text-4xl text-gray-600 font-bold mb-[20px] mt-[70px] tracking-widest'>CAR</h3>
              The Hurlingham Club is situated at the east end of Ranelagh Gardens, at the southern end of Napier 
              Avenue. Sat Nav users should key in ‘Napier Avenue’ due to the restricted access under the bridge 
              by Putney Bridge station. Guest parking is limited and incurs a charge of £20. 
              <br className='mb-[5px]' />
              <h1 className=' font-extralight'>
                Please note, the Clean Air Neighbourhood Programme when driving throughout the borough around 
                the Club. Full details can be found  <span className=' text-blue-500 hover:underline hover:text-blue-400'>here </span>. From Sunday 23 July, Wandsworth Bridge will be closed 
                for 10 weeks. Please use an alternative route to reach the Club. More information can be found 
                on the <span className=' text-blue-500 hover:underline hover:text-blue-400'>Council's website.</span> 
              </h1>
              <h3 className=' text-4xl text-gray-600 font-bold mb-[20px] mt-[70px] tracking-widest'>ACCESSIBILITY</h3>
              The Hurlingham Club is committed to ensuring that its grounds are welcoming and equally accessible 
              to everyone. There are several entrances around the Club that cater for those using wheelchairs or 
              with limited mobility. <br className='mb-[5px]' />
            </h4>
        </div>
        <div className="h-[140px] w-[140px] bg-gray-100 rounded-full absolute top-[2335px] left-[600px]">
            <img className=" bottom-[5px] left-[200px] w-[250px]  p-[20px]" src={logo} alt="logo" />
        </div>
    </div>
    </div>
  )
}

export default MapHero