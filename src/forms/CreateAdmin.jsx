import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const CreateAdmin = function () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { token } = useAuthContext();

  async function handleCreateAdmin(e) {
    e.preventDefault();
    try {
      setIsLoading(true);

      // All input must be filled
      if (!name || !email || !password ) {
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
      alert(data.message);

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
    <div className="create-container">
      <h1 className="create-header">Create Admin</h1>
      <form className="create-form" onSubmit={handleCreateAdmin}>
        <input
          type="text"
          className="create-input"
          placeholder="Name*"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          className="create-input"
          placeholder="Email*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="create-input"
          placeholder="Password*"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          className="create-input"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />
      <button type="submit" className="create-btn">
        {isLoading ? "Loading..." : "Create Admin"}
      </button>
      </form>
    </div>
  );
};
export default CreateAdmin;
