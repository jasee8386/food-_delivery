import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminPanel from "../Components/AdminPanel";
import {isAdminLoggedIn} from "../utils/AuthenticateAdmin"
export default function AdminPage() {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const adminData = JSON.parse(localStorage.getItem("admin"));
    if (!adminData) {
      alert("Access denied! Please log in as admin.");
      navigate("/check-role"); // Or your login route
    } else {
      setAdmin(adminData);
    }
    setLoading(false);
  }, []);

  if (loading) return null;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome, Admin 🍔</h1>
      {admin && <AdminPanel />}
    </div>
  );
}
