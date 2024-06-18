// src/components/Login.js
import React, { useState } from 'react';
import { loginUser } from '../api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const res = await loginUser({ email, password });
    if (res.success) {
      alert('Login successful');
      // Redirect to another page or set user state
    } else {
      alert('Login failed');
    }
  };

  return (
    <section id="login">
      <h2>Login</h2>
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
      <button onClick={handleLogin}>Login</button>
    </section>
  );
};

export default Login;
