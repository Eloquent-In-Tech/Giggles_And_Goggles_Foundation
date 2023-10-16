import React from 'react'
import { WeddingCardData } from '../../data/WeddingData'
import awards from "../../assets/weddings/awards.png"


function WeddingCard() {
  return (
    <div>
        <div className='flex flex-col space-x-[50px] pt-[20px] ml-[570px] mb-[100px]'>
            {WeddingCardData.map((data, index)=>{
                return(
                    <div key={index} className='h-[300px] w-[250px] mt-[0px]'>
                        <a href={data.link}>
                        <img src={data.image} alt="image" className='hover:cursor-pointer'/>
                        <h1 className=' text-gray-600 text-xl pt-[10px]' style={{ pointerEvents: 'none' }}>{data.title}</h1>
                        <p className='mt-[60px] bg-[#84754e] text-xl py-3 hover:bg-[#6C6A40] hover:cursor-pointer'>{data.view}</p>
                        </a>
                    </div>
                )
            })}
            
            
        </div>
        <div className='flex justify-center'>
                <img src={awards} alt="..." className=' h-[300px]  mb-[30px]' />
            </div>
    </div>
  )
}

export default WeddingCard