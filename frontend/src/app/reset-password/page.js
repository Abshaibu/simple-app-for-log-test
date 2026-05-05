"use client";
import { useEffect, useState } from "react";

export default function ResetPassword() {
  const [status, setStatus] = useState("Calling endpoint...");

  useEffect(() => {
    fetch("https://uppity-wilderness.pipeops.app/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "test@example.com",
        newPassword: "newpassword123",
      }),
    })
      .then((res) => res.json())
      .then((data) => setStatus(`Success: ${data.message}`))
      .catch((err) => setStatus(`Error: ${err.message}`));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Reset Password Test Page</h1>
      <p>Status: {status}</p>
      <a href="/" style={{ color: "blue", textDecoration: "underline" }}>
        Back to Home
      </a>
    </div>
  );
}
