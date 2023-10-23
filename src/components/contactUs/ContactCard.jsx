import React from 'react'
import logo from '../../assets/Hurlingham_logo.png'
import { ContactUsData } from '../../data/ContactUsData'


function ContactCard() {
  return (
    <div>
        <div className='flex flex-row space-x-[50px] pt-[20px] ml-[450px] mb-[200px] '>
            {ContactUsData.map((data, index)=>{
                return(
                    <div key={index} className='h-[300px] w-[250px]'>
                        <a href={data.link}>
                        <img src={data.image} alt="image" className='hover:cursor-pointer '/>
                        <h1 className=' text-gray-600 text-xl pt-[10px]' style={{ pointerEvents: 'none' }}>{data.title}</h1>
                        <p className='mt-[60px] bg-[#84754e] text-xl py-3 hover:bg-[#6C6A40] hover:cursor-pointer'>{data.view}</p>
                        </a>
                    </div>
                )
            })}
            
            
        </div>
        <div className="h-[140px] w-[140px] bg-gray-100 rounded-full absolute top-[1445px] left-[600px]">
            <img className=" bottom-[5px] left-[200px] w-[250px]  p-[20px]" src={logo} alt="logo" />
        </div>
    </div>
  )
}

export default ContactCard