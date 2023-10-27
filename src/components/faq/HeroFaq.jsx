import React from 'react'
import hero from "../../assets/faq/faqHero.jpg"
import logo from '../../assets/Hurlingham_logo.png'
import FaqNavBar from './FaqNavBar'

function HeroFaq() {
  return (
    <div>
        <FaqNavBar/>
        <div>
            <img src={hero} alt="..." className='h-[500px] mt-[10px] mb-[40px]'/>
        </div>
        <div className='ml-[200px] mr-[200px] mb-[200px]'>
            <h1 className="text-4xl text-gray-600 ">FREQUENTLY ASKED QUESTIONS</h1>
                <h4 className='text-gray-600 text-centre  font-thin'> 
                <span className="text-2xl">DO YOU OFFER DRY HIRE?</span><br />
                The Hurlingham Club is not available on a dry hire basis. The event packages offer a variety 
                of options that are intended to suit all occasions. If you wish to find out further 
                information on our available packages, please contact our Events Team who will be willing 
                to discuss your requirements.<br /><br />
                <span className=" text-2xl">WHEN AM I ABLE TO COME AND VIEW THE VENUE?</span><br />
                Our wonderful team are here to show you around Monday - Friday between 9am and 5pm. We also 
                offer Saturday visits once a month. Please contact the sales team on 020 7610 7526 to arrange
                a meeting. <br /> <br />
                <span className="text-2xl ">CAN YOU HELP WITH SUPPLIERS?</span><br /> 
                Our trusted little black book of contacts includes ample suppliers, all of which have experience working within the venue
                and therefore are able to offer specialised knowledge of their products in the spaces. <br /> <br />
                Deliver activities that support the physical, social and mental well-being of those most in need. <br /><br />
                </h4>

                <h3 className=' text-2xl  text-gray-600'>DO YOU HAVE ONSITE PARKING?</h3>
                <h4 className='text-gray-600  text-centre'> 
                We have very limited parking onsite for guests, but we are located a 10 minute walk from 
                Putney Bridge Station for those who come by public transport. <br /> <br />
                </h4>
                <h3 className=' text-2xl text-gray-600'>ARE WE ABLE TO ARRANGE ANY OTHER TYPE OF TRANSPORT?</h3>
                <h4 className='text-gray-600 text-centre'> 
                Of course, we have the facilities for you and your guests to arrive by taxi, bus, helicopters and even by 
                cruising down the River Thames on a boat. <br /><br />

                <h3 className=' text-2xl  text-gray-600'>ARE WE ABLE TO USE THE HURLINGHAM CLUB GROUNDS?</h3>
                <h4 className='text-gray-600 text-centre'> 
                We would love for you to utilise our Terraces and Sunken Garden for your reception 
                and as a stunning backdrop for photographs.</h4> <br /> <br />
                <h3 className=' text-2xl  text-gray-600 mb-[10px]'>HOW DO I FIND THE EVENT SPACE?</h3>
                <h4 className='text-gray-600 text-centre'> 
                Each of our rooms has a dedicated entrance, which can be found by following set paths through our beautiful grounds. 
                To find the route to your event space, <a href="" className=' text-blue-500 hover:text-blue-400 hover:underline'>please click here</a> to open the maps. </h4>
                
            </h4>
            </div>
        <div className="h-[140px] w-[140px] bg-gray-100 rounded-full absolute top-[1565px] left-[600px]">
            <img className=" bottom-[5px] left-[200px] w-[250px]  p-[20px]" src={logo} alt="logo" />
        </div>
    </div>
  )
}

export default HeroFaq