'use client'

import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import { FiSend } from "react-icons/fi";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-slate-100">
      <div className="w-full text-white bg-main-color">
    {/* {Header} */}
          </div>
  
      <div className="container mx-auto my-5 p-5">
  <div className="md:flex no-wrap md:-mx-2">
    {/* Left Side */}
    <div className="w-full md:w-4/12 md:mx-2">
      {/* Profile Card */}
      <div className="bg-white p-2 border-t-8 border-sky-500 rounded-xl shadow-slate-300 shadow-inner">
        <div className="flex flex-col items-center gap-4 image overflow-hidden">

        <p className="text-xl font-bold m-2">
        Prajwal Hallale
    </p>

        <div className="relative my-4">
        <div className="absolute -inset-2">
            <div className="w-30 h-full max-w-sm mx-auto lg:mx-0 opacity-70 blur-lg bg-gradient-to-r from-blue-400 via-sky-300 to-blue-700">
            </div>
        </div>
        <Image
        src='/upload/1730997779759.png'
        alt='imgAddress'
        width={111}
        height={111} 
        className="relative object-cover shrink-0 h-28 w-28 z-10 rounded-xl" />
    </div>

    <div className="text-gray-400 gap-4 mb-2 flex justify-around">
    <button className="bg-slate-100 text-gray-800 text-xs rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md p-2 inline-flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
       <path fill="currentcolor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
      </svg>
      <span>Delete</span>
    </button>
    <button className="bg-slate-100 text-gray-800 text-xs rounded border-b-2 border-green-500 gap-2 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md p-2 inline-flex items-center">
     
  
     <span>  Submit </span> <FiSend />

      
    </button>
    </div>

    <div className="bg-white p-3 w-full">
            <div className="flex items-center space-x-2 text-lg font-semibold text-gray-900 leading-8 mb-6">
                <Image
                src='asset/sum.svg'
                alt='sum'
                width={24}
                height={24}
                />
            <h1 className='tracking-wide'>Summary</h1> 
            </div>

            <label>
            <textarea
            className="h-20 w-full mr-4 bg-white text-sm rounded-sm border border-none mb-6" 
            placeholder="No data of Summary">
            </textarea> 
            </label>
            <div className="grid grid-cols-1 bg-slate-50 shadow-inner rounded-xl border-2 border-inner shadow-zinc-500/49 shadow-innerfirst-line:border-zine-500" >
             <div className="w-full flex flex-col items-start px-2 py-2 gap-4 shadow-blue-500/40">


            <div className="flex flex-row items-center w-full justify-between">
  <label htmlFor="status" className="text-gray-800">Status</label>
  
  <select className="max-w-[280px] bg-transparent">
    <option className="bg-green-500 py-1 px-2" value="course1">Course title</option>
    <option className="bg-blue-500 py-1 px-2 "value="course2">Course title</option>
    <option className="bg-orange-500 py-1 px-2" value="course3">Course title</option>
  </select>
</div>


<div className="flex flex-row items-center w-full">
  <label htmlFor="cvno" className="text-gray-800">CV No</label>
  <input
  title="cvno"
    name="cvno"
    defaultValue={10001}
    className="text-gray-800 bg-transparent text-right border-none rounded-lg px-2 py-1 flex-grow"
  />
</div>


<div className="flex flex-row bg-transparent overflow-hidden w-full">
  <label htmlFor="update" className="text-gray-800">Update</label>
  <input
  title="ีupdate"
    name="update"
    defaultValue={10001}
    className="text-gray-800 text-right border-none rounded-lg px-2 py-1 flex-grow"
  />
  </div>
</div>

</div>

            </div>
        </div>
      </div>
      <div className="bg-white mt-2 p-2 border-t-8 border-sky-500 rounded-xl shadow-zine-400 shadow-inner">

   
        <div className="flex items-center px-6 space-x-3 font-semibold text-gray-900 text-xl leading-8">
  
  <Image src='/asset/comment.svg'
        alt='comment'
        width={24}
        height={24}
        />
  <h2 className='tracking-wide'>History</h2> 
        </div>

        <div className="grid grid-cols-1 bg-slate-50 shadow-inner rounded-xl border-2 border-inner shadow-zinc-500/49 shadow-innerfirst-line:border-zine-500" >
             <div className="w-full flex flex-col items-start px-2 py-2 gap-4 shadow-blue-500/40">


            <div className="flex flex-row items-center w-full justify-between">
  <label htmlFor="status" className="text-gray-800">Status</label>
  
  <select className="max-w-[280px] bg-transparent">
    <option className="bg-green-500 py-1 px-2" value="course1">Course title</option>
    <option className="bg-blue-500 py-1 px-2 "value="course2">Course title</option>
    <option className="bg-orange-500 py-1 px-2" value="course3">Course title</option>
  </select>
</div>


<div className="flex flex-row items-center w-full">
  <label htmlFor="cvno" className="text-gray-800">CV No</label>
  <input
  title="cvno"
    name="cvno"
    defaultValue={10001}
    className="text-gray-800 bg-transparent text-right border-none rounded-lg px-2 py-1 flex-grow"
  />
</div>


