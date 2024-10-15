"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import FullLogo from "@/public/full-logo.svg";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) router.push("/main");
  };

  return (
    <>
    
      <div className="min-h-screen bg-gradient-to-r from-violet-400 via-blue-500 to-indigo-600 py-6 flex flex-col justify-center sm:py-10">
        <div className="relative py-6 sm:max-w-md sm:mx-auto">

          <div className="relative px-4 py-4 bg-white shadow-lg sm:rounded-3xl sm:p-8 backdrop-blur-sm bg-white/30">
            <div className="max-w-md mx-auto my-auto">
              <Image src={FullLogo} alt="N-SEARCH" width={300} height={150} />

              <div className="divide-y divide-gray-400">
                <div className="py-4 text-base leading-2  text-gray-700 sm:text-lg sm:leading-7">
                  <form onSubmit={handleSubmit}>
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="peer placeholder-transparent px-6 py-2 font-mono text-blue-600 border-b-4 rounded shadow-lg border-cyan-800 shadow-cyan-600/50 hover:border-cyan-600 h-8 w-full focus:outline-none focus:border-y-stone-500 sm:rounded-3xl my-4"
                        placeholder="Email"
                      />
                      <label
                        htmlFor="email"
                        className="absolute -top-3.0 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-6 left-4 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Email 
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="peer placeholder-transparent px-6 py-2 font-mono text-blue-600 border-b-4 rounded shadow-lg border-cyan-800 shadow-cyan-600/50 hover:border-cyan-600 h-8 w-full focus:outline-none focus:border-y-stone-500 sm:rounded-3xl my-4"
                        placeholder="Password"
                      />
                      <label
                        htmlFor="password"
                        className="absolute -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-6 left-4 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Password
                      </label>
                    </div>
                    <div className="relative ">
                      <button
                        type="submit"
                        className="flex text-gray-100 my-4 justify-center transition duration-100 ease-in-out transform px-4 py-0 w-24 border-b-4 border-gray-500 hover:border-b-2 bg-gradient-to-t from-gray-400  via-gray-600 to-gray-200 rounded-2xl hover:translate-y-px">
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center mt-6"></div>
          </div>
        </div>
      </div>
    </>
  );
}
