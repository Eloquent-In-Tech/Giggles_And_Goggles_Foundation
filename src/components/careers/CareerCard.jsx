import React from 'react'
import { CareerData } from '../../data/CareerData'
import logo from "../../assets/Hurlingham_logo.png"

function CareerCard() {
  return (
    <div>
        <div className="flex flex-wrap -mx-4 ml-[150px] mr-[150px] mb-[50px] justify-center ">
                {CareerData.map((data, index) => {
                    return(
                    <div key={index} className="w-1/3 px-4 mb-[100px] ">
                        <a href={data.link} className="block">
                        <img src={data.image} alt="image" className="hover:cursor-pointer h-[150px] w-[350px] " />
                        <h1 className="text-black pt-3" style={{ pointerEvents: 'none' }}>{data.title}</h1>
                        <p className="mt-3 bg-blue-500 py-2 hover:bg-blue-400 hover:cursor-pointer">{data.view}</p>
                    </a>
                    </div>
                )})}
        </div>  
        <div className="h-[140px] w-[140px] bg-gray-100 rounded-full absolute top-[2275px] left-[600px]">
            <img className=" bottom-[5px] left-[200px] w-[250px]  p-[20px]" src={logo} alt="logo" />
        </div>
    </div>
  )
}

export default CareerCard