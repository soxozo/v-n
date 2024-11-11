// src/app/api/product/route.ts
import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  const products = await prisma.product.findMany()
  return NextResponse.json(products)
}
