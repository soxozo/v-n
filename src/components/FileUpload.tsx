"use client"

import { useState } from 'react';

function FileUploadForm() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/file', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      // Handle success (e.g., show a message or redirect)
    } else {
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input type="file" name="file" onChange={handleFileChange} required />
      <button
        type="submit"
        className="ring-2 px-3 py-2 bg-blue-800 text-white rounded-md"
      >
        Upload
      </button>
    </form>
  );
}

export default FileUploadForm;
