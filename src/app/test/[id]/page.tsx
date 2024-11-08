import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';
import Image from 'next/image';

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
      
      
      <div className="relative w-full rounded-md p-8 shadow-2xl md:w-8/12 lg:w-6/12 hover:shadow-blue-400 transition-all ease-in-out bg-transparent text-gray-700 border mt-2">
 
    <button className="absolute top-4 right-4 bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none ease-linear transition-all duration-150" type="button">
        Connect
    </button>
                      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                          <div className="grid-cols-1 lg:col-span-3">
                              <div className="mx-auto flex h-[90px] w-[90px] items-center justify-center rounded-full bg-blue-100 p-4">
                                  <svg id="logo-39" width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M25.0001 0L50 15.0098V24.9863L25.0001 40L0 24.9863V15.0099L25.0001 0Z" fill="#A5B4FC" className="ccompli2"></path>
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 15.0098L25 0L50 15.0098V24.9863L25 40L0 24.9863V15.0098ZM25 33.631L44.6967 21.8022V18.1951L44.6957 18.1945L25 30.0197L5.30426 18.1945L5.3033 18.1951V21.8022L25 33.631ZM25 24.5046L40.1018 15.4376L36.4229 13.2298L25 20.0881L13.5771 13.2298L9.89822 15.4376L25 24.5046ZM25 14.573L31.829 10.4729L25 6.37467L18.171 10.4729L25 14.573Z" fill="#4F46E5" className="ccustom"></path>
                                      <path d="M25.0001 0L0 15.0099V24.9863L25 40L25.0001 0Z" fill="#A5B4FC" className="ccompli2" fill-opacity="0.3"></path>
                                  </svg>
                              </div>
       
                          </div>


        

                          <div className="col-span-1 lg:col-span-9">
                              <div className="text-center lg:text-left">
                                  <h2 className="text-2xl font-bold text-zinc-700">XYZ User</h2>
                                  <p className="mt-2 font-semibold text-zinc-700">@xyzuser</p>
                                  <p className="mt-4 text-zinc-500">I am a Front End Developer and UI/UX Designer</p>
                              </div>

                              <div className="mt-6 grid grid-cols-3 gap-6 text-center lg:text-left">
                                  <div>
                                      <p className="font-bold text-zinc-700">345</p>
                                      <p className="text-sm font-semibold text-zinc-700">Posts</p>
                                  </div>

                                  <div>
                                      <p className="font-bold text-zinc-700">200k</p>
                                      <p className="text-sm font-semibold text-zinc-700">Followers</p>
                                  </div>

                                  <div>
                                      <p className="font-bold text-zinc-700">38</p>
                                      <p className="text-sm font-semibold text-zinc-700">Following</p>
                                  </div>
                              </div>

                              <div className="mt-6 grid grid-cols-2 gap-4">
                                  <button className="w-full rounded-xl border-2 border-blue-500 bg-white px-3 py-2 font-semibold text-blue-500 hover:bg-blue-500 hover:text-white">Follow</button>

                                  <button className="w-full rounded-xl border-2 border-blue-500 bg-white px-3 py-2 font-semibold text-blue-500 hover:bg-blue-500 hover:text-white">View Profile</button>
                              </div>
                          </div>
                      </div>
                  </div></>

                  


  );
};

export default ProfileDetailPage;
