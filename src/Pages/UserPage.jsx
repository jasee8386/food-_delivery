// src/pages/UserDashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserPage() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
      alert("You must be logged in to access this page.");
      navigate("/"); // Redirect to home/login
    } else {
      setUser(loggedInUser);
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">User Page</h1>
        {user && (
          <>
            <p className="mb-2 text-gray-600">Welcome, <strong>{user.name}</strong>!</p>
            <p className="text-sm text-gray-500">Email: {user.email}</p>
          </>
        )}
      </div>
    </div>
  );
}
