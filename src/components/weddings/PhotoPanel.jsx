import React from 'react'
import { WeddingPictures } from '../../data/WeddingData'
import logo from '../../assets/Hurlingham_logo.png'
import photo from "../../assets/weddings/weddingPhotos.png"



function PhotoPanel() {
  return (
    <div>
        {/* <div className='flex flex-wrap ml-[200px] mr-[200px] mb-[200px]' >
            {WeddingPictures.map((data, index) => {
                return (
                <div key={index} className='w-1/3 p-4'>
                    <img src={data.image} alt="image" className='h-[280px] ' />
                </div>
                );
            })}
        </div>   */}
    {/* <div className="h-[140px] w-[140px] bg-gray-100 rounded-full absolute top-[3080px] left-[600px]">
            <img className=" bottom-[5px] left-[200px] w-[250px]  p-[20px]" src={logo} alt="logo" />
    </div> */}
    <div className='flex justify-center mb-[200px]'>
        <img src={photo} alt="" className='w-[980px]  ' />

        <div className="h-[140px] w-[140px] bg-gray-100 rounded-full absolute top-[3465px] left-[600px]">
            <img className=" bottom-[5px] left-[200px] w-[250px]  p-[20px]" src={logo} alt="logo" />
        </div>
    </div>

    </div>
    
    )
}

export default PhotoPanel