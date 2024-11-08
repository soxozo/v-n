import { NextRequest, NextResponse } from "next/server";
import { existsSync } from "fs";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  console.log(formData);

  const f = formData.get("file");

  if (!f) {
    return NextResponse.json({}, { status: 400 });
  }

  const file = f as File;
  const validFileTypes = [
    'image/jpeg', 'image/png', 'image/gif', 
    'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' // 
  ];

  if (!validFileTypes.includes(file.type)) {
    return NextResponse.json({ error: "Invalid file type. Please upload an image or document." }, { status: 400 });
  }

  console.log(`File name: ${file.name}`);
  console.log(`Content-Length: ${file.size}`);

  const destinationDirPath = path.join(process.cwd(), '/public/upload');
  console.log(destinationDirPath);

  const fileArrayBuffer = await file.arrayBuffer();

  if (!existsSync(destinationDirPath)) {
    await fs.mkdir(destinationDirPath, { recursive: true });
  }

  const hash = crypto.createHash('sha256').update(Buffer.from(fileArrayBuffer)).digest('hex');
  let fileName = `${hash}${path.extname(file.name)}`;

  let filePath = path.join(destinationDirPath, fileName);
  let counter = 1;
  while (existsSync(filePath)) {
    fileName = `${hash}_${counter++}${path.extname(file.name)}`;
    filePath = path.join(destinationDirPath, fileName);
  }

  await fs.writeFile(filePath, Buffer.from(fileArrayBuffer));

  const address = `/${path.join('upload', fileName).replace(/\\/g, '/')}`;


  console.log(address)

  return NextResponse.json({
    address
  });
}
