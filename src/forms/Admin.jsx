import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";


const Admin = function () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { token } = useAuthContext();

  async function handleForm(e) {
    e.preventDefault(); // Prevent page reload on form submission
    try {
      setIsLoading(true);

  
      // All input must be filled
      if (!name || !email || !password || !role) {
        alert("Please fill out all fields.");
        return;
      }
  
      const res = await fetch("https://artisan-api.up.railway.app/api/admin/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, email, password, role }),
      });
  
      const data = await res.json();
      console.log(res, data);
      alert(data.message)

      // Clear form inputs after success
      setName("");
      setEmail("");
      setPassword("");
      setRole("");

    } catch (err) {
      console.error("Error:", err.message);
      alert("An error occurred. Please try again.");

    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="register-container">
      <div className="register-content">
        <h1>Create Admin</h1>
        <div className="register-box">
          <input
            type="text"
            className="text-box"
            placeholder="Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            className="text-box"
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="text-box"
            placeholder="Password*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="text"
            className="text-box"
            placeholder="Role*"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="btn">
        <button
          type="submit"
          className="register-btn"
          onClick={handleForm}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Create Admin"}
        </button>
      </div>
    </div>
  );
};
export default Admin;
