import React from 'react'

function AboutNavBar() {
  return (
    <div>
        <h1 className='pt-[15px] pr-[600px] text-gray-500'>
            <a href="/"><span className='mr-[40px] hover:underline hover:cursor-pointer'>HOME</span></a>
            <a href="/"><span className='mr-[30px] hover:underline hover:cursor-pointer'>  / GOGGLE AND GIGGLES HOME</span></a> 
            <span className=' text-gray-400'>   / ABOUT GOGGLE AND GIGGLES </span>
              
        </h1>
    </div>
  )
}

export default AboutNavBar