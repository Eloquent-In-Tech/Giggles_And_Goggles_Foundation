import React from 'react'
import photo from "../../assets/corporate/corporatePhotoes.png"
import logo from '../../assets/giggles_logo.png'

function PhotoPanel() {
  return (
    <div className='flex justify-center mb-[200px]'>
        <img src={photo} alt="" className='w-[980px]  ' />

        <div className="h-[140px] w-[140px] bg-white border-[2px] rounded-full absolute top-[3585px] left-[600px]">
            <img className=" bottom-[5px] left-[200px] w-[750px] h-[150px]  p-[20px]" src={logo} alt="logo" />
        </div>
    </div>
  )
}

export default PhotoPanel