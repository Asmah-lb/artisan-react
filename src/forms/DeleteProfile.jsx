import React, { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const DeleteProfile = (profileId) => {
  const { token } = useAuthContext();
  const [profiles, setProfiles] = useState([]);

   useEffect(() => {
      fetchProfiles();
    }, []);
  
    const fetchProfiles = async () => {
      try {
        const res = await fetch(
          "https://artisan-api.up.railway.app/api/profiles/"
        );
        const data = await res.json();
        setProfiles(data.data.profiles);
      } catch (err) {
        console.error("Error fetching profiles:", err);
      }
    };

  const handleDeleteConfirmation = (profileId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this profile?");
    
    if (isConfirmed) {
      handleDeleteProfile(profileId);
    } else {
      console.log("Profile deletion cancelled");
    }
  };
  
  const handleDeleteProfile = async (profileId) => {

    try {
      const response = await fetch(`https://artisan-api.up.railway.app/api/profiles/${profileId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error("Error deleting profile");
      }
  
      alert("Profile deleted successfully");
      fetchProfiles();
      
    } catch (error) {
      console.error("Error deleting profile!", error);
      alert("Error deleting profile");
    }
  };
  
  return (
    <div>
      <h2> Profiles</h2>
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
              <button onClick={() => handleDeleteConfirmation(profile._id)}>Delete Profile</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default DeleteProfile;
