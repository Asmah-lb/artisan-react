import React from "react";
import LogoutButton from "../../component/LogoutBtn";
import { Link, NavLink } from "react-router-dom";

function DashboardBar() {
  return (
    <div className="dashbord-bar">
      <h3>Admin Dashboard</h3>
      <ul className="dashboard-list">
        <div className="dashboard-item">Admin</div>
        <div className="dashboard-item">Profile</div>
        <div className="dashboard-item">Settings</div>
        <div className="dashboard-item" >Logout</div>



      </ul>
    </div>
  );
}
export default DashboardBar;
