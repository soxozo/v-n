'use client';
import { useState } from 'react';
import Image from 'next/image';
import React from 'react';
import { comment } from 'postcss';

function CreateProfilesForm() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    mobile: '',
    email: '',
    birthdate: '',
    age: '',
    location: 'th',
    position: '1',
    gender: 'male',
    imgAddress: '',
    comment: 'Nothing'
  });

  // model Profile {
  //   id         Int      @id @default(autoincrement())
  //   firstname  String   
  //   lastname   String
  //   mobile     String   @unique
  //   email      String   @unique
  //   birthdate   String?
  //   location   String
  //   position   String
  //   gender     String
  //   imgAddress  String?
  //   booking    Boolean   @default(false)
  //   age        Int?
  //   status     String    @default("Available")
  //   createAt   DateTime?     @default(now())
  // }
  

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleInputChange = (e: React.imgAddressChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Apply formatText function to format text inputs
    if (name === 'firstname' || name === 'lastname') {
      setFormData((prev) => ({ ...prev, [name]: formatText(value) }));
    } else if (name === 'mobile') {
      setFormData((prev) => ({ ...prev, [name]: formatMobile(value) }));
    } else if (name === 'email') {
      setFormData((prev) => ({ ...prev, [name]: value.replace(/\s/g, '') }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleTextareaChange = (e: ReactChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;

    
    const nameMatch = text.match(/\b([A-Z][a-z]*)\s([A-Z][a-z]*)\b/);
    if (nameMatch) {
      setFormData((prev) => ({
        ...prev,
        firstname: formatText(nameMatch[1]),
        lastname: formatText(nameMatch[2])
      }));
    }

    const mobileMatch = text.match(/(\+?\d{1,2})?\s?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,4}/)  
;
    if (mobileMatch) {
      setFormData((prev) => ({
        ...prev,
        mobile: formatMobile(mobileMatch[0])
      }));
    }

    const emailMatch = text.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/);
    if (emailMatch) {
      setFormData((prev) => ({
        ...prev,
        email: emailMatch[0].replace(/\s/g, '')
      }));
    }



    const birthdateMatch = text.match(/\b\d{1,2}[-/ ](Jan|January|Feb|February|Mar|March|Apr|April|May|Jun|June|Jul|July|Aug|August|Sep|September|Oct|October|Nov|November|Dec|December|[0-9]{2})[-/ ]\d{2,4}\b/
);
    if (birthdateMatch) {
      const birthdate = new Date(birthdateMatch[0]);
      const age = new Date().getFullYear() - birthdate.getFullYear();
      setFormData((prev) => ({
        ...prev,
        birthdate: birthdateMatch[0],
        age: age.toString()
      }));
    }
  };


  const handleBirthdateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value);
    const currentYear = new Date().getFullYear();
    const birthYear = selectedDate.getFullYear();
    const calculatedAge = currentYear - birthYear;

    setFormData((prev) => ({
      ...prev,
      birthdate: e.target.value,
      age: calculatedAge.toString()
    }));
  };



  const formatText = (text: string) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  const formatMobile = (mobile: string) => {
    let formatted = mobile.replace(/\D/g, '');
    if (formatted.startsWith('66') || formatted.startsWith('65')) {
      formatted = '0' + formatted.slice(2);
    }
    return formatted;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/createprofile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

     if (response.ok) {
      setShowSuccess(true);
    } else {
      setShowError(true);
    }

    const result = await response.json();
    console.log(result);
  };

  return (
    
    <form 
    onSubmit={handleSubmit}
    className='max-w-screen-md opacity-70 bg-white shadow-xl p-4 rounded-lg'>
        <div className="relative">
      {showSuccess && (    
      <div id='success' 
      className="flex bg-white dark:bg-gray-900 items-center px-6 py-4 text-sm border-t-2 rounded-b shadow-sm border-green-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-500 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <div className="ml-3">
            <div className="font-bold text-left text-black dark:text-gray-50">Your entry has been saved</div>
            <div className="w-full text-gray-900 dark:text-gray-300 mt-1">You can continue browsing.</div>
        </div>
    </div>
     )}
     {showError && (
    <div id='error'
    className="flex bg-white dark:bg-gray-900 items-center px-6 py-4 text-sm border-t-2 rounded-b shadow-sm border-red-500">
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-red-500 stroke-current" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8V12V8ZM12 16H12.01H12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="ml-3">
            <div className="font-bold text-left text-black dark:text-gray-50">Access denied</div>
            <p 
            className="w-full text-gray-900">
              You have access to this page
              </p>
        </div>
    </div>
     )}
      <div className="mb-4 flex items-center justify-between">
        <button className="absolute right-0 top-0 text-red-700" >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        </div>
        </div>
        <div className="my-4 flex items-center gap-x-3">
<label className="flex justify-center w-full h-32 m-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
        <span className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <span className="font-medium text-gray-600">
                Drop Profiles Image, or
                <span className="text-blue-600 underline">browse</span>
            </span>
        </span>
        <input type='file' 
        name='file'
        className='hidden'
        accept='image/*'
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setFormData((prev) => ({ ...prev, imgAddress: e.target?.result?.toString() || '' }));
            reader.readAsDataURL(file);
          }
        }} 
        />
    </label>
{formData.imgAddress && <Image 
        src={formData.imgAddress} 
        alt="Preview" 
        width={66} 
        height={66}
        className='rounded-full'
        />
      }
</div>

