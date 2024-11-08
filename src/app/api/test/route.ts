// pages/api/register.ts

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const newUser = await prismaClient.new3.create({
      data: {
        firstname: data.firstname,
        lastname: data.lastname,
        mobile: data.mobile,
        email: data.email,
        birthdate: data.birthdate,
        position: data.position,
        location: data.location,
        gender: data.gender,
        imgUrl: data.imgUrl,
      },
    });

    return NextResponse.json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}