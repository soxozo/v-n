'use client'

import React, { useEffect, useState } from 'react';
import { Room } from '@prisma/client';

const HomePage = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [memberId, setMemberId] = useState<number | null>(null);

  useEffect(() => {
    const fetchRooms = async () => {
      const res = await fetch('/api/rooms');
      const data = await res.json();
      setRooms(data);
    };

    fetchRooms();
  }, []);

  const handleBooking = async (roomId: number) => {
    if (memberId) {
      await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ roomId, memberId }),
      });
      // Refresh room data
      const res = await fetch('/api/rooms');
      const data = await res.json();
      setRooms(data);
    }
  };

  const handleCancelBooking = async (roomId: number) => {
    if (memberId) {
      await fetch('/api/cancel-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ roomId, memberId }),
      });
      // Refresh room data
      const res = await fetch('/api/rooms');
      const data = await res.json();
      setRooms(data);
    }
  };

  return (
    <div>
      <h1>ห้องพักทั้งหมด</h1>
      <input
        type="number"
        placeholder="Member ID"
        value={memberId || ''}
        onChange={(e) => setMemberId(Number(e.target.value))}
      />
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            ห้องเลขที่: {room.roomNumber} | จองแล้ว: {room.booking ? 'ใช่' : 'ไม่ใช่'}
            {!room.booking ? (
              <button onClick={() => handleBooking(room.id)}>จอง</button>
            ) : (
              <button onClick={() => handleCancelBooking(room.id)}>ยกเลิกจอง</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default HomePage;
