import { useState } from "react";

export default function RoleCheck() {
  const [showAuth, setShowAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLoginClick = () => {
    const adminLogin = window.confirm("Are you an admin?");
    setIsAdmin(adminLogin);
    setShowAuth(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-6">Delicious Food at Your Fingertips 🥗</h1>
      <button
        onClick={handleLoginClick}
        className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
      >
        Login
      </button>

      {/* Auth Section */}
      {showAuth && (
        <div className="mt-10 w-full max-w-md bg-white p-6 rounded-xl shadow-md">
          {isAdmin ? (
            // Admin Login Form
            <>
              <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
              <input
                type="text"
                placeholder="Admin Username"
                className="w-full border p-2 mb-3 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border p-2 mb-4 rounded"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
                Login
              </button>
            </>
          ) : (
            // User Tabs for Login/Signup
            <UserAuthTabs />
          )}
        </div>
      )}
    </div>
  );
}

// Component for user login/signup tabbed interface
function UserAuthTabs() {
  const [tab, setTab] = useState("login");

  return (
    <>
      <div className="flex justify-around mb-4">
        <button
          onClick={() => setTab("login")}
          className={`px-4 py-2 ${tab === "login" ? "bg-green-500 text-white" : "bg-gray-200"} rounded`}
        >
          Login
        </button>
        <button
          onClick={() => setTab("signup")}
          className={`px-4 py-2 ${tab === "signup" ? "bg-green-500 text-white" : "bg-gray-200"} rounded`}
        >
          Signup
        </button>
      </div>

      {tab === "login" ? (
        <>
          <input type="text" placeholder="Email" className="w-full border p-2 mb-3 rounded" />
          <input type="password" placeholder="Password" className="w-full border p-2 mb-4 rounded" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
            Login
          </button>
        </>
      ) : (
        <>
          <input type="text" placeholder="Name" className="w-full border p-2 mb-3 rounded" />
          <input type="email" placeholder="Email" className="w-full border p-2 mb-3 rounded" />
          <input type="password" placeholder="Password" className="w-full border p-2 mb-4 rounded" />
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full">
            Signup
          </button>
        </>
      )}
    </>
  );
}
