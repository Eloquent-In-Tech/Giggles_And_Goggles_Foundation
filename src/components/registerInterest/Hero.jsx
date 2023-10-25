import React from 'react'
import hero from "../../assets/career/careerCard3.jpg" 
import logo from "../../assets/Hurlingham_logo.png"
function Hero() {
  return (
    <div>
        <div>
        <div>
            <img src={hero} alt="..." className='h-[450px] w-full'/>
        </div>        
        <div>
            <h2 className='text-4xl mt-[20px] mb-[20px]'> REGISTER INTEREST</h2>
              <h1 className=' font-extralight mb-[170px]'>
              Our current vacancies are listed here. <br />
              If the role you are looking for is not listed, please register your interest for forthcoming 
              vacancies by emailing <br /> <span className=' text-blue-500  hover:underline hover:text-blue-400 hover:cursor-pointer'>
                human.resources@hurlinghamclub.org.uk</span> 
              </h1>
        </div>
        <div className="h-[140px] w-[140px] bg-gray-100 rounded-full absolute top-[815px] left-[600px]">
            <img className=" bottom-[5px] left-[200px] w-[250px]  p-[20px]" src={logo} alt="logo" />
        </div>
    </div>
    </div>
  )
}

export default Hero