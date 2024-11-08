import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const { name, surname, email, mobile, gender, position, age, fileUrl } = await request.json();
  try {
    const existingAdd = await prisma.hee.findFirst({
      where: { OR: [{ email }, { mobile }] },
    });

    if (existingAdd) {
      return NextResponse.json({ exists: true, name: existingAdd.name, surname: existingAdd.surname });
    }

    const Add = await prisma.hee.create({
      data: { name, surname, email, mobile, gender, position, age: parseInt(age), fileUrl }
    });

    return NextResponse.json({ success: true, Add });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
