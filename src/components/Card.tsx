'use client'

import React from 'react';

interface CardProps {
  id: number;
  firstname: string;
  lastname: string;
  position: string;
}

const Card: React.FC<CardProps> = ({ id, firstname, lastname, position }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 flex flex-col">
<div className="mb-2 rounded-lg bg-white p-4">
  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <img className="mr-2 h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile" />
      <div>
        <h3 className="text-base font-semibold text-gray-900">{firstname}</h3>
        <span className="block text-xs font-normal text-gray-500">{lastname}</span>
      </div>
    </div>
    <p className="text-sm font-medium text-indigo-500"><span className="mr-0.5">+</span>Follow</p>
  </div>
  <p className="my-6 text-sm font-normal text-gray-500">Hi, I'm Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . .</p>
  <div className="mt-6 flex items-center justify-between text-sm font-semibold text-gray-900">
    <div className="flex">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mr-2 h-5 w-5 text-base text-gray-500">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
      </svg>
      <span className="mr-1">{position}</span> 
    </div>
    <div className="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mr-1 h-5 w-6 text-yellow-500">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
      4,7 (750 Reviews)
    </div>
  </div>
</div>
    </div>
  );
};

export default Card;



