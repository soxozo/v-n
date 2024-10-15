import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma'; 

export async function POST(request: Request) {
  const { email, password, name } = await request.json();
  
  const hashedPassword = await bcrypt.hash(password, 10);
  const newMember = await prisma.member.create({
    data: { email, password: hashedPassword, name },
  });

  return NextResponse.json(newMember);
}
