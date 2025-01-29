import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Profile from "../../forms/Profile";
import Admin from "../../forms/Admin";
import UpdateProfile from "../../forms/UpdateProfile";
import UpdateAdmin from "../../forms/UpdateAdmin";
import DeleteAdmin from "../../forms/DeleteAdmin";
import DeleteProfile from "../../forms/DeleteProfile";
import LogoutButton from "../../component/LogoutBtn";

function Dashboard() {
  return (
    <div className="dashboard">
      {/* side bar */}
      <div className="dashboard-bar">
        <h2> Welcome</h2>

        <Link to="/dashboard/create-profile" className="dashboard-link">
          Create Profile
        </Link>

        <Link to="/dashboard/update-profile" className="dashboard-link">
          Update Profile
        </Link>

        <Link to="/dashboard/delete-profile" className="dashboard-link">
          Delete Profile
        </Link>

        <Link to="/dashboard/create-admin" className="dashboard-link">
          Create Admin
        </Link>

        <Link to="/dashboard/update-admin" className="dashboard-link">
          Update Admin
        </Link>

        <Link to="/dashboard/delete-admin" className="dashboard-link">
          Delete Admin
        </Link>

        <LogoutButton/>
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
        </Routes>
      </div>
    </div>
  );
}
export default Dashboard;


// <select
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//             required
//           >
//             <option value="">Select Role</option>
//             <option value="admin">Admin</option>
//             <option value="user">User</option>
//           </select>








// import React, { useState } from "react"; 
// import { Link, Route, Routes } from "react-router-dom";

// import Profile from "../../forms/Profile";
// import Admin from "../../forms/Admin";
// import UpdateProfile from "../../forms/UpdateProfile";
// import UpdateAdmin from "../../forms/UpdateAdmin";
// import DeleteAdmin from "../../forms/DeleteAdmin";
// import DeleteProfile from "../../forms/DeleteProfile";
// import LogoutButton from "../../component/LogoutBtn";

// function Dashboard() {
//   const [isAdminOpen, setIsAdminOpen] = useState(false);

//   const toggleAdminMenu = () => {
//     setIsAdminOpen(!isAdminOpen);
//   };

//   return (
//     <div className="dashboard">
//       {/* Sidebar */}
//       <div className="dashboard-bar">
//         <h2> Welcome</h2>

//         <Link to="/dashboard/create-profile" className="dashboard-link">
//           Create Profile
//         </Link>

//         <Link to="/dashboard/update-profile" className="dashboard-link">
//           Update Profile
//         </Link>

//         <Link to="/dashboard/delete-profile" className="dashboard-link">
//           Delete Profile
//         </Link>

//         {/* Admin dropdown */}
//         <div>
//           <button className="dashboard-link" onClick={toggleAdminMenu}>
//             Admin
//           </button>
//           {isAdminOpen && (
//             <ul>
//               <li>
//                 <Link to="/dashboard/create-admin" className="dashboard-link">
//                   Create Admin
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/dashboard/update-admin" className="dashboard-link">
//                   Update Admin
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/dashboard/delete-admin" className="dashboard-link">
//                   Delete Admin
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </div>

//         <LogoutButton />
//       </div>

//       {/* Content Grid */}
//       <div className="dashboard-content">
//         <Routes>
//           <Route path="create-profile" element={<Profile />} />
//           <Route path="create-admin" element={<Admin />} />
//           <Route path="update-admin" element={<UpdateAdmin />} />
//           <Route path="update-profile" element={<UpdateProfile />} />
//           <Route path="delete-admin" element={<DeleteAdmin />} />
//           <Route path="delete-profile" element={<DeleteProfile />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
