import React from 'react'
import hero from '../../assets/hurlingham2.jpg'
import Card from './card'


function HomeHero() {
  return (
    <div className='h-[800px] min-h-screen w-full pl-[50px] pr-[50px] bg-zinc-100'>
        <div className='w-full '>
            <img src={hero} alt="hero" className='h-[700px] w-[1400px] pt-[30px]' />

            <div className='w-[1000px] ml-[150px]'>            
                <h2 className=' text-4xl mt-[100px] text-slate-700'>
                WELCOME TO THE HURLINGHAM CLUB</h2>
                <h3 className=' text-center text-xl mt-[20px] text-slate-700'>
                The Hurlingham Club is a green oasis of tradition and international renown bordering the River 
                Thames in Fulham set in 42 acres of magnificent grounds.
                </h3> <br />
                <h3 className=' text-center text-xl mt-[20px] text-slate-700'> 
                Since the Club opened in 1869, it has offered some of the finest sports and social 
                facilities to its members. The Club has many spaces and areas for hire to non-members and guests. 
                Details on how to do so and other useful information can be found on these pages.
                </h3>
            </div>
            <Card/>

        </div>
    </div>
  )
}

export default HomeHero