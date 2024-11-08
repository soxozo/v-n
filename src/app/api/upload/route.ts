import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req: Request) {
  const data = await req.formData();
  const file = data.get("imgUrl") as Blob | null;
  if (!file) return NextResponse.json({ error: "File not provided" }, { status: 400 });

  const buffer = Buffer.from(await file.arrayBuffer());
  const filePath = path.join(process.cwd(), "public", "upload", `${Date.now()}-${file.name}`);
  await fs.writeFile(filePath, buffer);

  return NextResponse.json({ path: `/upload/${filePath.split("/").pop()}`, filename: file.name });
}
