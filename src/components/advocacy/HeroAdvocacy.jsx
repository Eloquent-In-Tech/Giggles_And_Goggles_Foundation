import React from 'react'
import safeGuard from "../../assets/Swim/advo1.jpg"
import logo from '../../assets/giggles_logo.png'
import SafeGuardNavBar from './SafeGuardNavBar'

function HeroSafeGuard() {
  return (
    <div className='h-[1350px]  w-full pl-[50px] pr-[50px] bg-zinc-100 text-lg'>
      <SafeGuardNavBar/>
        <div className='w-full '>
            <img src={safeGuard} alt="hero" className='h-[500px] w-[1400px] pt-[30px]' />

            <div className='w-[1000px] ml-[150px] h-[850px]'>            
                <h2 className=' text-3xl mt-[30px] text-slate-700'>
                ADVOCACY</h2>
                <h3 className=' text-lg text-left mt-[20px] text-slate-700'>
                At the Goggle and Giggles Foundation  we are dedicated to understanding and addressing barriers 
                that limit communities of African, Caribbean, and Asian heritage from engaging in aquatics and 
                water safety. We work in partnership with institutions as a bridge to our communities so that we 
                can comprehensively tackle issues of diversity, inclusion, participation, engagement and 
                representation in aquatics.
                </h3>

                <h2 className=' text-3xl mt-[30px] text-slate-700'>
                CONTACT US TO JOIN THE ADVOCACY</h2>
                <h3 className=' text-left text-lg mt-[20px] text-slate-700'> 
                If you have any concerns about poor practice or suspected abuse, please contact the Designated
                Safeguarding Officer in the first instance. This is Victoria Harris, Deputy Secretary 
                – 020 7610 7415, 07500 893814 or victoria.harris@hurlinghamclub.org.uk <br /> <br />
                If you are worried about sharing concerns regarding abuse with the Club’s Designated Safeguarding 
                Officer, you can contact the following people: <br /> <br />
                • Local Authority Designated Officer (LADO) – 020 8753 5125 or LADO@lbhf.co.uk   <br />
                • NSPCC Helpline – 0808 800 5000 <br />
                • Childline – 0800 1111 <br />
                • The police in an emergency - 999<br /><br />
                </h3>
                
            </div>
            
            <div className="h-[140px] w-[140px] bg-white border-[2px] rounded-full absolute top-[1410px] left-[600px]">
              <img className=" bottom-[5px] left-[200px] w-[750px] h-[150px]  p-[20px]" src={logo} alt="logo" />
            </div>
        </div>
        
    </div>
  )
}

export default HeroSafeGuard