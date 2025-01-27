import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from"./pages/Login"
import Home from "./pages/Home";
import ProtectedRoute from "./pages/ProtectedRoutes";

import Dashboard from "./pages/dashboard"


const App = function(){
  return(
    <main className="container">
      
      
      <BrowserRouter>
      <Routes>

        <Route path="/" element= {<Home/>}></Route>
       <Route path="/login" element= {<Login/>}></Route>
   

        <Route element={<ProtectedRoute/>} > 
              <Route path="/dashboard" element={<Dashboard/>}></Route>
          </Route>


      </Routes>
      </BrowserRouter>
    </main>
  )
}
export default App;
