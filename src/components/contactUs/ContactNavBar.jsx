import React from 'react'

function ContactNavBar() {
  return (
    <div className='bg-gray-50 h-[80px]'>
        <h1 className='pt-[15px] pr-[800px] text-gray-600'>
            <a href="/"><span className='mr-[30px] hover:underline hover:cursor-pointer'>HOME</span></a>
            <a href="/"><span className='mr-[30px] hover:underline hover:cursor-pointer'>  / HURLINGHAM HOME</span></a> 
           <span className='mr-[10px] text-gray-500'>  / CONTACT THE CLUB</span>
            
              
        </h1>
    </div>
  )
}

export default ContactNavBar