import { footerData } from "../../data/FooterData"
import { footerAboutDetails } from "../../data/FooterData"
import { footerEventsDetails } from "../../data/FooterData"
import logo from "../../assets/hurlingham_logo.png"


function Footer() {
    return (
    
        <div className="h-[600px]  w-full bg-slate-300">
            <div className='flex flex-col-4 space-x-[180px]  text-gray-500 '>
                {footerData.map((data, index)=>{
              return(
                    <div key={index} className="ml-[155px] mt-[100px] font-bold ">
                        <h1>{data.title}</h1>
                    </div>
                    
                )})}
            </div>
            {/* <div className="flex flex-row">
                <div className="mr-[1000px] space-y-[30px] mt-[30px] text-gray-500">
                        {footerAboutDetails.map((data, index)=>{
                            return(
                                <div key={index}>
                                    <a href={data.link}>
                                    <ul>{data.title}</ul>
                                    </a>
                                </div>
                            )
                        })}
                   
                </div>
                <div className=" mt-[30px] text-gray-500">
                    {footerEventsDetails.map((data, index)=>{
                        return(
                            <div key={index}>
                                <a href={data.link}>
                                    <ul>{data.title}</ul>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div> */}
            <div className="flex flex-row space-x-[35px] text-gray-600 mt-[30px] ml-[20px] ">
                <div className="space-x-[5px] ml-[35px] ">
                    <a href="/about"><ul className="hover:text-blue-400 hover:cursor-pointer hover:underline">ABOUT HURLINGHAM</ul></a>
                    <a href="/sustainability"><ul className="hover:text-blue-400 hover:cursor-pointer hover:underline">SUSTAINABILITY</ul></a>
                    <a href="/safeguarding-hurlingham"><ul className="hover:text-blue-400 hover:cursor-pointer hover:underline">SAFEGUARDING</ul></a>
                    <a href="/the-hurlingham-foundation"><ul className="hover:text-blue-400 hover:cursor-pointer hover:underline">THE HURLINGHAM CLUB FOUNDATION</ul></a>
                </div>
                <div className="">
                    <a href="/events"><ul className="hover:text-blue-400 hover:cursor-pointer hover:underline">PRIVATE EVENTS</ul></a>
                </div>
                <div className="ml-[90px] space-x-[-5px]">
                    <a href="/contact-us"><ul className="ml-[85px] hover:text-blue-400 hover:cursor-pointer hover:underline">CONTACT THE CLUB</ul></a>
                    <a href="hurlingham-maps-and-directions"><ul className="ml-[85px] hover:text-blue-400 hover:cursor-pointer hover:underline">MAP & DIRECTIONS</ul></a>
                    <a href="https://www.instagram.com/hurlinghamevents/"><ul className="ml-[85px] hover:text-blue-400 hover:cursor-pointer hover:underline">INSTAGRAM</ul></a>
                </div>
                <div>
                    <a href="/career"><ul className="ml-[90px] hover:text-blue-400 hover:cursor-pointer hover:underline">OPPORTUNITIES</ul></a>
                </div>
                <div>
                    <a href="/terms-of-use"><ul className="ml-[105px] hover:text-blue-400 hover:cursor-pointer hover:underline">TERMS OF USE</ul></a>
                </div>
            </div>
            <div>
                <h1 className="text-gray-600 mt-[90px]">
                THE HURLINGHAM CLUB, RANELAGH GARDENS, LONDON, SW6 3PR | MAIN RECEPTION: 020 7610 7400 | 
                MEMBERSHIP OFFICE: 020 7610 7467 | SPORTS OFFICE: 020 7610 7500 | FITNESS CENTRE RECEPTION: 
                020 7610 7483 | FOOD AND BEVERAGE QUERIES AND BOOKINGS: 020 7610 7518 | EVENTS: 020 7610 7526
                </h1>
            </div>
      </div>

    )
  }
  
  export default Footer
  