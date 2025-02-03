import React, { useState } from 'react';
import { useAuthContext } from '../context/AuthContext'; // Adjust path as necessary

function UpdateAdmin() {

  const { admin, token } = useAuthContext();  
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  console.log(newEmail,newPassword)

  const handleUpdateAdmin = async (e) => {
    e.preventDefault();
    setIsLoading(true)

    if (!admin || !token) {
      console.log("Admin not logged in")
      alert("You need to login!")
      return;
    }
//Getting Admin id from authContext==
    const adminId = admin._id;  

    try {
        if ( !newEmail || !newPassword ) {
            alert("Please fill out all fields.");
            return;
          }

      const res = await fetch(`https://artisan-api.up.railway.app/api/admin/${adminId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 

        },
        body: JSON.stringify({ email:newEmail, password:newPassword }),
      });

      const data = await res.json();
      console.log(res, data);

      //clearing form
      setNewEmail("");
      setNewPassword("");


    } catch (err) {
        console.log(err.message);
        alert('Try again!!, an error occured!');

    //   setMessage('An error occurred while updating the profile');

    }finally{
        setIsLoading(false)
    }
  };

  return (
    <div>
      <h2>Update Admin Profile</h2>
      <form onSubmit={handleUpdateAdmin}>
        <input
          type="email"
          placeholder="New Email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Current Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button type="submit" >{isLoading ? "Loading..." : "Update Admin"}</button>
      </form>
    </div>
  );
}

export default UpdateAdmin;
