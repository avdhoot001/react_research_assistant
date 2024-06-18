// src/components/Register.js
import React, { useState } from 'react';
import { registerUser } from '../api';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const res = await registerUser({ email, password });
    if (res.success) {
      alert('Registration successful');
      // Redirect to login page or set user state
    } else {
      alert('Registration failed');
    }
  };

  return (
    <section id="register">
      <h2>Register</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleRegister}>Register</button>
    </section>
  );
};

export default Register;
