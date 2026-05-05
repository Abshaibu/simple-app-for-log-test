"use client";
import { useEffect, useState } from 'react';

export default function OTP() {
  const [status, setStatus] = useState('Calling endpoint...');

  useEffect(() => {
    fetch('http://localhost:4000/otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: 'test@example.com', otp: '123456' }),
    })
      .then((res) => res.json())
      .then((data) => setStatus(`Success: ${data.message}`))
      .catch((err) => setStatus(`Error: ${err.message}`));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>OTP Test Page</h1>
      <p>Status: {status}</p>
      <a href="/" style={{ color: 'blue', textDecoration: 'underline' }}>Back to Home</a>
    </div>
  );
}
