'use client';

import React from 'react';
import { TPersonal } from '@/../types/index';
import Image from 'next/image';
import Link from 'next/link';


const CardProfile: React.FC<TPersonal> = ({ id, firstname, lastname, bookign, imgAddress, position, age, status, comment }) => {
  const getStatusBgColor = () => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'Busy':
        return 'bg-blue-100 text-blue-800';
      case 'Away':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  return (
    <div className=" bg-white border-2 border-green-500 shadow-md rounded-lg p-2 m-2 flex flex-col">

<div className="rounded-lg bg-white p-1">

  <div className="flex items-center justify-between">
 
    <div className="flex items-center">
        <Image src={imgAddress}
        alt="e"
        width={60}
        height={60}/>
          <div>
        {id}
        <h3 className="text-base font-semibold text-gray-900">{firstname} {lastname}</h3>
        <span className="block text-xs font-normal text-gray-500">{position}</span>
      </div>
    </div>
      <span className={`py-1 px-2 text-sm font-semibold ${getStatusBgColor()}`}>
        {status}
      </span>

  </div>
  <p className="my-2 text-sm font-normal text-gray-500">{comment}</p>
  <div className="mt-2 flex items-center justify-between">
    <div className="flex justify-center">
    {!bookign && (
   <button 
   className="py-1.5 px-3 active:bg-amber-200 border border-gray-300 rounded-md border-gray-400 h-8 text-sm flex items-center gap-1 lg:gap-2">
<svg fill="#000000" width="12px" height="12px" viewBox="0 0 0.54 0.54" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
<title>flag-line</title><path className="clr-i-outline clr-i-outline-path-1" d="M0.09 0.51A0.015
 0.015 0 0 1 0.075 0.495v-0.45a0.015 0.015 0 0 1 0.03 0v0.45A0.015 0.015 0 0 1 0.09 0.51" /><path className="clr-i-outline clr-i-outline-path-2" d="M0.458 0.058a0.018 0.018 0 0 0 -0.015 0 0.24 0.24 0 0 1 -0.092 0.017 0.18 0.18 0 0 1 -0.078 -0.022 0.18 0.18 0 0 0 -0.075 -0.022 0.18 0.18 0 0 0 -0.064 0.011v0.034A0.12 0.12 0 0 1 0.199 0.06a0.18 0.18 0 0 1 0.063 0.019 0.24 0.24 0 0 0 0.09 0.025 0.3 0.3 0 0 0 0.083 -0.013v0.193a0.24 0.24 0 0 1 -0.084 0.014 0.18 0.18 0 0 1 -0.078 -0.022A0.18 0.18 0 0 0 0.198 0.254a0.18 0.18 0 0 0 -0.064 0.013V0.3A0.12 0.12 0 0 1 0.198 0.284a0.18 0.18 0 0 1 0.063 0.019 0.24 0.24 0 0 0 0.09 0.025A0.24 0.24 0 0 0 0.456 0.308 0.018 0.018 0 0 0 0.464 0.295V0.07A0.018 0.018 0 0 0 0.458 0.058" /><path x="0" y="0" width="36" height="36" fillOpacity="0" d="M0 0h0.54v0.54H0z" /></svg>
      
    </button>
)}
    </div>
    <div className="flex items-center">
    <><button className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border-y border-slate-200 font-medium px-4 py-2 inline-flex space-x-1 items-center">
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </span>
        <span className="hidden md:inline-block">View {age}</span>
    </button>
    <button className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-r-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
        </span>
        <span className="hidden md:inline-block">Delete</span>
    </button></>
    </div>
  </div>
</div>
</div>
  
  );
};

export default CardProfile;


