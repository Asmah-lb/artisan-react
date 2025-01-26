import React, { createContext, useContext, useState, useEffect} from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const[ admin, setAdmin] = useState(Cookies.get('admin-obj') ? JSON.parse(Cookies.get('admin-obj')) : null);
    const[ token, setToken] = useState(Cookies.get('token-obj') || null);

    function handleChange(admin, token){
        setAdmin(admin);
        setToken(token);
    };

    useEffect( function () {
        Cookies.set("admin-obj", JSON.stringify(admin));
        Cookies.set("token-obj",token);
    }, [admin, token]);


    async function logoutAdmin() {
        await fetch("http://localhost:3000/api/admin/logout", {
            method:"POST",
        });
        
        setTimeout(function () { 
            handleChange(null,null);
            Cookies.remove("admin-obj");
            Cookies.remove("token-obj");  
        }, 2000);

        return true
    }

    let contextData = {
     admin, 
     token, 
     handleChange,
     logoutAdmin
    }
    return <AuthContext.Provider value={contextData}>
        {children}
    </AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext)