import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma';

export async function checkSessionAndRedirect() {
  const session = cookies().get('session');

  if (!session || !session.value) {
    redirect('/login');
  }

  const member = await prisma.member.findUnique({
    where: { id: Number(session.value) },
  });

  if (!member) {
    redirect('/login');
  }

  return member;
}
