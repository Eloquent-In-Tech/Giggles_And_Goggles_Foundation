import React from 'react'
import hero from "../../assets/career/careerHero.jpg"

function CareerHero() {
  return (
    <div className='h-[850px]  w-full pl-[50px] pr-[50px] bg-zinc-100'>
        <div className='w-full '>
            <img src={hero} alt="hero" className='h-[500px] w-[1400px] pt-[30px]' />

            <div className='w-[1000px] ml-[150px]'>            
                <h2 className=' text-5xl mt-[50px] text-slate-700'>CAREERS AT THE HURLINGHAM CLUB</h2>
                <h3 className=' text-center text-xl font-bold mt-[20px] text-slate-700'>
                AN INSIGHT INTO WORKING AT THE CLUB
                </h3> 
                <h3 className=' text-center text-xl mt-[20px] text-slate-700'> 
                    Filmed in 2019
                </h3>
            </div>
            
        </div>
        
    </div>
  )
}

export default CareerHero