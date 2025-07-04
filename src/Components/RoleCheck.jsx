import { useState, useEffect } from "react";

export default function RoleCheck() {
  const [showAuth, setShowAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminUsername, setAdminUsername] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const handleLoginClick = () => {
    const adminLogin = window.confirm("Are you an admin?");
    setIsAdmin(adminLogin);
    setShowAuth(true);
  };

  return (
    <div className="min-h-screen bg-base-100 flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-6">Delicious Food at Your Fingertips 🥗</h1>
      <button
        onClick={handleLoginClick}
        className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
      >
        Login
      </button>

      {showAuth && (
        <div className="mt-10 w-full max-w-md bg-warning-content p-6 rounded-xl shadow-md">
          {isAdmin ? (
            <>
              <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
              <input
                type="text"
                placeholder="Admin Username"
                value={adminUsername}
                onChange={(e) => setAdminUsername(e.target.value)}
                className="w-full border p-2 mb-3 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className="w-full border p-2 mb-4 rounded"
              />
              <button
                onClick={() => {
                  if (adminUsername === "admin" && adminPassword === "1234") {
                    localStorage.setItem("admin", JSON.stringify({ username: "admin" }));
                    alert("Admin logged in successfully!");
                    window.location.href = "/admin";
                  } else {
                    alert("Invalid admin credentials");
                  }
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
              >
                Login
              </button>
            </>
          ) : (
            <UserAuthTabs />
          )}
        </div>
      )}
    </div>
  );
}

function UserAuthTabs() {
  const [tab, setTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, []);

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
      setLoggedInUser(matchedUser);
      alert("User logged in successfully!");
      window.location.href = "/user"; // Optional: Navigate to user page
    } else {
      alert("Invalid credentials");
    }
  };

  const handleSignup = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const emailExists = users.some((user) => user.email === email);

    if (emailExists) {
      alert("Email already registered");
      return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));
    setLoggedInUser(newUser);
    alert("Signup successful!");
    window.location.href = "/user"; // Optional: Navigate to user page
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    setEmail("");
    setPassword("");
    setName("");
  };

  if (loggedInUser) {
    return (
      <div className="text-center">
        <h2 className="text-xl font-bold text-green-600 mb-2">
          Welcome, {loggedInUser.name} 👋
        </h2>
        <button
          onClick={handleLogout}
          className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-around mb-4">
        <button
          onClick={() => setTab("login")}
          className={`px-4 py-2 ${tab === "login" ? "bg-green-500 text-white" : "bg-gray-800"} rounded`}
        >
          Login
        </button>
        <button
          onClick={() => setTab("signup")}
          className={`px-4 py-2 ${tab === "signup" ? "bg-green-500 text-white" : "bg-gray-800"} rounded`}
        >
          Signup
        </button>
      </div>

      {tab === "login" ? (
        <>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 mb-3 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 mb-4 rounded"
          />
          <button
            onClick={handleLogin}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          >
            Login
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 mb-3 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 mb-3 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 mb-4 rounded"
          />
          <button
            onClick={handleSignup}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
          >
            Signup
          </button>
        </>
      )}
    </>
  );
}
