import React, { useState } from 'react';
import { useAuthContext } from '../context/AuthContext'; 


function UpdateAdmin() {

  const { admin, token } = useAuthContext();
  const [name, setName] = useState('');  
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
      alert("Updated Successfully!")

      //clearing form
      setNewEmail("");
      setNewPassword("");


    } catch (err) {
        console.log(err.message);
        alert('Try again!!, an error occured!');


    }finally{
        setIsLoading(false)
    }
 };

  return (
    <div className='updateAdmin'>
      <h2 className='updateAdmin-header' >Update Admin Profile</h2>
      <form className='updateAdmin-form' onSubmit={handleUpdateAdmin}>
      <input 
          className='updateAdmin-input'
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          className='updateAdmin-input'
          type="email"
          placeholder="New Email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <input
        className='updateAdmin-input'
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button className='updateAdmin-btn' type="submit" >{isLoading ? "Loading..." : "Update Admin"}</button>
      </form>
    </div>
  );
}

export default UpdateAdmin;
