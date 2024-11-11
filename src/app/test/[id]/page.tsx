import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';


const prisma = new PrismaClient();

async function getProfileById(id: number) {
    return await prisma.profile.findUnique({ where: { id } });
}

const ProfileDetailPage = async ({ params }: { params: { id: string } }) => {
    const profileId = parseInt(params.id, 10);

    const profile = await getProfileById(profileId);

    if (!profile) {
        return notFound();
    }

    return (
        <><div className="p-4 max-w-2xl mx-auto">
            <h1 className="text-3xl font-extrabold mb-4">{profile.firstname} {profile.lastname}</h1>
            <p className="text-slate-500 mb-2">Position: {profile.position}</p>
            <p className="text-slate-500 mb-2">Status: {profile.status}</p>
            <p className="text-slate-500 mb-2">Age: {profile.age}</p>
            <p className="text-slate-500 mb-2">Gender: {profile.gender}</p>
            <Image src={profile.imgAddress} alt="d0" width={50} height={50} className="rounded-full h-32 w-32 mb-4" />
            <p className="text-slate-700">Comment: {profile.comment}</p>
        </div>








            <div className="grid grid-cols-1 rounded-2xl sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2 p-2 border">
        
            <div key={profile.id} className="ounded-md rounded-xl bg-gradient-to-tl from-indigo-600 to-pink-600 p-1 hover:shadow-sky-300 shadow-2xl">
                <div className="relative w-full rounded-2xl p-3 bg-slate-100 ease-in-out bg-slate-100 text-gray-700 border">

                    <button className="absolute top-4 right-4 bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs p-2 outline-none focus:outline-none ease-linear transition-all duration-150" type="button">
                    {profile.status}
                    </button>
                    <div className="grid grid-cols-1 gap-2 lg:grid-cols-12">
                        <div className="grid-cols-1 lg:col-span-3">
                            <div className="mx-auto flex items-center justify-center">
                            <Image 
                            src={profile.imgAddress}
                            alt="dasdwwd0" 
                            width={100}
                            height={150}
                            className="rounded-full"/>
                            </div>
                        </div>
                        <div className="col-span-1 lg:col-span-9">
                            <div className="text-center lg:text-left">
                                <h2 className="text-xl font-bold text-zinc-700">{profile.firstname} {profile.lastname}</h2>
                                <p className="font-semibold text-zinc-700">{profile.position}</p>
                                <p className="text-sm font-mono my-2 h-16 text-overflow-ellipsis overflow-hidden">
                                {profile.comment}
                                </p>
                            </div>

                            <div className="mt-4 grid grid-cols-3 gap-ภ text-center lg:text-left">
                                <div>
                                    <p className="text-zinc-700">{profile.salary}</p>
                                    <p className="text-sm font-semibold text-zinc-700">salary</p>
                                </div>

                                <div>
                                    <p className=" text-zinc-700">{profile.gender}</p>
                                    <p className="text-sm font-semibold text-zinc-700">gender</p>
                                </div>

                                <div>
                                    <p className=" text-zinc-700">
                                    {profile.age}
                                    </p>
                                    <p className="text-sm font-semibold text-zinc-700">age</p>
                                </div>
                            </div>

                            <div className="mt-4 grid grid-cols-2 gap-2">
                                <button
  className="w-full rounded-xl border-2 border-blue-500 bg-white px-3 py-2 font-semibold text-blue-500 hover:bg-blue-500 hover:text-white"
  disabled={profile.booking}
>
  {profile.booking ? 'Booked' : 'Available'}
</button>
<Link href={`/test/${profile.id}`}>
              <button className="w-full rounded-xl border-2 border-blue-500 bg-white px-3 py-2 font-semibold text-blue-500 hover:bg-blue-500 hover:text-white">
                View all
              </button>
            </Link>

                            </div>
                        </div>
                    </div>
                </div>
              </div>
            
            </div></>



    );
};

export default ProfileDetailPage;
