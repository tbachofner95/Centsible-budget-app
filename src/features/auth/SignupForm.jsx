// src/components/AuthForm/SignupForm.jsx
import React, { useState } from 'react';

const SignupForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    setError(null);
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>

      <div>
        <label>Email:</label><br />
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </div>

      <div>
        <label>Password:</label><br />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
      </div>

      <div>
        <label>Confirm Password:</label><br />
        <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
