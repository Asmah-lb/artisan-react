import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Home = function () {
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleFetchProfiles() {
    try {
      setIsLoading(true);
      const res = await fetch("https://artisan-api.up.railway.app/api/profiles/");
      const data = await res.json();

      setProfiles(data.data.profiles);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(function () {
    handleFetchProfiles();
  }, []);

  console.log(profiles);

  return (
    <>
      {isLoading && (
        <p
          style={{ fontSize: "20px", fontWeight: "bold", textAlign: "center" }}
        >
          Loading...
        </p>
      )}

      <h2>HELLO</h2>
      {profiles.map((profile) => ( 
        <div key={profile._id} className="home-grid">
          <div className="home-card">
            <p>{profile.name}</p>
            <p>{profile.email}</p>
            <p>{profile.job}</p>
          </div>
        </div>
      ))}

      <NavLink
        to="/login"
        className="header-link"
        style={
          location.pathname === "/login" ? { textDecoration: "underline" } : {}
        }
      >
        Login
      </NavLink>
    </>
  );
};
export default Home;
