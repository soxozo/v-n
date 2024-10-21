import prisma from '@/lib/prisma';

const checkExpiredBookings = async () => {
  const currentTime = new Date();
  const expiredBookings = await prisma.room.findMany({
    where: {
      booking: true,
      bookedAt: {
        lt: new Date(currentTime.getTime() - 24 * 60 * 60 * 1000), // 24 ชั่วโมงที่ผ่านมา
      },
    },
  });

  for (const room of expiredBookings) {
    await prisma.room.update({
      where: { id: room.id },
      data: { booking: false, bookingBy: null, bookedAt: null },
    });

    if (room.bookingBy) {
      await prisma.member.update({
        where: { id: room.bookingBy },
        data: { totalBooking: { decrement: 1 } },
      });
    }
  }
};

export default checkExpiredBookings;
