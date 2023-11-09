import React from 'react'
import hero from "../../assets/Swim/about1.jpg"
import AboutNavBar from './AboutNavBar'

function AboutHero() {
  return (
    <div className='h-[1000px]  w-full pl-[50px] pr-[50px] bg-zinc-100'>
      <AboutNavBar/>
        <div className='w-full '>
            <img src={hero} alt="hero" className='h-[500px] w-[1400px] pt-[30px]' />

            <div className='w-[1000px] ml-[150px]'>            
                <h2 className=' text-4xl mt-[100px] text-slate-700'>
                WELCOME TO THE GOGGLE AND GIGGLES FOUNDATION</h2>
                <h3 className=' text-center text-xl mt-[20px] text-slate-700'>
                The Goggle and Giggles Foundation is a non-profit organisation, set up to diversify the world of aquatics 
                through EDUCATION, ADVOCACY, SUPPORT & RESEARCH.
                </h3> 
                <h3 className=' text-center text-xl mt-[10px] text-slate-700 underline'> OUR MISSION <br /> <br />WE HAVE A MISSION TO DIVERSIFY THE WORLD OF AQUATICS</h3>
                <h4 className=' text-slate-700 mt-[10px] text-xl'>
                We are a not-for-profit organisation dedicated to diversifying aquatics. Our mission is to ensure 
                that that all communities can benefit from swimming, not only a sport but a lifesaving skill.
                We exist to provide a youth-powered solution; going beyond advocating for change, we believe 
                in action through service delivery. We are dedicated to breaking down the barriers to swimming 
                by offering targeted swimming lessons to minority youth in London. In 2023, through our flagship
                 programme ‘black kids swim too’ we will deliver and train over 1000 young swimmers. 
                </h4>
            </div>
            
        </div>
    </div>
  )
}

export default AboutHero