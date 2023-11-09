import React from 'react'

function FoundationNavBar() {
  return (
    <div className='bg-gray-50 h-[80px]'>
        <h1 className='pt-[15px] pr-[400px] text-gray-600'>
            <a href="/"><span className='mr-[10px] hover:underline hover:cursor-pointer'>HOME</span></a>
            <a href="/"><span className='mr-[10px] hover:underline hover:cursor-pointer'>  / GOGGLE AND GIGGLES HOME</span></a> 
            <a href="/about"><span className='mr-[10px] hover:underline hover:cursor-pointer'>   / ABOUT GOGGLE AND GIGGLES</span></a>
            <span className='text-gray-400'> / SUPPORT AND RESEARCH </span>
              
        </h1>
    </div>
  )
}

export default FoundationNavBar