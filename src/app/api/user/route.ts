import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const data = await req.formData();
  const name = data.get("name") as string;
  const age = data.get("age") as string;
  const imgFile = data.get("imgUrl") as File | null;

  let imgUrl = "";
  if (imgFile) {
    const uploadResponse = await fetch("http://localhost:3000/api/upload", {
      method: "POST",
      body: data,
    });
    const uploadData = await uploadResponse.json();
    imgUrl = uploadData.path;
  }

  const user = await prisma.user.create({
    data: {
      name,
      age,
      imgUrl,
    },
  });

  return NextResponse.json(user);
}
