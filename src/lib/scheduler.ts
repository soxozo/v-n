import cron from 'node-cron';
import checkExpiredBookings from './checkExpiredBookings';

// สร้าง Cron Job เพื่อเรียกใช้งานทุก 1 ชั่วโมง
cron.schedule('0 * * * *', async () => {
  console.log('Checking for expired bookings...');
  await checkExpiredBookings();
});
