"use client";

import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const registerUser = async () => {
    try {
      await axios.post("http://localhost:5001/api/auth/register", formData);
      alert("Registered Successfully");
    } catch {
      alert("Register Failed");
    }
  };

  const loginUser = async () => {
    try {
      await axios.post("http://localhost:5001/api/auth/login", formData);
      alert("Login Successful");
      window.location.href = "/dashboard";
    } catch {
      alert("Login Failed");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>AI Interview Platform</h1>

      {!isLogin && (
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
      )}

      <br /><br />

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="password"
        placeholder="Password"
        type="password"
        onChange={handleChange}
      />

      <br /><br />

      {isLogin ? (
        <button onClick={loginUser}>Login</button>
      ) : (
        <button onClick={registerUser}>Register</button>
      )}

      <br /><br />

      <button onClick={() => setIsLogin(!isLogin)}>
        Switch Mode
      </button>
    </div>
  );
}