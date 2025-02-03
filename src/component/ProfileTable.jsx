import React, { useEffect, useState } from 'react';

const ProfileTable = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Fetch profiles from your backend
    const fetchProfiles = async () => {
      try {
        const response = await fetch("https://artisan-api.up.railway.app/api/profiles/");
        const data = await response.json();
        console.log(response,data)
        setProfiles(data.data.profiles); 
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <div>
      <h2>Profiles</h2>
      <table>
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
          {profiles.length > 0 ? (
            profiles.map((profile) => (
              <tr key={profile._id}> {/* Ensure the key is unique */}
                <td>{profile._id}</td> {/* Use _id or id */}
                <td>{profile.name}</td>
                <td>{profile.email}</td>
                <td>{profile.job}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No profiles found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProfileTable;
