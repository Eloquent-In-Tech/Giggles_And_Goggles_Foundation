import React from 'react'
import { HomeCardData } from "../../data/HomeCardData";

function HomeCard() {
  return (
    <div className='flex flex-col-4 space-x-[30px] pt-[20px] ml-[130px] mb-[100px]'>
        {HomeCardData.map((data, index)=>{
            return(
                <div key={index} className='h-[300px] w-[250px] mt-[20px]'>
                    <a href={data.link}>
                    <img src={data.image} alt="image" className='hover:cursor-pointer'/>
                    <h1 className=' text-black pt-[10px]' style={{ pointerEvents: 'none' }}>{data.title}</h1>
                    <p className='mt-[60px] bg-blue-500 py-3 hover:bg-blue-300 hover:cursor-pointer'>{data.view}</p>
                    </a>
                </div>
            )
        })}
    </div>
  )
}

export default HomeCard
