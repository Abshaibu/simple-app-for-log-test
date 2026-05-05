"use client";
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [status, setStatus] = useState('Calling endpoint...');

  useEffect(() => {
    fetch('http://localhost:4000/dashboard', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => setStatus(`Success: ${data.message}`))
      .catch((err) => setStatus(`Error: ${err.message}`));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Dashboard Test Page</h1>
      <p>Status: {status}</p>
      <a href="/" style={{ color: 'blue', textDecoration: 'underline' }}>Back to Home</a>
    </div>
  );
}
