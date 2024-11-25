import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function PreviewPage() {
  const files = await prisma.file.findMany();

  const renderPreview = (file) => {
    switch (file.type) {
      case 'pdf':
        return (
          <iframe
            src={file.path}
            style={{ width: '100%', height: '500px', border: 'none' }}
            title={`Preview of ${file.name}`}
          ></iframe>
        );
      case 'image':
        return <img src={file.path} alt={file.name} style={{ maxWidth: '100%', height: 'auto' }} />;
      case 'document':
        return (
          <iframe
            src={`https://docs.google.com/gview?url=${encodeURIComponent(file.path)}&embedded=true`}
            style={{ width: '100%', height: '500px', border: 'none' }}
            title={`Document Preview: ${file.name}`}
          ></iframe>
        );
      default:
        return <p>Preview not available for this file type.</p>;
    }
  };

  return (
    <div>
      <h1>File Preview</h1>
      <ul>
        {files.map((file) => (
          <li key={file.id} style={{ marginBottom: '20px' }}>
            <h3>{file.name}</h3>
            {renderPreview(file)}
            <a href={file.path} download style={{ display: 'block', marginTop: '10px' }}>
              Download {file.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