<div className="flex flex-row bg-transparent overflow-hidden w-full">
  <label htmlFor="update" className="text-gray-800">Update</label>
  <input
  title="ีupdate"
    name="update"
    defaultValue={10001}
    className="text-gray-800 text-right border-none rounded-lg px-2 py-1 flex-grow"
  />
  </div>
</div>
  </div>
      </div>
      {/* End of friends card */}
    </div>
    {/* Right Side */}
    <div className="w-full md:w-9/12 mx-2">
      {/* Profile tab */}
     
      <div className="bg-white shadow-sm rounded-sm">
    
      <div className="w-full bg-white mx-auto">
  <div className="px-4">
    <nav className="flex flex-wrap gap-4">
      <a
        href="#"
        className="inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm font-medium text-white transition-all duration-200 ease-in-out hover:border-b-purple-600 hover:text-purple-600"
      >
        Account
      </a>

      <a
        href="#"
        className="inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm font-medium text-white transition-all duration-200 ease-in-out hover:border-b-purple-600 hover:text-purple-600"
      >
        Settings
      </a>

      <a
        href="#"
        className="inline-flex whitespace-nowrap border-b-2 border-transparent border-b-purple-600 py-2 px-3 text-white text-sm font-semibold text-purple-600 transition-all duration-200 ease-in-out"
      >
        Orders
      </a>

      <a
        href="#"
        className="inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm font-medium text-white transition-all duration-200 ease-in-out hover:border-b-purple-600 hover:text-purple-600"
      >
        Sales
      </a>

      <a
        href="#"
        className="inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm font-medium text-white transition-all duration-200 ease-in-out hover:border-b-purple-600 hover:text-purple-600"
      >
        Suppliers
      </a>
    </nav>
    <ul className="flex items-center ml-auto justify-end space-x-3">
			<li className="inline-block">
				<a target="_blank" className="hover:text-[#3b5998]" href="#" title="Share to Facebook">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 512 512">
						<path fill="currentColor" d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z">
						</path>
					</svg>
				</a>
			</li>
			<li className="inline-block">
				<a target="_blank" className="hover:text-[#00acee]" href="#" title="Share to Twitter">
					<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path fill="currentColor" d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z">
						</path>
					</svg>
				</a>
			</li>
			<li className="inline-block">
				<a target="_blank" className="hover:text-red-700" href="#" title="Share to Instagram">
					<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path fill="currentColor" d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z">
						</path>
						<path fill="currentColor" d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z">
						</path>
						<path fill="currentColor" d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z">
						</path>
					</svg>
				</a>
			</li>
		</ul>
  </div>
</div>




        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
          <span clas="text-green-500">
            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </span>
          <span className="tracking-wide">About</span>
        </div>
        <div className="text-gray-700">
          <div className="grid md:grid-cols-2 text-sm">
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">First Name</div>
              <div className="px-4 py-2">Jane</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Last Name</div>
              <div className="px-4 py-2">Doe</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Gender</div>
              <div className="px-4 py-2">Female</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Contact No.</div>
              <div className="px-4 py-2">+11 998001001</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Current Address</div>
              <div className="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Permanant Address</div>
              <div className="px-4 py-2">Arlington Heights, IL, Illinois</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Email.</div>
              <div className="px-4 py-2">
                <a className="text-blue-800" href="mailto:jane@example.com">jane@example.com</a>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Birthday</div>
              <div className="px-4 py-2">Feb 06, 1998</div>
            </div>
          </div>
        </div>
        <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show
          Full Information</button>
      </div>
      {/* End of about section */}
      <div className="my-4" />
      {/* Experience and education */}
      <div className="bg-white p-3 shadow-sm rounded-sm">
        <div className="grid grid-cols-2">
          <div>
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
              <span clas="text-green-500">
                <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              <span className="tracking-wide">Experience</span>
            </div>
            <ul className="list-inside space-y-2">
              <li>
                <div className="text-teal-600">Owner at Her Company Inc.</div>
                <div className="text-gray-500 text-xs">March 2020 - Now</div>
              </li>
              <li>
                <div className="text-teal-600">Owner at Her Company Inc.</div>
                <div className="text-gray-500 text-xs">March 2020 - Now</div>
              </li>
              <li>
                <div className="text-teal-600">Owner at Her Company Inc.</div>
                <div className="text-gray-500 text-xs">March 2020 - Now</div>
              </li>
              <li>
                <div className="text-teal-600">Owner at Her Company Inc.</div>
                <div className="text-gray-500 text-xs">March 2020 - Now</div>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
              <span clas="text-green-500">
                <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </span>
              <span className="tracking-wide">Education</span>
            </div>
            <ul className="list-inside space-y-2">
              <li>
                <div className="text-teal-600">Masters Degree in Oxford</div>
                <div className="text-gray-500 text-xs">March 2020 - Now</div>
              </li>
              <li>
                <div className="text-teal-600">Bachelors Degreen in LPU</div>
                <div className="text-gray-500 text-xs">March 2020 - Now</div>
              </li>
            </ul>
          </div>
        </div>
        {/* End of Experience and education grid */}
      </div>
      {/* End of profile tab */}
    </div>
  </div>
</div>

</div>






  );
};

export default Navbar;
