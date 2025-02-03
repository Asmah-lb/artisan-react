import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

async function DeleteAdmin() {
//   const { admin, token } = useAuthContext();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false); // To handle success state

//   if (!admin || !token) {
//     alert("You are not authorized or logged in.");
//     return;
//   }

//   const adminId = admin._id;

//   const handleDelete = async () => {
//     setLoading(true);
//     setError(null);
//     setSuccess(false); // Reset success state

//     try {
//       const res = await fetch(
//         `https://artisan-api.up.railway.app/api/admin/${adminId}`,
//         {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (!res.ok) {
//         throw new Error(`Failed to delete profile. Status: ${res.status}`);
//       }

//       setSuccess(true); // If deletion is successful
//     } catch (err) {
//       setError(err.message); // Handle any errors
//     } finally {
//       setLoading(false);
//     }
//   };

  return (
    <div>
      {loading && <p>Deleting...</p>}
      {success && <p style={{ color: "green" }}>Profile deleted successfully!</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleDelete}>Delete Admin</button>
    </div>
  );
}

export default DeleteAdmin;
