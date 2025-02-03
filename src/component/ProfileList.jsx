import { useState, useEffect } from "react";

const ProfileList = ({ onSelectProfile }) => {
    const [profiles, setProfiles] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch("https://artisan-api.up.railway.app/api/profiles/")
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched profiles:", data);
          setProfiles(Array.isArray(data.data.profiles) ? data.data.profiles : []);
        })
        .catch((err) => {
          console.error("Error fetching profiles:", err);
          setProfiles([]); // Fallback to empty array
        })
        .finally(() => setLoading(false));
    }, []);
  
    if (loading) return <p>Loading profiles...</p>;
    if (!profiles || profiles.length === 0) return <p>No profiles found.</p>;
  
    return (
      <div>
        <h2>Select a Profile to Edit</h2>
        <ul>
          {profiles.map((profile) => (
            <li key={profile._id} onClick={() => onSelectProfile(profile)}>
              {profile.name} - {profile.email} - {profile.job}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default ProfileList;
