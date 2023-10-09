import React from 'react'
import logo from '../../assets/Hurlingham_logo.png'

function TopNav() {
  return (
    <div className="flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-[130px]">
            <img src={logo} alt="logo" className="h-24 w-24 font-semibold" />
            <h3 className="text-lg mt-[40px]  font-semibold hover:text-slate-500 hover:underline hover:cursor-pointer">ABOUT</h3>
            <h3 className="text-lg mt-[40px]  font-semibold hover:text-slate-500 hover:underline hover:cursor-pointer">EVENTS</h3>
            <h3 className="text-lg mt-[40px]  font-semibold hover:text-slate-500 hover:underline hover:cursor-pointer">CONTACT US</h3>
        </div>
        <div className="flex flex-col items-center ">
            <span className="bg-blue-600 py-2 px-6 text-white mb-2 ml-[400px] hover:bg-blue-400 hover:cursor-pointer">Login</span>
            <input type="text" placeholder="Search" className="bg-slate-300 py-2 px-10 ml-[200px] text-black font-bold"/>
        </div>
    </div>

  )
}

export default TopNav