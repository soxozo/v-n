'use client';

import { useEffect, useState } from 'react';
import Card from '@/components/Card'; // ตรวจสอบ path ว่าอยู่ถูกที่

export default function ProductPage() {

  
  const ITEMS_PER_PAGE = 20;
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);


  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, endIndex);

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
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {currentProducts.map((product) => (
          <Card 
            key={product.id}
            name={product.name}
            item={product.item}
            price={product.price}
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
    </div>
  );
};

