import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Hurlingham_logo.png'
import PrivateEventsNavBar from './PrivateEventsNavBar';




function PrivateEventBody() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [phone, setPhone] = useState('');
    const [guests, setGuests] = useState('');
    const [enquiry, setEnquiry] = useState('');
    const [date, setDate] = useState('');

    const navigate = useNavigate();



    const handleSubmit = (event) =>{
        event.preventDefault();
        navigate("/#");
    }
  return (
    <div className='h-[1100px] w-full bg-[#f8f8f8] '>
        <PrivateEventsNavBar/>
        <div className=''>
            <div>
                <label htmlFor="Title" className='text-2xl mr-[150px]'>Title</label>
                <input type="text" id="dropdownInput" list="options" placeholder='Please Select' className='mt-[30px] ml-[85px] py-4 px-[80px] bg-[#f8f8f8] border-gray-400 border hover:cursor-pointer pl-[20px] placeholder:text-2xl placeholder:text-slate-500'/>
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
                <input type="text" className='mt-[10px] py-4 px-[80px] border-gray-400 border pl-[20px] bg-[#f8f8f8]'
                onChange={e=> setName(e.target.value)}/>
            </div>
            <div className=' ml-[10px]'>
            <label htmlFor="surname" className='text-2xl mr-[60px]'>Surname*</label>
                <input type="text" className='mt-[10px] px-[80px] ml-[120px] py-4 border-gray-400 border pl-[20px] bg-[#f8f8f8]'
                onChange={e=> setSurname(e.target.value)}/>
            </div>
            <div>
                <label for="myCheckbox" class="flex items-center">
                <span className="ml-[400px] text-2xl" >Are you a member of <br />The Hurlingham Club?</span>
                <input type="checkbox" id="myCheckbox" name="myCheckbox" class="form-checkbox text-indigo-600 h-5 w-5"/>
                
                </label>
            </div>
            <div className=' ml-[10px]'>
            <label htmlFor="companyName" className='text-2xl mr-[50px]'>Company Name</label>
                <input type="text" className='mt-[10px] px-[80px] ml-[70px] py-4 border-gray-400 border pl-[20px] bg-[#f8f8f8]'
                onChange={e=> setCompanyName(e.target.value)}/>
            </div>
            <div className=' ml-[10px]'>
            <label htmlFor="email" className='text-2xl mr-[120px]'>Email Address*</label>
                <input type="text" className='mt-[10px] ml-[10px] px-[80px] py-4 border-gray-400 border pl-[20px] bg-[#f8f8f8]'
                onChange={e=> setEmail(e.target.value)}/>
            </div>
            <div className=' ml-[10px]'>
            <label htmlFor="phone" className='text-2xl mr-[114px]'>Phone Number*</label>
                <input type="text"  className='mt-[10px] ml-[10px] px-[80px] py-4 border-gray-400 border pl-[20px] bg-[#f8f8f8]'
                onChange={e=> setPhone(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="EventType" className='text-2xl mr-[20px]'>Type of Event*</label>
                <input type="text" id="input" list="events" placeholder='Please Select' className='mt-[30px] ml-[135px] py-4 px-[80px] border-gray-400 border hover:cursor-pointer pl-[20px] bg-[#f8f8f8] placeholder:text-2xl placeholder:text-slate-500'/>
                <datalist id="events">
                    <option value="Conference/Meeting"></option>
                    <option value="Dinner"></option>
                    <option value="Drinks Reception"></option>
                    <option value="Lunch"></option>
                    <option value="Summer Party"></option>
                    <option value="Wedding"></option>
                </datalist>
            </div>
            <div className=' ml-[10px]'>
            <label htmlFor="guests" className='text-2xl mr-[100px]'>Number of guests*</label>
                <input type="text"  className='mt-[10px] ml-[10px] px-[80px] py-4 border-gray-400 border pl-[20px] bg-[#f8f8f8]'
                onChange={e=> setGuests(e.target.value)}/>
            </div>
            <div className=' ml-[10px]'>
            <label htmlFor="enquiry" className='text-2xl mr-[150px]'>Your Enquiry</label>
                <input type="text"  className='mt-[10px] ml-[10px] px-[80px] py-10 border-gray-400 border pl-[20px] bg-[#f8f8f8]'
                onChange={e=> setEnquiry(e.target.value)}/>
            </div>
            <div className=' ml-[10px]'>
            <label htmlFor="date" className='text-2xl mr-[133px]'>Preferred Date</label>
                <input type="text"  className='mt-[10px] ml-[10px] px-[80px] py-10 border-gray-400 border pl-[20px] bg-[#f8f8f8]'
                onChange={e=> setDate(e.target.value)}/>
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