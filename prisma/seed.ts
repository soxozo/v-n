import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // สร้างสมาชิก
  await prisma.member.createMany({
    data: [
      { name: 'Jane', email: 'Jane@gmail.com' },
      { name: 'Anna', email: 'Anna@gmail.com' },
      { name: 'Jame', email: 'Jame@gmail.com' },
    ],
  });

  // สร้างห้อง
  await prisma.room.createMany({
    data: [
      { roomNumber: '101', booking: false },
      { roomNumber: '102', booking: false },
    ],
  });
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
