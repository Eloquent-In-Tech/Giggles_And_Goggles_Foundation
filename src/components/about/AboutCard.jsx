import React from 'react'
import { AboutData } from "../../data/aboutData"
import logo from '../../assets/giggles_logo.png'

function AboutCard() {
  return (
    <div className='flex flex-col-4 space-x-[30px] pt-[20px] ml-[290px] mb-[170px]'>
        {AboutData.map((data, index)=>{
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
        <div className="h-[140px] w-[140px] bg-white rounded-full absolute border-[2px] top-[1415px] left-[600px]">
            <img className=" bottom-[5px] left-[200px] w-[750px] h-[150px] p-[20px]" src={logo} alt="logo" />
        </div>
    </div>
  )
}

export default AboutCard