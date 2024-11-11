'use client'

import React, { useState } from 'react';
import Image from 'next/image';


const ProfilePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className='bg-slate-100'>
      <div className="w-full text-white bg-main-color">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="p-4 flex flex-row items-center justify-between">
            <a href="#" className="text-lg font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline">
              example profile
            </a>
            <button
              className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                )}
              </svg>
            </button>
          </div>
          <nav className={`flex-col flex-grow pb-4 md:pb-0 ${isOpen ? 'flex' : 'hidden'} md:flex md:justify-end md:flex-row`}>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex flex-row items-center space-x-2 w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent hover:bg-blue-800 md:w-auto md:inline md:mt-0 md:ml-4 hover:bg-gray-200 focus:bg-blue-800 focus:outline-none focus:shadow-outline"
              >
                <span>Jane Doe</span>
                <img className="inline h-6 rounded-full" src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4" alt="Profile" />
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className={`inline w-4 h-4 transition-transform duration-200 transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
                  <div className="py-2 bg-white text-blue-800 text-sm rounded-sm border border-main-color shadow-sm">
                    <a href="#" className="block px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Settings</a>
                    <a href="#" className="block px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Help</a>
                    <div className="border-b"></div>
                    <a href="#" className="block px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Logout</a>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>

      <div className="container mx-auto my-2 p-2">
        <div className="md:flex no-wrap md:-mx-2">
          <div className="w-full md:w-3/12 md:mx-2">

<div className="flex flex-col items-center gap-4 bg-white">
<p className="text-2xl font-bold m-2">
        Prajwal Hallale
    </p>

    <div className="relative my-4">
      
        <div className="absolute -inset-2">
            <div className="w-28 h-full max-w-sm mx-auto lg:mx-0 opacity-70 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
            </div>
        </div>
        <img src="https://lh3.googleusercontent.com/a/AGNmyxbSlMgTRzE3_SMIxpDAhpNad-_CN5_tmph1NQ1KhA=s96-c" className="relative object-cover shrink-0 h-28 w-28 z-10 rounded-xl" />
    </div>


    <div className="text-gray-400 gap-4 mb-2">
    <button className="bg-slate-100 text-gray-800 text-xs font-extralight rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md p-2 inline-flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
       <path fill="currentcolor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
      </svg>
      <span>Delete</span>
    </button>
    <button className="bg-slate-100 text-gray-800 text-xs font-extralight rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md p-2 inline-flex items-center">
     
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
      </svg>
      <span>Submit</span>
    </button>
    </div>
    
</div>

            <div className="bg-white p-3 border-t-4 border-green-400">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
          
                <Image
                src='asset/sum.svg'
                alt='sum'
                width={24}
                height={24}
                />
            <h1 className='tracking-wide'>Summary</h1> 
            </div>
             
       
              <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt
              </p>
              <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-4 divide-y rounded shadow-sm">

              <li className="flex items-center py-1">
                  <span>CV No.</span>
                  <span className="ml-auto text-xl font-mono">10001</span>
                   
                </li>


                <li className="flex items-center py-2">
                  <span>Status</span>
                  <span className="ml-auto"><span className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                </li>
                <li className="flex items-center py-2">
                  <span>Last Update</span>
                  <span className="ml-auto">Nov 07, 2016</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-3 border-t-4 border-green-400 hover:shadow my-2">
              <div className="flex items-center space-x-3 font-semibold text-gray-900 leading-8">
          <Image
          src='asset/skills.svg'
          alt='sum'
          width={24}
          height={24}
          />
      <h1 className='tracking-wide'>Test Score</h1> 
      </div>
              <div className="grid grid-cols-1">
       
                <div className="w-full text-center my-2 divide-y divide-slate-200">
       
                <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-4 divide-y rounded shadow-sm">




  <li className="flex items-center py-2">
    <span>Status</span>
    <span className="ml-auto"><span className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
  </li>

</ul>
              

                </div>
              </div>
            </div>
          </div>
         <span className="bg-gradient-to-t from-cyan-300 to-blue-300 py-1 px-4 rounded text-white text-sm"></span>
          <div className="w-full md:w-9/12 mx-2 h-64">
     


          


          <div className="py-4 rounde-lg mx-auto flex-row items-center justify-between overflow-hidden rounded-lg bg-gray-300 px-6 flex w-full">
	<div className="flex flex-row items-center space-x-3 text-sm ">
		<span className="flex items-center space-x-1">
      { /* user icon */ }
      <svg className="inline-block" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM8 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z" clipRule="evenodd" />
      </svg>
      <a className="font-semibold" href="#"> abiullah786 </a>
    </span>
		<span className="flex items-center">
      { /* date icon */ }
      <svg className="mr-1 inline-block" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M6.5 7a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
      </svg>
      May 27, 2023
    </span>

		<span className="flex items-center">
      { /* eye icon */ }
      <svg className="mr-1 inline-block" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 001.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0014.828 8a13.133 13.133 0 00-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 001.172 8z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M8 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM4.5 8a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z" clipRule="evenodd" />
      </svg>
      230 views
    </span>
	</div>

	<div className="">
		<ul className="flex items-center space-x-3">
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
<div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span className="text-green-500">
                  <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
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
            <div className="px-4 py-2 font-semibold">Permanent Address</div>
            <div className="px-4 py-2">Arlington Heights, IL, Illinois</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Email</div>
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
      <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
        Show Full Information
      </button>
    </div>

    <div className="bg-white p-3 shadow-sm rounded-sm">
      <div className="grid grid-cols-2">
        <div>
          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
            <span className="text-green-500">
              <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
            <span className="tracking-wide">Experience</span>
          </div>
          <ul className="list-inside space-y-2">
            <li>
              <div className="text-teal-600">Owner at Her Company Inc.</div>
              <div className="text-gray-500 text-xs">March 2020 - Now</div>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
            <span className="text-green-500">
              <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
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
              <div className="text-teal-600">Bachelors Degree in LPU</div>
              <div className="text-gray-500 text-xs">March 2020 - Now</div>
            </li>
          </ul> 
<div></div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
 

  );
};

export default ProfilePage;
