// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";


// import LogoutButton from "../../component/LogoutBtn";
// import Profile from "../../forms/Profile";
// import Admin from "../../forms/Admin";



// const Index = function () {
//   const [activeTab, setActiveTab] = useState("Profile");

//   return (
//     <main>
      
//       <div>
//         <h3>My Dashboard</h3>
//         <div className="tabs">
//           <span className={"tab ${activeTab ==='Profile' ? 'active-tab' : '' } "} onClick={() => setActiveTab("Profile")}> Create Profiles </span>

//           <span className={"tab ${activeTab === 'Admin' ? 'active-tab' : ''} "} onClick={() => setActiveTab("Admin")}> Create Admin</span>
//           <LogoutButton/>

//           <NavLink
//         to="/"
//         className="header-link"
//         style={
//           location.pathname === "/" ? { textDecoration: "underline" } : {}
//         }
//       >
//         Home
//       </NavLink>

//         </div>
//         {activeTab === "Profile" ? <Profile/> : <Admin />}
        
//       </div>
      
//     </main>
//   );
// };
// export default Index;