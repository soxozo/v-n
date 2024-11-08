"use client"

import React, { useState } from 'react';

const FileUploadPage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      fetch('/api/file', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => console.log('Upload success:', data))
        .catch(error => console.error('Upload error:', error));
    }
  };

  return (
    <div>
      <h2>Upload File</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      
      {/* แสดง preview ของ image */}
      {preview && <img src={preview} alt="Image Preview" style={{ width: '200px', height: 'auto', marginTop: '10px' }} />}

      <button onClick={handleUpload} disabled={!selectedFile}>
        Upload
      </button>
    </div>
  );
};

export default FileUploadPage;
