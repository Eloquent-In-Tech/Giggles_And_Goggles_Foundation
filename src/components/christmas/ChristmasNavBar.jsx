import React from 'react'

function ChristmasNavBar() {
  return (
    <div className='bg-gray-50 h-[80px]'>
        <h1 className='pt-[15px] pr-[600px] text-gray-600'>
            <a href="/"><span className='mr-[10px] hover:underline hover:cursor-pointer'>HOME</span></a>
            <a href="/"><span className='mr-[10px] hover:underline hover:cursor-pointer'>  / GIGGLES AND GOGGLES HOME</span></a> 
            <a href="/events"><span className='mr-[10px] hover:underline hover:cursor-pointer'>  /  PRIVATE EVENTS</span></a>
            <span className='text-gray-400'> / CHRISTMAS </span>
              
        </h1>
    </div>
  )
}

export default ChristmasNavBar