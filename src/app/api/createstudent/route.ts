import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const { firstname, lastname, email, mobile, gender, position, age, fileUrl } = await request.json();
  try {
    const existingAdd = await prisma.hum.findFirst({
      where: { OR: [{ email }, { mobile }] },
    });

    if (existingAdd) {
      return NextResponse.json({ exists: true, firstname: existingAdd.firstname, lastname: existingAdd.lastname });
    }

    const Add = await prisma.hum.create({
      data: { firstname, lastname, email, mobile, gender, position, age: parseInt(age), fileUrl }
    });

    return NextResponse.json({ success: true, Add });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
