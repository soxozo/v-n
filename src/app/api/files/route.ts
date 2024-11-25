<<<<<<< HEAD
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
=======
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
>>>>>>> 8dd8265e5be77e4ad5879c2bfed2ba2b3bbecf5b

const prisma = new PrismaClient();

export async function GET() {
  try {
    const files = await prisma.file.findMany();
    return NextResponse.json(files);
  } catch (error) {
<<<<<<< HEAD
    console.error("Error fetching files:", error);
    return NextResponse.json({ error: "Failed to fetch files" }, { status: 500 });
=======
    return NextResponse.json({ error: 'Failed to fetch files' }, { status: 500 });
>>>>>>> 8dd8265e5be77e4ad5879c2bfed2ba2b3bbecf5b
  }
}
