import React from 'react'
import terms from "../../assets/Swim/partnership1.jpg"
import PartnersNavBar from './PartnersNavBar'
import { PartnersData } from '../../data/partnersData'
import "../styles/Partners.css"

function PartnersHero() {
  return (
    <div className='h-[750px]  w-full pl-[50px] pr-[50px] bg-zinc-200 text-lg'>
      <PartnersNavBar/>
        <div className='w-full '>
            <img src={terms} alt="hero" className='h-[400px] w-full pt-[0px]' />

            <h1 className='mt-[30px] text-2xl text-red-500'>OUR PARTNERS </h1>
              <h1 className='mt-[10px] text-xl text-blue-800'>The G nad G foundation has partnered with 
              the below as we unite to spread key messages</h1>
        </div>
        <div className='marquee'>
              {PartnersData.map((data, index)=>{
                return(
                    <div key={index} className='marquee-item'>
                        <img src={data.image} alt="image" className='h-[50px] mt-[50px] hover:cursor-pointer'/>
                    </div>
                )
            })}
            </div>
        
    </div>
  )
}

export default PartnersHero