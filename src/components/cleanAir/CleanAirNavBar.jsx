import React from 'react'

function CleanAirNavBar() {
  return (
    <div className='bg-gray-50 h-[80px]'>
        <h1 className='pt-[15px] pr-[600px] text-gray-600'>
            <a href="/"><span className='mr-[10px] hover:underline hover:cursor-pointer'>HOME</span></a>
            <a href="/"><span className='mr-[10px] hover:underline hover:cursor-pointer'>  / HURLINGHAM HOME</span></a> 
            <a href="/contact-us"><span className='mr-[10px] hover:underline hover:cursor-pointer'>  / CONTACT THE CLUB</span></a>
            <span className='text-gray-400'> / CLEAN AIR NEIGHBOURHOODS PROGRAMME </span>
              
        </h1>
    </div>
  )
}

export default CleanAirNavBar