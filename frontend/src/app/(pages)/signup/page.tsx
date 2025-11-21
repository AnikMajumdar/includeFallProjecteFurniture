import React, {useState, useEffect} from "react";
import "./signup.scss";

export default function Signup() {
  return (
    <div className="signup-container">
      <h1 className="main-title">Furniture E-Commerce</h1>

      <div className="signup-card">
        <h2>Create Account</h2>

        <form>
          <div className="form-group">
            <label>Username</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <button type="button" className="signup-btn">
            Sign Up
          </button>
        </form>

        <p className="login-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

