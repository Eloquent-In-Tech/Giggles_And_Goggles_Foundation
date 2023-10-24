import React from 'react'
import logo from '../../assets/Hurlingham_logo.png'
import hero from "../../assets/sustainAtHurlingham/envHero.jpg"

function Hero() {
  return (
    <div className='h-[850px]  w-full pl-[50px] pr-[50px]  bg-zinc-100'>
        <div className='w-full'>
            <img src={hero} alt="hero" className='h-[500px] w-[1400px] pt-[30px]' />

            <div className='w-[1000px] ml-[150px] pb-[400px]'>            
                <h2 className=' text-4xl mt-[20px] text-slate-700'>ENVIRONMENTAL HURLINGHAM </h2>
                
                <h3 className=' text-center text-xl mt-[20px] text-slate-700'>
                We have strict recycling measures and waste management processes in place. Other environmental 
                aspects include; renewable energy, energy efficiency, water management, greener supply chains, 
                biodiversity and our compost mission.
                We are currently planning for a full energy and waste audit that will culminate in the first net 
                zero plan The Club has put together. This is a huge step for the Club and we feel, as an active 
                member of the Hammersmith and Fulham Borough, we should have the same goal of being net zero by 
                2030.
                </h3> 
                <h3 className=' text-center text-xl mt-[20px] text-slate-700'> 
                Since the Club opened in 1869, it has offered some of the finest sports and social facilities to
                its members. The Club has many spaces and areas for hire to non-members and guests. Details on 
                how to do so and other useful information can be found on these pages.
                </h3>
            </div>
        </div>
        <div className="h-[140px] w-[140px] bg-gray-100 rounded-full absolute top-[900px] left-[600px]">
            <img className=" bottom-[5px] left-[200px] w-[250px]  p-[20px]" src={logo} alt="logo" />
        </div>
    </div>
  )
}

export default Hero