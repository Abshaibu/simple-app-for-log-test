export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Backend Log Test App</h1>
      <p>Select a page below to test the corresponding backend endpoint. The backend will log the request to the console.</p>
      <ul style={{ lineHeight: '2' }}>
        <li><a href="/login" style={{ color: 'blue', textDecoration: 'underline' }}>Login Test Page</a></li>
        <li><a href="/signup" style={{ color: 'blue', textDecoration: 'underline' }}>Signup Test Page</a></li>
        <li><a href="/dashboard" style={{ color: 'blue', textDecoration: 'underline' }}>Dashboard Test Page</a></li>
        <li><a href="/otp" style={{ color: 'blue', textDecoration: 'underline' }}>OTP Test Page</a></li>
        <li><a href="/reset-password" style={{ color: 'blue', textDecoration: 'underline' }}>Reset Password Test Page</a></li>
      </ul>
    </div>
  );
}
