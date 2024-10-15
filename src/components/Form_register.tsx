'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function FormRegister() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const  router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        const res = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({ email, password, name, surname }),
            headers: { 'Content-Type': 'application/json' },
});

const data = await res.json();

if (res.ok) {
setSuccess('Registration successful!');
router.push('/login');
} else {
setError(data.error || 'Registration failed');
}
};


return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" 
        required 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password" 
        required 
      />
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="FirstName" 
        required 
      />
     <input 
        type="text" 
        value={surname} 
        onChange={(e) => setSurname(e.target.value)} 
        placeholder="LastName" 
        required 
      />
      <button type="submit">Register</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </form>
  );
}
