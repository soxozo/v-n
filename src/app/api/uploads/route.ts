import fs from 'fs'
import path from 'path'
import formidable from 'formidable'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req, res) {
  const form = new formidable.IncomingForm()
  form.uploadDir = path.join(process.cwd(), 'public/upload')
  form.keepExtensions = true

  form.parse(req, (err, fields, files) => {
    if (err) return res.status(500).json({ error: 'File upload error' })
    const filePath = files.file.filepath
    const fileUrl = `/upload/${path.basename(filePath)}`
    res.status(200).json({ imgUrl: fileUrl })
  })
}
