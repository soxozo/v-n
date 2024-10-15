'use client';

import { useState, useEffect } from 'react';
import FormNewCandidate from '@/components/Form_newcandidate';
import Link from 'next/link';


export default function CandidatePage() {
  const [candidates, setCandidates] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchCandidates = async () => {
      const res = await fetch('/api/candidateview');
      const data = await res.json();
      setCandidates(data);
    };

    fetchCandidates();
  }, []);

  return (
    <div>
      <button onClick={() => setShowForm(true)}>Add Candidate</button>
      {showForm && <FormNewCandidate onClose={() => setShowForm(false)} />}
   
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Position</th>
            <th>Gender</th>
          </tr>
        </thead>
        <ul className='grid grid-cols-1 gap-8 px-1 md:grid-cols-2 lg:grid-cols-3 md:p-2 xl:p-4'>
                <li className='relative flex w-full gap-4 p-2 border border-gray-700 rounded hover:transition shadow-md hover:border-fuchsia-800 hover:shadow-fuchsia-600'>
                    <div className='absolute flex justify-center gap-1 w-10 text-xl font-bold text-center text-green-800 -top-2 -left-2'>
                        <span className='self-end text-gray-800 text-sm'>
                            1
                        </span>
                    </div>
                    <Link href='/' className='w-full overflow-hidden rounded'>
                        <img 
                            src="https://github.com/sardorazimov/e_commerce/blob/master/public/users/opa.png?raw=true" 
                            alt="Opa" 
                            className='object-cover my-auto rounded w-28 h-28' 
                        />
                    </Link>
                    <div className='flex flex-col justify-between flex-grow gap-3 px-2'>
                        <div className='w-full'>
                            <Link href='/' className='font-semibold md:text-xl text-black'>
                          
                            </Link>
        <tbody>
          
          {candidates.map((candidate) => (
            <tr key={candidate.id}>
              <td>{candidate.name}</td>
              <td>{candidate.surname}</td>
              <td>{candidate.email}</td>
              <td>{candidate.mobile}</td>
              <td>{candidate.position}</td>
              <td>{candidate.gender}</td>
            </tr>
          ))}
        </tbody>
    
  
      
  
                            <p className='pt-1 text-sm text-black'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className='flex items-center justify-between gap-1'>
                            <div className='text-sm text-gray-700'>
                                lorem
                            </div>
                            <div className='flex items-center gap-1 px-2 py-1 text-gray-700 rounded cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"></path>
                                </svg>
                                <span>
                                    Lorem Opa
                                </span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

    </div>
  );
}
