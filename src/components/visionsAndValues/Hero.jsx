import React from 'react'
import hero from "../../assets/career/careerCard1.jpg" 
import logo from "../../assets/Hurlingham_logo.png"

function Hero() {
  return (
    <div>
        <div>
        <div>
            <img src={hero} alt="..." className='h-[450px] w-full'/>
        </div>        
        <div>
            <h2 className='text-4xl mt-[20px] mb-[20px]'> VISION & VALUES </h2>
              <h1 className=' font-extralight mb-[170px]'>
              OUR VISION <br />
              To maintain and enhance the excellence of the Club in providing members, their families and
              guests with first class social and sporting facilities in an elegant and congenial environment 
              both for today and for tomorrow. <br />
              OUR VALUES <br />
              Excellence <br />
              ...is pursued in all our standards and actions to preserve the standing of the Club now and for 
              future generations <br />
              Responsibility <br />
              ...guides the integrity of our behaviours and choices in respect of the Club's stewardship, 
              sustainability and community relations <br />
              Courtesy <br />
              ...is the measure by which we treat everyone, at all times
              </h1>
        </div>
        <div className="h-[140px] w-[140px] bg-gray-100 rounded-full absolute top-[985px] left-[600px]">
            <img className=" bottom-[5px] left-[200px] w-[250px]  p-[20px]" src={logo} alt="logo" />
        </div>
    </div>
    </div>
  )
}

export default Hero