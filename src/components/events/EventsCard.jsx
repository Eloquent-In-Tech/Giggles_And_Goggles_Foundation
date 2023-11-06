import React from 'react'
import { EventsData } from '../../data/EventsData'
import logo from "../../assets/giggles_logo.png"
import awards from "../../assets/weddings/awards.png"


function EventsCard() {
  return (
    <div>
           <div className="flex flex-wrap -mx-4 ml-[150px] mr-[150px] mb-[50px] ">
                {EventsData.map((data, index) => {
                    return(
                    <div key={index} className="w-1/3 px-4 mb-[100px] ">
                        <a href={data.link} className="block">
                        <img src={data.image} alt="image" className="hover:cursor-pointer h-[150px] w-[350px] " />
                        <h1 className="text-black pt-3" style={{ pointerEvents: 'none' }}>{data.title}</h1>
                        <p className="mt-3 bg-[#84754e] py-2 hover:bg-[#6C6A40] hover:cursor-pointer">{data.view}</p>
                    </a>
                    </div>
                )})}
            </div>  
    

        <div className='flex justify-center'>
                <img src={awards} alt="..." className=' h-[300px]  mb-[230px]' />
        </div>

        <div className="h-[140px] w-[140px] bg-white border-[2px] rounded-full absolute top-[2205px] left-[600px]">
            <img className=" bottom-[5px] left-[200px] w-[750px] h-[150px]  p-[20px]" src={logo} alt="logo" />
        </div>
    </div>
    )
}

export default EventsCard