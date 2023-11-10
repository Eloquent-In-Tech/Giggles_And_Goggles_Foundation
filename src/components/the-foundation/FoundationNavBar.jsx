import React from 'react'

function FoundationNavBar() {
  return (
    <div className='bg-gray-50 h-[80px]'>
        <h1 className='pt-[15px] pr-[900px] text-gray-600'>
            <a href="/"><span className='mr-[10px] hover:underline hover:cursor-pointer'>HOME</span></a>
            <a href="/events"><span className='mr-[10px] hover:underline hover:cursor-pointer'>  / NEWS</span></a>
            <span className='text-gray-400'> / THE FOUNDATION </span>
              
        </h1>
    </div>
  )
}

export default FoundationNavBar