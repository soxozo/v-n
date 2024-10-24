'use client';

import { useEffect, useState } from 'react';
import Card from '@/components/Card';

export default function ProfilePage() {

  
  const ITEMS_PER_PAGE = 20;
  const [candidates, setCandidates] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(candidates.length / ITEMS_PER_PAGE);

  useEffect(() => {
    const fetchCandidates = async () => {
      const res = await fetch('/api/candidateview');
      const data = await res.json();
      setCandidates(data);
    };

    fetchCandidates();
  }, []);


  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentCandidates = candidates.slice(startIndex, endIndex);

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
 <><div className="px-4 mx-auto max-w-7xl sm:px-6">
 <div className="relative pt-6 pb-16 sm:pb-24">
     <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
         <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
             <div className="flex items-center justify-between w-full md:w-auto">
                 <a href="#">
                     <span className="sr-only">Company Name</span>
                     <img className="w-auto h-8 sm:h-10" src="https://www.svgrepo.com/show/448244/pack.svg" loading="lazy" width="202" height="40" alt="Company Logo" />
                 </a>
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
                 <a href="#" className="text-base font-normal text-gray-500 hover:text-gray-900">Pricing</a>
             </li>
             <li>
                 <a href="#" className="text-base font-normal text-gray-500 hover:text-gray-900">Gallery</a>
             </li>
             <li>
                 <a href="#" className="text-base font-normal text-gray-500 hover:text-gray-900" target="_blank">Blog</a>
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
 <div className='bg-sky-100 m-2'>
 <div className="mx-auto px-4 md:px-8">
            <div className="items-start justify-between py-4 border-b md:flex">
                <div>
                    <h3 className="text-gray-800 text-2xl font-bold">
                        Analytics
                    </h3>
                </div>

                <div className="relative mb-4 flex flex-wrap items-stretch">
    <input
        type="search"
        className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon3" 
    />

    {/* Search button */}
    <button
        className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
        type="button"
        id="button-addon3"
        data-te-ripple-init
    >
        Search
    </button>
</div>


                <div className="items-center gap-x-3 mt-6 md:mt-0 sm:flex">
                    <a
                        href="javascript:void(0)"
                        className="block px-4 py-2 text-center text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
                    >
                        Browse reports
                    </a>
                    <a
                        href="javascript:void(0)"
                        className="block px-4 py-2 mt-3 text-center text-gray-700 duration-150 font-medium rounded-lg border hover:bg-gray-50 active:bg-gray-100 sm:mt-0 md:text-sm"
                    >
                        Engagement
                    </a>
                </div>
            </div>
        </div>
</div>

    
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {currentCandidates.map((candidate) => (
            <Card
              key={candidate.id}
              name={candidate.name}
              surname={candidate.surname}
              email={candidate.email}
              mobile={candidate.mobile} />
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

