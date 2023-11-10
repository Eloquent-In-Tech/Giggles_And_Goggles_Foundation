import React from 'react'
import hero from "../../assets/Swim/donated.jpg"
import logo from '../../assets/Hurlingham_logo.png'
import DonateNavBar from './DonateNavBar'

function CleanAirHero() {
  return (
      <div className='text-gray-600'>
        <DonateNavBar/>
          <div>
              <img src={hero} alt="..." className='h-[450px] w-full '/>
          </div>
        <div className='bg-blue-400 pt-[50px] pb-[50px]'>
          
            <h3 className=' text-6xl text-blue-600 font-bold mb-[20px] tracking-widest'>HELP SUPPORT OUR WORK</h3>
            <h4 className='text-green-600 mb-[50px]  font-bold ml-[350px] mr-[250px] text-justify'>
              YOUR GENEROUS DONATION CAN HELP US REACH SO MANY & SUPPORT OUR EFFORTS 
              </h4>
              <div >
                <h3 className=''> <span>REASONS TO DONATE</span>   <br />  </h3>
                    <div className=' ml-[500px] mr-[500px]'>
                         <h3>
                            Thank you for choosing to donate to the BSA. Your funding will help us reach our mission in
                            working towards a future with ethnic diversity in aquatics and spreading water safety knowledge 
                            and education to African, Caribbean and Asian communities.
                            <br />We appreciate your support!
                        </h3>
                    </div>
                    <div className='mb-[30px] mt-[20px]'>
                      <h2>Click Donate to send in your suppport</h2>
                      <button className=' bg-blue-700 py-[10px] px-[20px]  mt-[20px] rounded-sm text-white hover:bg-black'>DONATE</button>
                    </div>
                </div>
            
        </div>
    </div>
  )
}

export default CleanAirHero