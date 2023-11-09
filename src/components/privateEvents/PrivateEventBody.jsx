import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Hurlingham_logo.png'
import PrivateEventsNavBar from './PrivateEventsNavBar';




function PrivateEventBody() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [enquiry, setEnquiry] = useState('');
    
    const navigate = useNavigate();



    const handleSubmit = (event) =>{
        event.preventDefault();
        navigate("/#");
    }
  return (
    <div className='h-[900px] w-full bg-[#f8f8f8] '>
        <PrivateEventsNavBar/>
        <div className=''>
            <div>
                <label htmlFor="Title" className='text-2xl mr-[150px]'>Title</label>
                <input type="text" id="dropdownInput" list="options" placeholder='Please Select' className='mt-[30px] ml-[85px] py-4 px-[150px] bg-[#f8f8f8] border-gray-400 border hover:cursor-pointer pl-[20px] placeholder:text-2xl placeholder:text-slate-500'/>
                <datalist id="options">
                    <option value="Mr"></option>
                    <option value="Mrs"></option>
                    <option value="Miss"></option>
                    <option value="Ms"></option>
                    <option value="Dr"></option>
                    <option value="Rev"></option>
                </datalist>
            </div>
            <div className=' ml-[10px]'>
                <label htmlFor="First Name" className='text-2xl mr-[152px]'>First Name*</label>
                <input type="text" className='mt-[10px] py-4 px-[150px] border-gray-400 border pl-[20px] bg-[#f8f8f8]'
                onChange={e=> setName(e.target.value)}/>
            </div>
            <div className=' ml-[10px]'>
            <label htmlFor="surname" className='text-2xl mr-[60px]'>Surname*</label>
                <input type="text" className='mt-[10px] px-[150px] ml-[115px] py-4 border-gray-400 border pl-[20px] bg-[#f8f8f8]'
                onChange={e=> setSurname(e.target.value)}/>
            </div>
            <div className=' ml-[10px]'>
            <label htmlFor="email" className='text-2xl mr-[120px]'>Email Address*</label>
                <input type="text" className='mt-[10px] ml-[5px] px-[150px] py-4 border-gray-400 border pl-[20px] bg-[#f8f8f8]'
                onChange={e=> setEmail(e.target.value)}/>
            </div>
            <div className=' ml-[10px]'>
            <label htmlFor="phone" className='text-2xl mr-[114px]'>Phone Number*</label>
                <input type="text"  className='mt-[10px] px-[150px] py-4 border-gray-400 border pl-[20px] bg-[#f8f8f8]'
                onChange={e=> setPhone(e.target.value)}/>
            </div>
            <div className=' ml-[10px]'>
            <label htmlFor="enquiry" className='text-2xl mr-[150px]'>Your Enquiry</label>
                <input type="text"  className='mt-[10px] ml-[px] px-[150px] py-10 border-gray-400 border pl-[20px] bg-[#f8f8f8]'
                onChange={e=> setEnquiry(e.target.value)}/>
            </div>
            <button  onClick= {handleSubmit} className="bg-[#4e9eb8] text-white py-3 px-[80px] mt-[20px] mr-[430px] hover:bg-[#436e86]">SUBMIT</button>
        </div>
        <div className="h-[140px] w-[140px] bg-gray-100 rounded-full absolute top-[1145px] left-[600px]">
            <img className=" bottom-[5px] left-[200px] w-[250px]  p-[20px]" src={logo} alt="logo" />
        </div>
    </div>
  )
}

export default PrivateEventBody