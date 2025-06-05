// src/Pages/AdminPage.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminPanel from "../Components/AdminPanel";

export default function AdminPage() {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const adminData = JSON.parse(localStorage.getItem("admin"));
    if (!adminData) {
      alert("Access denied! Please log in as admin.");
      navigate("/");
    } else {
      setAdmin(adminData);
    }
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome, Admin 🍔</h1>
      {admin && <AdminPanel />}
    </div>
  );
}
