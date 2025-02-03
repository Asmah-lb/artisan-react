import { useState } from "react";

const ProfileForm = ({ selectedProfile, onUpdate }) => {
  const [formData, setFormData] = useState(selectedProfile);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      const token = localStorage.getItem("token"); // Retrieve the stored token

  if (!token) {
    console.error("No token found! Make sure you're logged in.");
    return; // Stop execution if no token is found
  }


    fetch(`https://artisan-api.up.railway.app/api/profiles/${formData._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((updatedProfile) => onUpdate(updatedProfile))
      .catch((err) => console.error("Error updating profile:", err));
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Job:
          <input
            type="text"
            name="job"
            value={formData.job}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfileForm;
