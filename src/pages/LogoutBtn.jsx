import React from "react";
import { useAuthContext } from "../context/AuthContext";

const LogoutButton = () => {
    const {logoutAdmin} = useAuthContext();
  
    const handleLogout = () => {
        logoutAdmin ();
      // Optionally redirect the user
    //   window.location.href = "/"; // Replace "/login" with your desired route
    };
  
    return <button onClick={handleLogout}>Logout</button>;
  };
  
  export default LogoutButton;