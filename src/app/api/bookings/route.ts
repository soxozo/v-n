import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  const { roomId, memberId } = await request.json();

  // จองห้อง
  const room = await prisma.room.update({
    where: { id: roomId },
    data: { booking: true, bookingBy: memberId, bookedAt: new Date() }, // เพิ่มเวลาจอง
  });

  // อัปเดต totalBooking
  await prisma.member.update({
    where: { id: memberId },
    data: { totalBooking: { increment: 1 } },
  });

  return NextResponse.json(room);
}
