import React from 'react'

function DonateNavBar() {
  return (
    <div className='bg-gray-50 h-[80px]'>
        <h1 className='pt-[15px] pr-[900px] text-gray-600'>
            <a href="/"><span className='mr-[10px] hover:underline hover:cursor-pointer'>HOME</span></a>
            <a href="/contact-us"><span className='mr-[10px] hover:underline hover:cursor-pointer'>  / CONTACT US</span></a>
            <span className='text-gray-400'> / DONATE </span>
              
        </h1>
    </div>
  )
}

export default DonateNavBar