import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const { name, surname, email, mobile, position, gender } = await request.json();
  const session = cookies().get('session');
  const member = await prisma.member.findUnique({ where: { id: Number(session?.value) } });

  if (!member) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const newCandidate = await prisma.candidate.create({
    data: {
      name,
      surname,
      email,
      mobile,
      position,
      gender,
    },
  });

  return NextResponse.json(newCandidate, { status: 201 });
}
