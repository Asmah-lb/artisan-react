import React from "react";

import { Link } from "react-router-dom";

function DropdownList({icon, to, text}) {
    return(
        <>
        <li className="dashboard-item">
            <div className="dashboard-icon">{icon}</div>
            <Link  className="dashboard-link"  to={to}>{text}</Link>
        </li>
        </>
    )
    
}
export default DropdownList