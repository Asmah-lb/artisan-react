import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";


const Profile = function () {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { token } = useAuthContext();

  async function handleCreateProfie(e) {
    e.preventDefault(); // Prevent page reload on form submission
    try {
      setIsLoading(true);

  
      // Validate inputs
      if (!name || !email || !job ) {
        alert("Please fill out all fields.");
        return;
      }
  
      const res = await fetch("https://artisan-api.up.railway.app/api/profiles/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, email, job }),
      });
  
      const data = await res.json();
      console.log(res, data);
      alert(data.message)

      // Clear form inputs after success
      setName("");
      setEmail("");
      setJob("");

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
        <h1>Create Profile</h1>
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
            type="text"
            className="text-box"
            placeholder="Job*"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="btn">
        <button
          type="submit"
          className="register-btn"
          onClick={handleCreateProfie}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Create Profile"}
        </button>
      </div>
    </div>
  );
};
export default Profile;