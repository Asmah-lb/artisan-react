import React, { useEffect, useState } from "react";

import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const {admin, handleChange } = useAuthContext();

  console.log(email, password);

  async function handleLogin(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("https://artisan-api.up.railway.app/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log(res, data);

      handleChange(data.data.admin, data.token);
      alert(data.message);



    } catch (err) {
      console.log(err.message);
      alert(err.message)

    } finally {
      setIsLoading(false);
    }
  }

  useEffect(function(){
      if(admin) {
        navigate('/dashboard')
      }
  }, [admin])

  return (
    <div className="login-container">
      <div className="login-content">
        <h1>Login into your account!</h1>
        <div className="login-box">
          <input
            type="email"
            className="login-text"
            placeholder="Email*"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="login-text"
            placeholder="Password*"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

        <button type="submit" onClick={handleLogin} className="login-btn">
          {isLoading ? "Loading..." : "Login"}
        </button>
      
    </div>
  );
};
export default Login;

// const [formData, setFormDAta] = useState({
//   email: "",
//   password: "",
// });

// async function handleFormChange (e) {
//   const { name, value } = e.target;
//   setFormDAta({
//     ...formData,
//     [name]: value,
//   });
// };
