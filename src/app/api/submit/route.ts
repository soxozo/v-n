import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {
  const data = await request.formData();
  const firstname = data.get('firstname') as string;
  const lastname = data.get('lastname') as string;
  const mobile = data.get('mobile') as string;
  const image = data.get('image') as File | null;

  // ตรวจสอบข้อมูลซ้ำด้วย mobile number
  const existingCase = await prisma.case.findFirst({
    where: { mobile },
  });

  if (existingCase) {
    return NextResponse.json({
      error: true,
      message: `Error: Duplicate entry for ${existingCase.firstname} ${existingCase.lastname}`,
    }, { status: 400 });
  }

  let imgAddress = null;
  if (image) {
    const buffer = Buffer.from(await image.arrayBuffer());
    const filename = `${uuidv4()}-${image.name}`;
    const filePath = path.join(process.cwd(), 'public', 'upload', filename);

    fs.writeFileSync(filePath, buffer);
    imgAddress = `/upload/${filename}`;
  }

  // เพิ่มข้อมูลใหม่ในฐานข้อมูล
  await prisma.case.create({
    data: {
      firstname,
      lastname,
      mobile,
      imgAddress,
    },
  });

  return NextResponse.json({
    success: true,
    message: 'Successfully created record.',
    imgAddress,
  });
}
