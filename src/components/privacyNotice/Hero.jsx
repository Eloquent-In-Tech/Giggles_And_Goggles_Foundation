import React from 'react'
import hero from "../../assets/career/careerCard5.jpg" 
import logo from "../../assets/Hurlingham_logo.png"

function Hero() {
  return (
    <div>
        <div>
        <div>
            <img src={hero} alt="..." className='h-[450px] w-full'/>
        </div>        
        <div>
            <h2 className='text-4xl mt-[20px] mb-[20px]'> STAFF PRIVACY NOTICE </h2>
              <h1 className=' font-extralight mb-[170px] mr-[100px] ml-[100px]'>
              What is the purpose of this document?  <br />
              The Hurlingham Club is committed to protecting the privacy and security of your personal information.
              This privacy notice describes how we collect and use personal information about you during and after 
              your working relationship with us, in accordance with the General Data Protection Regulation (GDPR)
              It applies to all employees, workers and contractors.
              The Club is registered with the Information Commissioners Office as a Data Controller. 
              This means that we are responsible for deciding how we hold and use personal information about you. 
              This notice does not form part of any contract of employment or another contract to provide services.
              We may update this notice at any time. <br />
              </h1>
        </div>
        <div className="h-[140px] w-[140px] bg-gray-100 rounded-full absolute top-[855px] left-[600px]">
            <img className=" bottom-[5px] left-[200px] w-[250px]  p-[20px]" src={logo} alt="logo" />
        </div>
    </div>
    </div>
  )
}

export default Hero