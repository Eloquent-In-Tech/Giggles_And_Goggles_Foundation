import React from 'react'

function SustainNavBar() {
  return (
    <div>
        <h1 className='pt-[15px] pr-[700px] text-gray-600'>
            <a href="/"><span className='mr-[10px] hover:underline hover:cursor-pointer'>HOME</span></a>
            <a href="/"><span className='mr-[10px] hover:underline hover:cursor-pointer'>  / HURLINGHAM HOME</span></a> 
            <a href="/about"><span className='mr-[10px] hover:underline hover:cursor-pointer'>   / ABOUT HURLINGHAM</span></a>
            <span className='text-gray-400'> / SUSTAINABILITY</span>
              
        </h1>
    </div>
  )
}

export default SustainNavBar