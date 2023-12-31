import React from 'react'
import hero from '../../assets/weddings/weddingsHero.jpg'
import WeddingNavBar from './WeddingNavBar'


function HeroWedding() {


  return (
    <div>
      <WeddingNavBar/>
        <div>
            <img src={hero} alt="..." className='h-[450px] w-full  mb-[40px]'/>
        </div>
        <div>
            <h3 className=' text-4xl text-gray-600 mb-[10px]'>WEDDINGS</h3>
            <h4 className='text-gray-600 mb-[50px] ml-[250px] mr-[250px]'> 
            The Goggle and Giggles Club’s exquisite wedding venue space can accommodate up to 800 guests and can be
            booked by both non-members and members. <br /> <br />
            One of the most exclusive private members’ clubs in the world, the Club’s sprawling grounds 
            overlooking the River Thames, landscaped gardens and white Georgian Clubhouse provide a stunning
            backdrop for your wedding. <br className='mb-[15px]'/> 
            Our team of expert event planning professionals ensure that you receive a fully bespoke experience. 
            Every part of your special day will be entirely tailored to your specific needs and requirements, 
            allowing you to relax and enjoy each moment. <br className='mb-[15px]' />
            To contact our dedicated events team to find out more about holding your wedding at The Giggle and Goggles 
            Club, please <a href="/private-events-form" className='text-blue-500 hover:underline hover:text-blue-300' >click here.</a> <br />
            <a href="https://hirespace.com/blog/the-ultimate-guide-to-finding-the-perfect-wedding-venue-in-london?domain=hirespace.com" className=' text-blue-500 hover:underline hover:text-blue-300' >Hire Space's ultimate wedding venue finding guide</a>
            </h4>
        </div>
    </div>
  )
}

export default HeroWedding