// src/app/product/[id]/page.tsx
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'

async function fetchProduct(id) {
  const res = await fetch(`/api/product/${id}`)
  return res.json()
}

export default function ProductDetailsPage({ params }) {
  const [product, setProduct] = useState(null)

  useEffect(() => {
    if (params.id) {
      fetchProduct(params.id).then(data => setProduct(data))
    }
  }, [params.id])

  if (!product) return <p>Loading...</p>

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="rounded-xl p-6 shadow-2xl shadow-blue-200 bg-white">
        <div className="flex items-center">
          <Image src={product.imgUrl} alt={product.name} width={150} height={150} className="rounded-full" />
          <div className="ml-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className={`mt-2 font-semibold ${product.level === 'junior' ? 'bg-red-500' : product.level === 'senior' ? 'bg-sky-500' : product.level === 'mgr' ? 'bg-yellow-500' : ''}`}>
              {product.level}
            </p>
          </div>
        </div>
        <div className="mt-4 text-zinc-500">รายละเอียดสินค้า</div>
      </div>
    </div>
  )
}
