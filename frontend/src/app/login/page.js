"use client";
import { useEffect, useState } from "react";

export default function Login() {
  const [status, setStatus] = useState("Calling endpoint...");

  useEffect(() => {
    fetch("https://uppity-wilderness.pipeops.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "test@example.com",
        password: "password123",
      }),
    })
      .then((res) => res.json())
      .then((data) => setStatus(`Success: ${data.message}`))
      .catch((err) => setStatus(`Error: ${err.message}`));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Login Test Page</h1>
      <p>Status: {status}</p>
      <a href="/" style={{ color: "blue", textDecoration: "underline" }}>
        Back to Home
      </a>
    </div>
  );
}
