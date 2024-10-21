import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  const { roomId, memberId } = await request.json();

  // ยกเลิกการจองห้อง
  const room = await prisma.room.update({
    where: { id: roomId },
    data: { booking: false, bookingBy: null },
  });

  // อัปเดต totalBooking
  await prisma.member.update({
    where: { id: memberId },
    data: { totalBooking: { decrement: 1 } },
  });

  return NextResponse.json(room);
}
