import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const parseForm = (req: any): Promise<{ fields: formidable.Fields; files: formidable.Files }> => 
  new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });

export const saveFile = async (file: formidable.File): Promise<string> => {
  const filePath = `/upload/${Date.now()}-${file.originalFilename}`;
  const dest = path.join(process.cwd(), 'public', filePath);
  await fs.promises.mkdir(path.dirname(dest), { recursive: true });
  await fs.promises.writeFile(dest, fs.readFileSync(file.filepath));
  return filePath;
};
