import React from 'react'

function WeddingNavBar() {
  return (
    <div className='bg-gray-50 h-[80px]'>
        <h1 className='pt-[15px] pr-[700px] text-gray-600'>
            <a href="/"><span className='mr-[10px] hover:underline hover:cursor-pointer'>HOME</span></a>
            <a href="/"><span className='mr-[10px] hover:underline hover:cursor-pointer'>  / GOGGLE AND GIGGLES HOME</span></a> 
            <a href="/events"><span className='mr-[10px] hover:underline hover:cursor-pointer'>  / PRIVATE EVENTS</span></a>
            <span className='text-gray-400'> / WEDDINGS </span>
              
        </h1>
    </div>
  )
}

export default WeddingNavBar