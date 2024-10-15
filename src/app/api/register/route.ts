import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
    try {
const { email, password, name, surname } = await request.json();

      const existingUser = await prisma.member.findUnique({
        where: { email },
      });
  
      if (existingUser) {
        return NextResponse.json({ error: 'User already exists' }, { status: 400 });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newMember = await prisma.member.create({
        data: { email, password: hashedPassword, name, surname },
      });
  
      return NextResponse.json(newMember, { status: 201 });
    } catch (error) {
      return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    };
  };
  