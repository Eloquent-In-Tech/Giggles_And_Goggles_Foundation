import React from 'react'
import { Container } from 'reactstrap';


function CareerVideo() {
    const videoUrl = 'https://www.youtube.com/8df6f92b-2bf1-494a-9a99-a84eb7c3e329';

  return (
        <div className='flex justify-center mb-[50px]'> 
            <iframe src={videoUrl} frameborder="0" title='Video' className=' h-[450px] w-[1300px] '></iframe>
        </div>
  )
}

export default CareerVideo