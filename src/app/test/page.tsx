// src/app/profile/page.tsx
import React from 'react';
import { PrismaClient, Profile } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';


const prisma = new PrismaClient();

async function getProfiles(): Promise<Profile[]> {
  return await prisma.profile.findMany();
}

const ProfilePage = async () => {
  const profiles = await getProfiles();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {profiles.map((profile) => (
        <div key={profile.id} className="mx-2 my-10 rounded-xl border bg-white px-4 shadow-md sm:mx-auto sm:max-w-xl sm:px-8">
          <div className="mb-2 flex flex-col gap-y-6 border-b py-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center">
              <Image src={profile.imgAddress} alt="pp" width={20} height={20} className="rounded-full" />
              <div className="ml-4 w-56">
                <p className="text-slate-800 text-xl font-extrabold">{profile.firstname} {profile.lastname}</p>
                <p className="text-slate-500">{profile.position}</p>
              </div>
            </div>
            <button className="flex items-center justify-center gap-1 rounded-lg border border-emerald-500 px-4 py-2 font-medium text-emerald-500 focus:outline-none focus:ring hover:bg-emerald-100">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
              <span>{profile.status}</span>
            </button>
          </div>
          <div className="mb-2 flex justify-between border-b py-8 text-sm sm:text-base">
            <div className="flex flex-col items-center">
              <p className="text-slate-700 mb-1 text-xl font-extrabold">14</p>
              <p className="text-slate-500 text-sm font-medium">Posts</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-slate-700 mb-1 text-xl font-extrabold">1124</p>
              <p className="text-slate-500 text-sm font-medium">{profile.comment}</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-slate-700 mb-1 text-xl font-extrabold">25</p>
              <p className="text-slate-500 text-sm font-medium">Sponsors</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-slate-700 mb-1 text-xl font-extrabold">{profile.age}</p>
              <p className="text-slate-500 text-sm font-medium">Age</p>
            </div>
          </div>
          <div className="flex justify-between py-8">
          <button
  className="text-slate-500 hover:bg-slate-100 rounded-lg border-2 px-4 py-2 font-medium focus:outline-none focus:ring"
  disabled={profile.booking}
>
  {profile.booking ? 'Booked' : 'Available'}
</button>
<Link href={`/test/${profile.id}`}>
              <button className="rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700">
                View all
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfilePage;
