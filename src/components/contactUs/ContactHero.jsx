import React from 'react'
import hero from "../../assets/contactUs/contactHero.jpg"

function ContactHero() {
  return (
    <div>
        <div>
        <div>
            <img src={hero} alt="..." className='h-[450px] w-full  mb-[40px]'/>
        </div>
        <div>
            <h3 className=' text-4xl text-gray-600 mb-[10px]'>CONTACT THE HURLINGHAM CLUB</h3>
            <h4 className='text-gray-600 mb-[50px] ml-[250px] mr-[250px]'> 
            The Hurlingham Club, Ranelagh Gardens, London, SW6 3PR <br /> <br />
            
            <span className='text-blue-500 hover:underline hover:text-blue-300 hover:cursor-pointer'>Main Reception </span>| main.reception@hurlinghamclub.org.uk | 020 7610 7400 <br className='mb-[10px]' />
            <span className='text-blue-500 hover:underline hover:text-blue-300 hover:cursor-pointer'>Membership </span> | membership@hurlinghamclub.org.uk | 020 7610 7467  <br className='mb-[10px]' />
            <span className='text-blue-500 hover:underline hover:text-blue-300 hover:cursor-pointer'>Sports Office </span> | sportsoffice.reception@hurlinghamclub.org.uk | 020 7610 7500 <br className='mb-[10px]'/>
            <span className='text-blue-500 hover:underline hover:text-blue-300 hover:cursor-pointer'>Fitness Centre </span> | fitness.centre.reception@hurlinghamclub.org.uk | 020 7610 7483 <br className='mb-[10px]' />
            <span className='text-blue-500 hover:underline hover:text-blue-300 hover:cursor-pointer'>Wine and Dine </span> | dine@hurlinghamclub.org.uk | 020 7610 7518 <br className='mb-[10px]'/>
            <span className='text-blue-500 hover:underline hover:text-blue-300 hover:cursor-pointer'>Private Events </span> | events@hurlinghamclub.org.uk | 020 7610 7526 <br className='mb-[10px]' />

            Please enquire 
             <a href="contact-us" className='text-blue-500 hover:underline hover:text-blue-300'> here.</a> <br />
             For all other enquiries, please email  
            <a href="mail to:communications@hurlinghamclub.org.uk" className=' text-blue-500 hover:underline hover:text-blue-300'> communications@hurlinghamclub.org.uk</a>
            </h4>
        </div>
    </div>
    </div>
  )
}

export default ContactHero