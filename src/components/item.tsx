'use client'

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { redirect } from 'next/navigation';

const FormRegis = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    mobile: '',
    email: '',
    birthdate: '',
    gender: '',
    imgUrl: ''
  });

  const formatName = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  // Helper function to format mobile numbers
  const formatMobile = (mobile: string) => {
    let digitsOnly = mobile.replace(/\D/g, ''); // Remove non-numeric parts
    if (digitsOnly.startsWith('65') || digitsOnly.startsWith('66')) {
      digitsOnly = '0' + digitsOnly.slice(2);
    }
    return digitsOnly;
  };

  // Handle field blur for specific formatting on first/last name and mobile
  const handleBlur = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'firstname' || name === 'lastname') {
      formattedValue = formatName(value);
    } else if (name === 'mobile') {
      formattedValue = formatMobile(value);
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: formattedValue
    }));
  };

  const handleTextParse = (e) => {
    const text = e.target.value;

    const nameMatch = text.match(/([A-Z][a-z]+) ([A-Z][a-z]+)/);
    const emailMatch = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    const phoneMatch = text.match(/(\+?\(?\d{1,3}\)?)?[- ]?(\d{1,3})[- ]?(\d{2})[- ]?(\d{2})[- ]?(\d{1})[- ]?(\d{2})/);

    setFormData((prevData) => ({
      ...prevData,
      firstname: nameMatch ? formatName(nameMatch[1]) : '',
      lastname: nameMatch ? formatName(nameMatch[2]) : '',
      email: emailMatch ? emailMatch[0] : '',
      mobile: phoneMatch ? formatMobile(phoneMatch[0]) : '',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('User registered successfully');
      redirect('/'); // Navigate to the homepage
    } else {
      alert('Failed to register user');
    }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
};
  return (

<div>


<form 
className='max-w-sm opacity-2 bg-white shadow-xl p-4 rounded-lg'
onSubmit={handleSubmit}>
    <div className="relative">
      <div className="mb-4 flex items-center justify-between">
        <button className="absolute right-0 top-0 text-red-700">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="col-span-full">
 <div className="my-4 flex items-center gap-x-3">

              <Image src="/asset/profile-logo.svg" alt="alt" width={66} height={66} className="rounded-full" />
       <div className="items-center justify-center">
      <label className="flex justify-center w-full h-25 py-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none" id="drop"><span className="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg><span className="font-thin text-sm text-gray-600 px-3">Drop files to Attach, or<span className="text-blue-600 underline ml-[4px]">browse</span></span></span><input type="file" name="imgUrl" 
        onChange={(e) => {
          if (e.target.files?.[0]) {
            setFormData((prevData) => ({
              ...prevData,
              imgUrl: URL.createObjectURL(e.target.files[0])
            }));
          }
        }}
      className="hidden" accept="image/png,image/jpeg" /></label>
    </div>
</div>
</div>
 
<div className="flex items-center m-2">
  <div className="relative mr-6 w-full"> 
    <input
      type="text"
      id="firstName"
      name="firstName"
      value={formData.firstname}
      onChange={handleChange}
      onBlur={handleBlur}
      className="peer bg-gray-50 h-10 w-full rounded-lg text-gray-500 placeholder-transparent ring-2 px-6 ring-gray-300 focus:ring-sky-400 focus:outline-none"
      placeholder="Type inside me"
    />
    <label
      htmlFor="firstName"
      className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
    >
      First Name
    </label>
  </div>

  <div className="relative w-full"> {/* สำหรับ input ที่สอง */}
    <input
      type="text"
      id="lastname"
      name="lastname"
      value={formData.lastname}
      onChange={handleChange}
      onBlur={handleBlur}
      className="peer bg-gray-50 h-10 w-full rounded-lg text-gray-500 placeholder-transparent ring-2 px-6 ring-gray-300 focus:ring-sky-400 focus:outline-none"
      placeholder="Type inside me"
    />
    <label
      htmlFor="lastname"
      className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
    >
      Last Name
    </label>
  </div>
</div>



<div className="flex flex-grow items-center">
    <div className="m-2 relative">
      
            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                    <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                </svg>
            </div>
            <input type="tel" name="mobile" aria-describedby="helper-text-explanation" value={formData.mobile}
              onChange={handleChange}
              onBlur={handleBlur}
             className="bg-gray-50 rounded-xl p-2 ring-2 ring-gray-300 focus:ring-sky-400 ps-10 w-full focus:outline-none" placeholder="098 765 4321" />
        </div>
    <div className="flex mx-2">

    <label>
    <input
          type="radio"
          name="location"
          value="th" 
          onChange={handleChange}
          className='hidden peer'/>
<Image src="/asset/th.svg" alt="th" width={25} height={25} 
className="ring-4 ring-gray-300 rounded-xl peer-checked:ring-green-400 mx-2"
/>
      </label>
      <label> 
      <input
          type="radio"
          name="location"
          value="sg" 
          onChange={handleChange}
          className='hidden peer'/>
<Image src="/asset/sg.svg" alt="th" width={25} height={25} 
className="ring-4 ring-gray-300 rounded-xl peer-checked:ring-green-400 mx-2"/>
      </label>
    

    </div>
</div>
            </div>

            <div className="relative m-2">
        <input type="email" name="email" id='email' 
        value={formData.email}
        onChange={handleChange}
        className="block w-full bg-gray-50 h-10 text-sm ring-2 ring-gray-300 focus:ring-sky-400  text-gray-700 focus:outline-none shadow-sm rounded-xl pl-10 mb-4" placeholder="EXAMPLE@NSEARCHGLOBAL.COM" />
        <span className="absolute inset-y-0 left-2 flex items-center justify-center ml-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-blue-400 pointer-events-none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        </span>
    </div>

          <div className="m-2">
          <select id='position' name='position' className="bg-gray-50 border border-gray-300 text-sm text-gray-500 rounded-xl ring-gray-300 focus:ring-sky-400 block w-full shadow-sm h-9 ring-2 px-4">
<><option value="UX Designer">Position</option>
<option value="UI Designer">UI Designer</option>
<option value="Product Designer">Product Designer</option>
<option value="Service Designer">Service Designer</option>
<option value="Experience Designer">Experience Designer</option>
<option value="Web Designer">Web Designer</option>
<option value="Mobile Designer">Mobile Designer</option>
<option value="Visual Designer">Visual Designer</option>
<option value="3D Designer">3D Designer</option>
<option value="Metaverse Designer">Metaverse Designer</option>
<option value="Interaction Designer">Interaction Designer</option>

<option value="Content writer">Content writer</option>
<option value="Content Designer">Content Designer</option>
<option value="UX writer">UX writer</option>
<option value="Copywriting">Copywriting</option>
<option value="Content specialist">Content specialist</option>
<option value="Technical writer">Technical writer</option>

<option value="Content producer">Content producer</option>
<option value="Digital Coordinator">Digital Coordinator</option>

<option value="Product Manager">Product Manager</option>
<option value="Project Manager">Project Manager</option>
<option value="Product Owner">Product Owner</option>

<option value="Data analyst">Data analyst (เขียนโค้ด แต่ไม่เยอะ)</option>
<option value="Business analyst">Business analyst (เขียนโค้ด แต่ไม่เยอะ)</option>

<option value="SEO Specialist">SEO Specialist</option>
<option value="SEM Specialist">SEM Specialist</option>

<option value="Marketing Automation">Marketing Automation</option>
<option value="Email marketing specialist">Email marketing specialist</option>
<option value="Web marketing">Web marketing</option>
<option value="Digital marketing">Digital marketing</option>

<option value="Technical Recruiter">Technical Recruiter</option>
<option value="Design Recruiter">Design Recruiter</option>
<option value="Data & AI Recruiter">Data & AI Recruiter</option>

<option value="Software Quality Tester (\u0E40\u0E02\u0E35\u0E22\u0E19\u0E42\u0E04\u0E49\u0E14)">Software Quality Tester</option>
<option value="QA Engineer (\u0E40\u0E02\u0E35\u0E22\u0E19\u0E42\u0E04\u0E49\u0E14)">QA Engineer</option>
<option value="Game Tester (\u0E40\u0E02\u0E35\u0E22\u0E19\u0E42\u0E04\u0E49\u0E14)">Game Tester</option>

<option value="Software Sales Representative">Software Sales Representative</option>
<option value="Software Sales Consultant">Software Sales Consultant</option>
<option value="Technical sales">Technical sales</option>

<option value="Operations Manager">Operations Manager</option>
<option value="System Administrator">System Administrator</option>
<option value="Tech Support Specialist">Tech Support Specialist</option>
<option value="Web Master">Web Master</option>
<option value="Web Setting">Web Setting</option>
<option value="Hardware implement">Hardware implement</option>
<option value="Instalments">Instalments</option>
<option value="Solution Architect">Solution Architect</option>
<option value="Community Advocate/Evangelism">Community Advocate/Evangelism</option>
<option value="Customer Success">Customer Success</option>
<option value="Network Engineer">Network Engineer</option>
<option value="Product specialist">Product specialist</option>
<option value="Technology trainer">Technology trainer</option>
<option value="Technology consultant">Technology consultant</option></>
</select>


    <div className="flex items-center m-2">
   
      <div className="relative mr-6">

  <input type="date" name="birthdate" id='birthdate'
 value={formData.birthdate}
  onChange={handleChange}
  className="bg-gray-50 ring-2 ring-gray-300 my-2 focus:ring-sky-400 text-gray-500 focus:outline-none shadow-sm w-full ps-15 p-1 rounded-lg px-14"/>
</div>
<div className="flex">
<div className="flex items-center">
       
<label> 
      <input
          type="radio"
          name="gender"
          value="male" 
          onChange={handleChange} 
          className='hidden peer'/>
<Image src="/asset/maleicon.svg" alt="th" width={25} height={25} 
className="ring-4 ring-gray-300 rounded-xl peer-checked:ring-sky-500 mx-2"/>
      </label>
     
         <label> 
      <input
          type="radio"
          name="gender"
          value="female" 
          onChange={handleChange} 
          className='hidden peer'/>
<Image src="/asset/femaleicon.svg" alt="th" width={25} height={25} 
className="ring-4 ring-gray-300 rounded-xl peer-checked:ring-sky-500 mx-2"/>
      </label>
   
     </div>
  </div>
  
  </div>
<p className="my-10"> </p>

            <div className="flex flex-col">
       
                <textarea id="input" className="rounded-lg p-4 bg-black/5 border-2 border-solid border-black/10 font-mono font-medium text-sm mb-2" onChange={handleTextParse}
                ></textarea>
            </div>
            <button type="submit" className="rounded-lg bg-green-500/20 border-2 px-2 w-full border-solid border-green-500/20 transition-colors hover:bg-green-500/40 font-medium text-base flex flex-row items-center justify-center gap-2">
				Create
			</button>
     
    </form>
    </div>
  );
};
