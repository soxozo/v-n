import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import fs from 'fs/promises';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    // รับและตรวจสอบข้อมูลจากคำขอ
    const { firstname, lastname, mobile, email, position, location, gender, age, imgAddress } = await req.json();

    // ตรวจสอบข้อมูลซ้ำในฐานข้อมูลในขั้นตอนเดียว
    const existingEntry = await prisma.profile.findFirst({
      where: { OR: [{ mobile }, { email }] },
      select: { firstname: true, lastname: true }
    });
    if (existingEntry) {
      return NextResponse.json(
        { error: 'Duplicate entry', message: `Entry already exists for ${existingEntry.firstname} ${existingEntry.lastname}` },
        { status: 400 }
      );
    }

    let imgPath = null;
    if (imgAddress) {
      imgPath = `/public/upload/${Date.now()}.png`;
      const base64Data = imgAddress.replace(/^data:image\/\w+;base64,/, '');
      const buffer = Buffer.from(base64Data, 'base64');


      await fs.writeFile(path.join(process.cwd(), imgPath), buffer);
    }

    const newEntry = await prisma.profile.create({
      data: {
        firstname,
        lastname,
        mobile,
        email,
        position,
        location,
        gender,
        age: Number(age),
        imgAddress: imgPath
      }
    });

    // ส่งการตอบกลับ
    return NextResponse.json({ success: true, imgPath });
  } catch (error: any) {
    
    console.error('API error in /api/parser:', error);
    return NextResponse.json({ error: 'Internal Server Error', message: error.message || 'Unexpected error' }, { status: 500 });
  }
}
