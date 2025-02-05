
import React, { useState, useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";

const UpdateProfile = () => {
   const [isLoading, setIsLoading] = useState(false);
  const {token} = useAuthContext()
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    job: "",
  });

  useEffect(() => {
    fetch("https://artisan-api.up.railway.app/api/profiles/") 
      .then((res) => res.json())
      .then((data) => setProfiles(data.data.profiles))
      .catch((err) => console.error("Error fetching profiles:", err));
  }, []);

  const handleSelectProfile = (profileId) => {
    fetch(`https://artisan-api.up.railway.app/api/profiles/${profileId}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedProfile(profileId);
        setFormData({
          name: data.data.profile.name,
          email: data.data.profile.email,
          job: data.data.profile.job,
        });
      })
      .catch((err) => console.error("Error fetching profile:", err));
  };

  // Handle form changes
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (update profile)
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    if (!selectedProfile) return;
    if (!token) {
      console.log("You are not authourised")
      alert("You are not authourised!")
      return;
    }
    try{
      const res = await fetch(`https://artisan-api.up.railway.app/api/profiles/${selectedProfile}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, },
        body: JSON.stringify(formData),
      })
      const data = await res.json();
      console.log(res, data);
      alert("Updated Successfully!")
  
      //clearing form
      setFormData("");
    }catch(err){
      console.log(err.message);
      alert('Try again!!, an error occured!');
    }
    finally{
      setIsLoading(false)
    }
  };

  return (
    <div>
      <h2>Profiles</h2>

      {/* Profiles Table */}
      <table border="1" width="100%">
        <thead>
          <tr>
          <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Job</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile) => (
            <tr key={profile._id}>
              <td>{profile._id}</td>
              <td>{profile.name}</td>
              <td>{profile.email}</td>
              <td>{profile.job}</td>
              <td>
                <button onClick={() => handleSelectProfile(profile._id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update Form */}
      {selectedProfile && (
        <form  style={{ marginTop: "20px" }}>
          <h3>Update Profile</h3>
          <input type="text" placeholder="name" name="name" value={formData.name} onChange={handleFormChange} required />
          <input type="email" placeholder="email" name="email" value={formData.email} onChange={handleFormChange} required />
          <input type="text" placeholder="job" name="job" value={formData.job} onChange={handleFormChange} required />
          <button onClick={handleUpdateProfile} type="submit">{isLoading? "Loading..." : "Update Profile"}</button>
        </form>
      )}
    </div>
  );
};

export default UpdateProfile;
