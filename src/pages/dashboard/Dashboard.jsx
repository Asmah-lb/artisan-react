import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import Profile from "../../forms/Profile";
import Admin from "../../forms/Admin";
import UpdateProfile from "../../forms/UpdateProfile";
import UpdateAdmin from "../../forms/UpdateAdmin";
import DeleteAdmin from "../../forms/DeleteAdmin";
import DeleteProfile from "../../forms/DeleteProfile";
import LogoutButton from "../../component/LogoutBtn";

import DropdownList from "./DropdownList";
import { CgProfile } from "react-icons/cg";
import { AiFillProfile } from "react-icons/ai";
import ProfileTable from "../../component/ProfileTable";

function Dashboard() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="dashboard-bar">
        <h2> Welcome </h2>

        {/* Admin Section */}
        <div className="dashboard-trigger" onClick={() => setIsAdminOpen(!isAdminOpen)}>
          <CgProfile />
          <p>Admins</p>
        </div>
        <div className={`dashboard-list ${isAdminOpen ? "active" : "inactive"}`}>
          <DropdownList icon={<CgProfile />} text="Create Admin" to="/dashboard/create-admin" />
          <DropdownList icon={<CgProfile />} text="Update Admin" to="/dashboard/update-admin" />
          <DropdownList icon={<CgProfile />} text="Delete Admin" to="/dashboard/delete-admin" />
        </div>

        {/* Profile Section */}
        <div className="dashboard-trigger" onClick={() => setIsProfileOpen(!isProfileOpen)}>
        <AiFillProfile />
          <p>Profiles</p>
        </div>
        <div className={`dashboard-list ${isProfileOpen ? "active" : "inactive"}`}>
          <DropdownList icon={<CgProfile />} text="Create Profile" to="/dashboard/create-profile" />
          <DropdownList icon={<CgProfile />} text="Update Profile" to="/dashboard/update-profile" />
          <DropdownList icon={<CgProfile />} text="Profile Table" to="/dashboard/profile-table" />
          <DropdownList icon={<CgProfile />} text="Delete Profile" to="/dashboard/delete-profile" />
        </div>

        <LogoutButton />
      </div>

      {/* Content Grid */}
      <div className="dashboard-content">
        <Routes>
          <Route path="create-profile" element={<Profile />} />
          <Route path="create-admin" element={<Admin />} />
          <Route path="update-admin" element={<UpdateAdmin />} />
          <Route path="update-profile" element={<UpdateProfile />} />
          <Route path="delete-admin" element={<DeleteAdmin />} />
          <Route path="delete-profile" element={<DeleteProfile />} />
          <Route path="profile-table" element={<ProfileTable />} />

        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
