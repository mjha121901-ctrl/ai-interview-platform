"use client";

export default function Dashboard() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Dashboard</h1>

      <p>Welcome to AI Interview Platform</p>

      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/";
        }}
      >
        Logout
      </button>
    </div>
  );
}