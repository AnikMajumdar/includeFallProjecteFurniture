"use client"
import React, {useState, useEffect} from "react";
import "@/app/(pages)/signup/signup.scss"
import Register from "@/app/(utils)/register";
import { redirect } from 'next/navigation'
import Login from "@/app/(utils)/login";


export default function login() {

  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")


  const login = async () => {
    
      const response = await Login(username, password)
      
      if (response.token) {
        redirect("/home")
      }

  }


  return (
    <div className="signup-container">
      <h1 className="main-title">Furniture E-Commerce</h1>

      <div className="signup-card">
        <h2>Log In</h2>

        <form>
          <div className="form-group">
            <label>Username</label>
            <input 
            onChange={(e) => setUsername(e.target.value)}
            type="text" placeholder="Enter your name"
             />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input 
            onChange={(e) => setPassword(e.target.value)}
            type="password" placeholder="Enter your password" />
          </div>

          <button type="button" className="signup-btn"
          onClick={login}
          >
            Login
          </button>
        </form>

        <p className="login-text">
          Dont have an account? <a href="/signup">signup</a>
        </p>
      </div>
    </div>
  );
}

