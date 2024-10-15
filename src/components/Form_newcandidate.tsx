'use client';

import { useState } from 'react';

export default function FormNewCandidate({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [position, setPosition] = useState('');
  const [gender, setGender] = useState('Male');

  const resetForm = () => {
    setName('');
    setSurname('');
    setEmail('');
    setMobile('');
    setPosition('');
    setGender('Male');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/newcandidate', {
      method: 'POST',
      body: JSON.stringify({ name, surname, email, mobile, position, gender }),
      headers: { 'Content-Type': 'application/json' },
    });
    resetForm();
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} placeholder="Surname" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Mobile" required />
      <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} placeholder="Position" required />
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <button type="submit">Save</button>
      <button type="button" onClick={onClose}>Cancel</button>
      <button type="button" onClick={resetForm}>Reset</button>
    </form>
  );
}
