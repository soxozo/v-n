"use client";

import { useState } from 'react';

const Parser = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleParse = (text: string) => {
    const nameRegex = /\b[A-Z][a-z]*\s[A-Z][a-z]*\b/;
    const mobileRegex = /[+\d]{0,1}[-\d()\s]+/;
    const nameMatch = text.match(nameRegex);
    const mobileMatch = text.match(mobileRegex);

    if (nameMatch) {
      const names = nameMatch[0].split(' ');
      setFirstName(names[0]);
      setLastName(names[1]);
    }

    if (mobileMatch) {
      const formattedMobile = mobileMatch[0].replace(/[^0-9]/g, '');
      setMobile(formattedMobile);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('firstname', firstName);
    formData.append('lastname', lastName);
    formData.append('mobile', mobile);
    if (imageFile) formData.append('image', imageFile);

    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();
    alert(result.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Paste text here..."
        onChange={(e) => handleParse(e.target.value)}
      />
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Mobile"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {previewImage && <img src={previewImage} alt="Preview" width={100} />}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Parser;
