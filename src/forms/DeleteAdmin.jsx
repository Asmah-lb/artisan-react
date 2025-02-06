import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function DeleteAdmin() {

  const navigate = useNavigate(); 
  const { admin, token, logoutAdmin} = useAuthContext();
  const [loading, setLoading] = useState(false);

  if (!admin || !token) {
    alert("You are not logged in.");
    return null; 
  }

  const adminId = admin._id;

  const handleDeleteConfirmation = () => {
    const isConfirmed = window.confirm("Are you sure you want to delete this admin?");
    
    if (isConfirmed) {
      handleDeleteAdmin(adminId);
    } else {
      console.log("Admin deletion cancelled");
    }
  };

  const handleDeleteAdmin = async (adminId) => {
    setLoading(true);

    try {
      const res = await fetch(
        `https://artisan-api.up.railway.app/api/admin/${adminId}`, 
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error(`Failed to delete admin. Status: ${res.status}`);
      }

      await logoutAdmin();

      alert("Admin Deleted");
      navigate("/login"); 

    } catch (err) {
      console.log("Error: Try again!", err.message); 
      alert("Error deleting admin. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleDeleteConfirmation} >
        {loading ? "Deleting..." : "Delete Admin"}
      </button>
    </div>
  );
}

export default DeleteAdmin;
