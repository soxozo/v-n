import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const { email, password } = await request.json();
  
  const member = await prisma.member.findUnique({ where: { email } });
  
  if (!member || !(await bcrypt.compare(password, member.password))) {
    return NextResponse.error();
  }

  cookies().set('session', member.id.toString(), { maxAge: 14400 }); 

  return NextResponse.json({ name: member.name });
}
