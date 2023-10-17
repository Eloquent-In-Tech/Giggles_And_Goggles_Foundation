import React from 'react'
import photo from "../../assets/rooms/roomsfloor.jpg"
import logo from '../../assets/Hurlingham_logo.png'


function RoomsPhotoPanel() {
  return (
    <div>
        <div>
            <div className='flex justify-center mb-[200px]'>
                <img src={photo} alt="" className='w-[980px]  ' />

                <div className="h-[140px] w-[140px] bg-gray-100 rounded-full absolute top-[2315px] left-[600px]">
                    <img className=" bottom-[5px] left-[200px] w-[250px]  p-[20px]" src={logo} alt="logo" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default RoomsPhotoPanel