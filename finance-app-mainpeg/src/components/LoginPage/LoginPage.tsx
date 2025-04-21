import React from 'react';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <form className="login-form">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />

          <button type="submit">Login</button>
        </form>
        <p className="signup-link">Don't have an account? <a href="#">Sign Up</a></p>
      </div>
    </div>
  );
};

export default LoginPage;