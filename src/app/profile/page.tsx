'use client';

import { useEffect, useState } from 'react';
import CardProfile from '@/components/CardProfile';
import { Tpersonal } from "@/../types/index"
import Image from 'next/image';
import Link from 'next/link';


export default function ProfilePage() {
  const ITEMS_PER_PAGE = 20;

  const [profiles, setProfiles] = useState<Tpersonal[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(profiles.length / ITEMS_PER_PAGE);


  useEffect(() => {
    const fetchProfiles = async () => {
      const res = await fetch('/api/viewprofile');
      const data = await res.json();
      setProfiles(data);
    };
    fetchProfiles();
  }, []);


  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProfiles = profiles.slice(startIndex, endIndex);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
 <><div className="bg-w-50 min-h-screen overflow-x-hidden">
 <div className="fixed w-full bg-white text-indigo-800 z-50 shadow-md animate-slide-down">
     <nav className="relative flex items-center shadow-2xl justify-between h-10 md:justify-center" aria-label="Global">
         <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
             <div className="flex items-center justify-between w-full md:w-auto">
                 <Link href="#">
               <Image className="w-auto h-10 sm-12 m-1"
               src="/asset/logo.svg" 
               lt="logo" 
               width={200} 
               height={50} />
                 </Link>
                 <div className="flex items-center -mr-2 md:hidden">
                     <button className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-50 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50" type="button" aria-expanded="false">
                         <span className="sr-only">Open main menu</span>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-6 h-6">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                         </svg>
                     </button>
                 </div>
             </div>
         </div>
         <div className="hidden md:flex md:space-x-10 list-none">
             <li>
                 <a href="#" className="text-base font-normal text-gray-500 hover:text-gray-900">Home</a>
             </li>
             <li>
                 <a href="#" className="text-base font-normal text-gray-500 hover:text-gray-900">Setting</a>
             </li>
             <li>
                 <a href="#" className="text-base font-normal text-gray-500 hover:text-gray-900" target="_blank">Logout</a>
             </li>
         </div>
         <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
             <div className="inline-flex rounded-full shadow">
                 <div className="inline-flex items-center px-4 py-2 text-base text-gray-900 bg-white border border-transparent rounded-full cursor-pointer font-base hover:bg-gray-50">
                     Sign in
                 </div>
             </div>
         </div>
     </nav>
 </div>
 <div className="bg-white shadow-teal-300 shadow-md rounded-lg dark:text-gray-300 flex justify-center items-center w-screen mt-16">
 <div className="w-full max-w-screen-xl px-4">
            <div className="items-start justify-between border-b md:flex">
    <div>
  <div className="flex items-center space-x-2 rounded-lg neo-shadow">
    <div className="w-10 h-10 rounded-full neo-inset flex items-center justify-center">
      <span className="text-xl">👤</span>
    </div>
    <div>
      <h2 className="font-semibold">John Doe</h2>
      <p className="text-sm text-gray-600">Hello, how are you?</p>
    </div>
  </div>
</div>

             


<div id="search-bar" className="w-120 bg-white rounded-md shadow-lg z-10">
  <form className="flex items-center justify-center p-2">
    <input type="text" placeholder="Search here" className="w-full rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" />
    <button type="submit" className="bg-gray-800 text-white rounded-md px-4 py-1 ml-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50">
      Search
    </button>
  </form>
</div>




                <div className="items-center gap-x-4 mt-6 md:mt-0 sm:flex">
      
              <button type="button" className="max-w-[150px] py-1 px-4 flex justify-center items-center border-b border-green-800 bg-white hover:bg-emerald-300 focus:ring-emerald-500 focus:ring-offset-red-200 text-emerald-500 w-full transition ease-in duration-200 text-center text-base font-tin shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
<Image className="mr-2" 
 src="/asset/addprofile.svg" alt="upload" width={20} height={20}/>
  New 
</button>


<button type="button" className="max-w-[150px] py-1 px-2 flex justify-center items-center border-b border-sky-900 bg-white hover:bg-blue-400 focus:ring-emerald-500 focus:sky-offset-red-200 text-cyan-900 w-full transition ease-in duration-200 text-center text-base font-thin shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
<Image className="mr-2" 
 src="/asset/search.svg" alt="upload" width={20} height={20}/>
 Search 
</button>
                </div>
            </div>
        </div>
</div>

    
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {currentProfiles.map((profile) => (
            <CardProfile
              key={profile.id}
              firstname={profile.firstname}
              lastname={profile.lastname}
              bookign={profile.bookign}
              imgAddress={profile.imgAddress}
              position={profile.position}
              age={profile.age}
              status={profile.status}
              comment={profile.comment}
              />
          ))}
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={previousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
          >
            Previous
          </button>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
          >
            Next
          </button>
        </div>

        <div className="mt-4 text-center">
          Page {currentPage} of {totalPages}
        </div>
      </div></>
  );
};

