
// src/app/profile/page.tsx
import React from 'react';
import { PrismaClient, Product } from '@prisma/client';
import Image from 'next/image';



const prisma = new PrismaClient();

async function getProducts(): Promise<Product[]> {
  return await prisma.product.findMany();
}

 
const ProfilePage = async () => {
  const products = await getProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-6">
    {products.map(product => (
      <div key={product.id} className="w-full rounded-xl p-12 shadow-2xl shadow-blue-200 bg-white">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="grid-cols-1 lg:col-span-3">
            <div className="mx-auto flex h-[90px] w-[90px] items-center justify-center rounded-full bg-blue-100 p-4">
              <Image src={product.imgUrl} alt="ee" width={90} height={90} className="rounded-full" />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-9">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-zinc-700">{product.name}</h2>
              <p
                className={`mt-2 font-semibold text-zinc-700 ${
                  product.level === 'junior'
                    ? 'bg-red-500'
                    : product.level === 'senior'
                    ? 'bg-sky-500'
                    : product.level === 'mgr'
                    ? 'bg-yellow-500'
                    : ''
                }`}
              >
                {product.level}
              </p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <p className="font-bold text-zinc-700">{product.price}</p>
                <p className="text-sm font-semibold text-zinc-700">Price</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <button
                className={`w-full rounded-xl border-2 border-blue-500 px-3 py-2 font-semibold text-blue-500 ${
                  product.sold ? 'bg-gray-300' : 'bg-yellow-300'
                }`}
                disabled={product.sold}
              >
                {product.sold ? 'Sold Out' : 'Available'}
              </button>
              <a href={`/product/${product.id}`} className="w-full rounded-xl border-2 border-blue-500 bg-white px-3 py-2 font-semibold text-blue-500 hover:bg-blue-500 hover:text-white">
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);
};


export default ProfilePage;
