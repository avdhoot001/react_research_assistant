// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Research Assistant</h1>
    <nav>
      <ul>
        <li><Link to="/search">Search Papers</Link></li>
        <li><Link to="/summary">Summarize</Link></li>
        <li><Link to="/questions">Ask Questions</Link></li>
        <li><Link to="/latex">Generate LaTeX</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
