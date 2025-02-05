import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";


const CreateProfile = function () {
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

//   import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'
// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//   ],
// })

  return (
    <div className="create-container">
      <h1 className="create-header">Create Profile</h1>
      <form className="create-form" onSubmit={handleCreateProfie}>
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
          type="text"
          className="create-input"
          placeholder="Job*"
          value={job}
          onChange={(e) => setJob(e.target.value)}
          required
        />
      <button type="submit" className="create-btn">
        {isLoading ? "Loading..." : "Create Profile"}
      </button>
      </form>
    </div>
  );
};
export default CreateProfile;