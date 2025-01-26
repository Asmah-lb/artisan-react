import React, { useState } from "react";
import Profile from "./Profile";
import Admin from "./Admin";
import LogoutButton from "../LogoutBtn";
// import { useAuthContext } from "../../context/AuthContext";

const Index = function () {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <main>
      
      <div>
        <h3>My Dashboard</h3>
        <div className="tabs">
          <span className={"tab ${activeTab ==='Profile' ? 'active-tab' : '' } "} onClick={() => setActiveTab("Profile")}> Create Profiles </span>

          <span className={"tab ${activeTab === 'Admin' ? 'active-tab' : ''} "} onClick={() => setActiveTab("Admin")}> Create Admin</span>
        </div>
        {activeTab === "Profile" ? <Profile /> : <Admin />}
      </div>
      <LogoutButton/>
    </main>
  );
};
export default Index;