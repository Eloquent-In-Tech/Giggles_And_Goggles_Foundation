import React from 'react'
import heroEducation from "../../assets/Swim/coach.jpg"
import logo from '../../assets/giggles_logo.png'
import SustainNavBar from './EducationNavBar'

function SustainabilityHero() {
  return (
    <div className='h-[850px]  w-full pl-[50px] pr-[50px] bg-zinc-100'>
      <SustainNavBar/>
        <div className='w-full '>
            <img src={heroEducation} alt="hero" className='h-[500px] w-[1400px] pt-[30px]' />

            <div className='w-[1000px] ml-[150px]'>            
                <h2 className=' text-4xl mt-[50px] text-slate-700'>
                EDUCATION</h2>
                <h3 className=' text-center text-xl mt-[5px] text-slate-700'>
                The Foundation works with partners across the aquatic sector, to raise awareness towards the 
                importance of water safety and the health benefits of aquatic activities, within our communities. 
                Through these partnerships, Goggles and Giggles Foundation consistently tackles the
                inherent systemic inequalities present in our sector. Through education we can increase 
                participation and raise awareness of water safety, drowning prevention measures, and the 
                importance of swimming as a life-saving skill.
                </h3> 
                <h3 className=' text-center text-xl mt-[20px] text-slate-700'> 
                Find further details about the education programme at the foundation, please click the sections below. 
                </h3>
            </div>
        </div>
        <div className="h-[140px] w-[140px] bg-white rounded-full absolute border-[2px] top-[1445px] left-[600px]">
            <img className=" bottom-[5px] left-[200px] w-[750px] h-[150px] p-[20px]" src={logo} alt="logo" />
        </div>
    </div>
  )
}

export default SustainabilityHero