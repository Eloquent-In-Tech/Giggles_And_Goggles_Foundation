import React from 'react'

function Card() {
  return (
    <div className='flex flex-col-4 space-x-[30px] pt-[20px] ml-[50px] mb-[100px]'>
        <div className='h-[300px] w-[250px] bg-gray-300'>

            <h5 className='mt-[300px] bg-blue-500 py-3 hover:bg-blue-300 hover:cursor-pointer'>VIEW</h5>
        </div>
        <div className='h-[300px] w-[250px] bg-gray-300'>

            <h5 className='mt-[300px] bg-blue-500 py-3 hover:bg-blue-300 hover:cursor-pointer'>VIEW</h5>
        </div>
        <div className='h-[300px] w-[250px] bg-gray-300'>

            <h5 className='mt-[300px] bg-blue-500 py-3 hover:bg-blue-300 hover:cursor-pointer'>VIEW</h5>
        </div>
        <div className='h-[300px] w-[250px] bg-gray-300 '>

            <h5 className='mt-[300px] bg-blue-500 py-3 hover:bg-blue-300 hover:cursor-pointer'>VIEW</h5>
        </div>
    </div>
  )
}

export default Card