<div className="flex items-center m-2">
  <div className="relative mr-6 w-1/2"> 
    <input 
      placeholder='firstname'
      type="text" 
      name="firstname" 
      value={formData.firstname} 
      onChange={handleInputChange}
      className="peer bg-gray-50 h-10 w-full rounded-lg text-gray-500 placeholder-transparent ring-2 px-6 ring-gray-300 focus:ring-sky-400 focus:outline-none"
      required
    />
    <label 
      className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"> 
      FirstName
    </label>
  </div>
  <div className="relative w-1/2"> 
    <input 
      placeholder='lastname'
      type="text" 
      name="lastname" 
      value={formData.lastname} 
      onChange={handleInputChange}
      className="peer bg-gray-50 h-10 w-full rounded-lg text-gray-500 placeholder-transparent ring-2 px-6 ring-gray-300 focus:ring-sky-400 focus:outline-none"
      required
    />
    <label 
      className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"> 
      LastName
    </label>
  </div>
</div>

<div className="flex items-center space-x-4 mx-2">
  <div className="relative flex-grow">
    <div className="absolute inset-y-0 left-0 top-0 flex items-center pl-3.5 pointer-events-none">
      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
        <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
      </svg>
    </div>
    <input 
      type="text" 
      name="mobile" 
      value={formData.mobile} 
      placeholder="098 765 4321" 
      onChange={handleInputChange}
      className="bg-gray-50 rounded-xl p-2 ring-2 ring-gray-300 focus:ring-sky-400 pl-10 w-full focus:outline-none" 
      required
    />
  </div>

  {/* Radio Buttons for Location */}
  <div className="flex space-x-2">
    <label className="flex items-center">
      <input
        title='location'
        type="radio" 
        name="location" 
        value="th" 
        checked={formData.location === 'th'} 
        onChange={handleInputChange} 
        className="hidden peer" 
      />
      <Image 
        src="/asset/th.svg"
        alt="th"
        width={25}
        height={25}
        className="ring-4 ring-gray-300 rounded-xl peer-checked:ring-green-400" 
      />
    </label>

    <label className="flex items-center">
      <input
        title='location'
        type="radio"
        name="location"
        value="sg"
        checked={formData.location === 'sg'}
        onChange={handleInputChange}
        className="hidden peer"
      />
      <Image 
        src="/asset/sg.svg"
        alt="sg"
        width={25}
        height={25}
        className="ring-4 ring-gray-300 rounded-xl peer-checked:ring-green-400" 
      />
    </label>
  </div>
</div>
<div className="flex items-center space-x-4 m-2">
  <div className="relative flex-grow">
<input 
type="text" 
name="email" 
value={formData.email} 
placeholder="EXAMPLE@NSEARCHGLOBAL.COM" 
onChange={handleInputChange}
className="block w-full bg-gray-50 h-10 text-sm ring-2 ring-gray-300 focus:ring-sky-400  text-gray-700 focus:outline-none shadow-sm rounded-xl pl-10"
required
/>
<span className="absolute inset-y-0 left-2 flex items-center justify-center ml-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-blue-400 pointer-events-none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        </span>
  </div>
  <div className="relative">

<input type="date" 
name="birthdate" 
value={formData.birthdate} 
onChange={handleBirthdateChange} 
placeholder="Birthdate"
className="bg-gray-50 ring-2 ring-gray-300 focus:ring-sky-400 text-gray-500 focus:outline-none shadow-sm w-full ps-15 h-10 rounded-xl px-14"
/>
</div>
</div>
  <div className="flex items-center space-x-4 m-2">
  <div className='flex space-x-4'>
      <label className="flex items-center">
      <input
        title='gender'
        type="radio" 
        name="gender" 
        value="male" 
        checked={formData.gender === 'male'}
        onChange={handleInputChange} 
        className="hidden peer" 
      />
      <Image 
        src="/asset/maleicon.svg"
        alt="male" 
        width={25} 
        height={25} 
        className="ring-4 ring-gray-300 rounded-xl peer-checked:ring-green-400" 
      />
    </label>
    <label className="flex items-center">
      <input
        title='gender'
        type="radio" 
        name="gender" 
        value="female" 
        checked={formData.gender === 'female'}
        onChange={handleInputChange} 
        className="hidden peer" 
      />
      <Image 
        src="/asset/femaleicon.svg"
        alt="female" 
        width={25} 
        height={25} 
        className="ring-4 ring-gray-300 rounded-xl peer-checked:ring-green-400" 
      />
    </label>
      </div>
<div className="relative flex-grow">
  <select
  title='position'
  name="position"
  value={formData.position} 
  onChange={handleInputChange}
  className="bg-gray-50 border border-gray-300 text-sm text-gray-500 rounded-xl ring-gray-300 focus:ring-sky-400 block w-full shadow-sm h-9 ring-2 px-20">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
  </select>
  </div>
  <div className="flex items-center">
      <input 
      type="number" 
      name="age" 
      value={formData.age}
      onChange={handleInputChange}
      onInput={(e) => {
        const input = e.target as HTMLInputElement;
        input.value = input.value.replace(/[^0-9]/g, '');
      }} 
      placeholder="Age"
      className='bg-gray-50 ring-2 ring-gray-300 focus:ring-sky-400 text-gray-500 focus:outline-none shadow-sm w-full rounded-lg h-9'
      required
      />
        </div>
  </div>
<div className="relative mx-2">
<textarea 
onChange={handleTextareaChange} placeholder="Paste text here"
className='rounded-lg p-4 bg-sky-100 border-2 border-solid border-black/10 font-mono font-medium text-sm w-full'>
</textarea>
</div>
<div className="flex items-center justify-between mx-2">
<button 
type="submit" 
className="rounded-lg bg-green-500/20 border-2 mt-2 w-full border-solid border-green-500/20 transition-colors hover:bg-green-500/40 font-medium text-base flex flex-row items-center justify-center">
Create
</button>
      </div>
    </form>
  );
}

export default CreateProfilesForm;
