import React from 'react'

function RoomNavBar() {
  return (
    <div className='bg-gray-50 h-[80px]'>
        <h1 className='pt-[15px] pr-[600px] text-gray-600'>
            <a href="/"><span className='mr-[10px] hover:underline hover:cursor-pointer'>HOME</span></a>
            <a href="/"><span className='mr-[10px] hover:underline hover:cursor-pointer'>  / HURLINGHAM HOME</span></a> 
            <a href="/events"><span className='mr-[10px] hover:underline hover:cursor-pointer'>  / HURLINGHAM PRIVATE EVENTS</span></a>
            <span className='text-gray-400'> / ROOMS </span>
              
        </h1>
    </div>
  )
}

export default RoomNavBar