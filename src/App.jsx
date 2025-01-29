import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from"./pages/Login"
import ProtectedRoute from "./pages/ProtectedRoutes";
import Dashboard from "./pages/dashboard/Dashboard"



const App = function(){
  return(
    <main className="container">
      
      
      <BrowserRouter>
      <Routes>

        <Route path="/" element= {<Login/>}></Route>
       <Route path="/login" element= {<Login/>}></Route>
   

        <Route element={<ProtectedRoute/>} > 
              <Route path="/dashboard/*" element={<Dashboard/>}></Route>

          </Route>


      </Routes>
      </BrowserRouter>
    </main>
  )
}
export default App;
