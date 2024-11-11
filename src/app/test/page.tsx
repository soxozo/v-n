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
 <><div className="grid grid-cols-1 rounded-xl sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2">
      {profiles.map(profile => (
        <div key={profile.id} className="relative w-full rounded-xl p-3 hover:shadow-sky-300 shadow-xl ease-in-out bg-slate-50 text-gray-700 border-2 border-primary-100">
          <span className={`absolute top-2 right-2 rounded-xl bg-pink-500 active:bg-pink-600  text-white hover:shadow-md shadow text-xs font-thin p-1 outline-none focus:outline-none ease-linear transition-all duration-150 ${
            profile.status === 'Available' ? 'bg-sky-500'
            : profile.status === 'Submit' ? 'bg-blue-500'
            : profile.status === 'Interview' ? 'bg-yellow-500'
            : profile.status === 'Offer' ? 'bg-orange-500'
            : profile.status === 'Done' ? 'bg-green-500'
            : ''
          }`}>
            {profile.status}
          </span>
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-12">
            <div className="grid-cols-1 lg:col-span-3">
              <div className="mx-auto flex items-center justify-center">
                <Image
                  src={profile.imgAddress}
                  alt="dasdwwd0"
                  width={100}
                  height={150}
                  className="rounded-full" />
              </div>
            </div>
            <div className="col-span-1 lg:col-span-9 ">
              <div className="text-center lg:text-left ">
                <h3 className="text-lg font-semibold text-zinc-700">{profile.firstname} {profile.lastname}</h3>
                <span className="text-base font-semibold text-zinc-700">{profile.position}</span>
                <p className="text-sm font-mono h-10 text-overflow-ellipsis overflow-hidden">
                  {profile.comment}
                </p>
              </div>

              <div className="grid grid-cols-3 text-xs font-medium gap-2 text-center lg:text-right">
                <div>
                  <p className=" text-zinc-700">
                    {profile.age}
                  </p>
                  <p className="text-zinc-700">age</p>
                </div>

                <div>
                  <p className="text-zinc-500">40,000</p>
                  <p className="text-zinc-700">salary</p>
                </div>

                <div>
                  <p className="ftext-zinc-500">{profile.gender}</p>
                  <p className="text-zinc-700">gender</p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <button
                  className="w-full rounded-md   border-2 border-sky-300 bg-white px-3 font-medium text-sky-500 hover:bg-blue-400 hover:text-white"
                  disabled={profile.booking}>

                  {profile.booking ? 'Booked' : 'Booking'}
                </button>
                <Link href={`/test/${profile.id}`}>
                  <button className="w-full rounded-md border-2 border-sky-300 bg-white px-3 font-medium text-sky-500 hover:bg-blue-400 hover:text-white">
                    View
                  </button>
                </Link>

              </div>
            </div>
          </div>
        </div>
      ))}
    </div></>
  );
};

export default ProfilePage;