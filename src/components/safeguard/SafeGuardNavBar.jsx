import React from 'react'

function SafeGuardNavBar() {
  return (
    <div>
        <h1 className='pt-[15px] pr-[400px] text-gray-600'>
            <a href="/"><span className='mr-[10px] hover:underline hover:cursor-pointer'>HOME</span></a>
            <a href="/"><span className='mr-[10px] hover:underline hover:cursor-pointer'>  / HURLINGHAM HOME</span></a> 
            <a href="/about"><span className='mr-[10px] hover:underline hover:cursor-pointer'>   / ABOUT HURLINGHAM</span></a>
            <span className='text-gray-400'> / SAFEGUARDING HURLINGHAM</span>
              
        </h1>
    </div>
  )
}

export default SafeGuardNavBar