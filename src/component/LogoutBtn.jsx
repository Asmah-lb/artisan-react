import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

import { PiSignOutBold } from "react-icons/pi";

// const [isLoading, setIsLoading] = useState(false);


const LogoutButton = () => {
    const {logoutAdmin} = useAuthContext();
  
    const handleLogout = () => {
        logoutAdmin ();
        // setIsLoading(false)
    };
    
  
    return <div className="logout-btn"  onClick={handleLogout}>
      <PiSignOutBold />
      <p>Logout</p>
      </div>;
  };
  
  export default LogoutButton;