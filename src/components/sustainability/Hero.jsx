import React from 'react'
import heroSustainability from "../../assets/sustainability/SustainabilityHero.jpg"
import logo from '../../assets/Hurlingham_logo.png'

function SustainabilityHero() {
  return (
    <div className='h-[850px]  w-full pl-[50px] pr-[50px] bg-zinc-100'>
        <div className='w-full '>
            <img src={heroSustainability} alt="hero" className='h-[500px] w-[1400px] pt-[30px]' />

            <div className='w-[1000px] ml-[150px]'>            
                <h2 className=' text-4xl mt-[100px] text-slate-700'>
                SUSTAINABILITY</h2>
                <h3 className=' text-center text-xl mt-[20px] text-slate-700'>
                The Club supports a broad sustainability programme both on site and in its outreach. 
                During a difficult year in 2020, due to the pandemic resulting in a national lockdown, 
                our programme successfully expanded to include meals prepared by our furloughed chefs for 
                donation to the Felix Project, London’s charity against food waste and hunger. In addition to this, 
                the Club ran a successful food box campaign, 
                putting together and delivering over 700 food boxes to vulnerable members of our community.
                </h3> 
                <h3 className=' text-center text-xl mt-[20px] text-slate-700'> 
                Find further details about the sustainability at the Club, please click the sections below. 
                </h3>
            </div>
        </div>
        <div className="h-[140px] w-[140px] bg-gray-100 rounded-full absolute top-[1430px] left-[600px]">
            <img className=" bottom-[5px] left-[200px] w-[250px]  p-[20px]" src={logo} alt="logo" />
        </div>
    </div>
  )
}

export default SustainabilityHero