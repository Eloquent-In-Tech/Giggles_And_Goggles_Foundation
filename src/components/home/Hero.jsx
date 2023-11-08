import React from 'react'
import hero from '../../assets/hurlingham2.jpg'
import logo from '../../assets/giggles_logo.png'



function HomeHero() {
  return (
    <div className='h-[950px]  w-full pl-[50px] pr-[50px] bg-zinc-100'>
        <div className='w-full '>
            <img src={hero} alt="hero" className='h-[500px] w-[1400px] pt-[30px]' />

            <div className='w-[1000px] ml-[150px]'>            
                <h2 className=' text-4xl mt-[100px] text-slate-700'>
                GOGGLE AND GIGGLE FOUNDATION</h2>
                <h3 className=' text-center text-xl mt-[20px] text-slate-700'>
                We are a not-for-profit organisation dedicated to diversifying aquatics. Our mission is to 
                ensure that that all communities can benefit from swimming, not only a sport but a lifesaving 
                skill. 
                </h3> 
                <h3 className=' text-center text-xl mt-[20px] text-slate-700'> 
                  WHO research confirms that ethnic communities are at an increased risk of drowning, which 
                  is no surprise considering that Black and Asian communities have historically been precluded 
                  from swimming. Today, the statistics are startling with 95% of black adults and 80% of black 
                  children who do not swim in England. 
                  <br /> <br />

                  Several of London’s top private/public schools have extensive swimming facilities 
                  (Dulwich college Jags college, Mill Hill etc), swimming pools are also available at top hotels and spas. 
                  We will create sustainable and lasting partnerships with these organisations to access heavily subsidised or 
                  free use of pool space to deliver our lessons.
                </h3>
            </div>
            
        </div>
        <div className="h-[140px] w-[140px] bg-white rounded-full absolute border-[2px] top-[1450px] left-[600px]">
            <img className=" bottom-[50px] left-[200px] w-[750px] h-[150px]  p-[20px]" src={logo} alt="logo" />
        </div>
    </div>
  )
}

export default HomeHero