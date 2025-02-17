import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const ProtectedRoute = () =>{
    let {admin} = useAuthContext();

    return(
        !admin ? <Navigate to="/login"/> : <Outlet/>
    )
}
export default ProtectedRoute;