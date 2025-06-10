import { Routes, Route } from "react-router-dom"
// import React, { useEffect, useState } from 'react';
import './App.css';
import "./css/homeStyle.css"
import "./css/aboutStyle.css"
import "./css/heroStyle.css"
import "./css/serviceStyle.css"
import "./css/shopStyle.css"
import "./css/adminStyle.css"
import "./css/userStyle.css"
import "./css/commonStyle.css"
import "./css/notFoundStyle.css"

import Home from './Pages/Home';
import About from "./Pages/About";
import Coachings from "./Pages/Coachings";
import Coaching from "./Pages/Coaching";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Command from "./Pages/Command";
import Shop from "./Pages/Shop";
import Dashboard from "./Pages/Dashboard";
import Admin from "./Pages/Admin";
import AdminAdd from "./Pages/AdminAdd";
import AdminDetails from "./Pages/AdminDetails";
import AllUsers from "./Pages/AllUsers";
import PageNotFound from "./Pages/PageNotFound";
import PrivateRoute from "./Components/PrivateRoute";

// const App = () => {
//   const [isLogged, setIsLogged] = useState(false)
//   const [isAdmin, setIsAdmin] = useState(false)

//   useEffect(() => {

//     const user = JSON.parse(localStorage.getItem("user")) 
//     if (!user) {
//       setIsLogged(false)
//       setIsAdmin(false)
//     }
//     if (user.role === "Admin") {
//       setIsLogged(true)
//       setIsAdmin(true)
//     } else if (user.role === "Utilisateur") {
//       setIsLogged(true)
//       setIsAdmin(false)
//     }

//   }, [isAdmin, isLogged])

// const getUserRole = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   return {
//     isLogged: !!user,
//     isAdmin: user?.role === "Admin"
//   };
// };

const App = () => {
  // const { isLogged, isAdmin } = getUserRole();

  return (
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/coaching/:id' element={<Coaching />} />
      <Route path='/coachings/' element={<Coachings />} />
      <Route path="/connexion" element={<Login />} />
      <Route path="/inscription" element={<Register />} />

      {/* {isLogged && (
        <>
          <Route path="/shop" element={<Shop />} />
          <Route path="/commands" element={<Command />} />
        </>
      )}

      {isAdmin && (
        <>        
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/edit/:id' element={<AdminDetails />} />
          <Route path='/admin/add' element={<AdminAdd />} />
          <Route path="/users" element={<AllUsers />} />
        </>
      )} */}
      <Route path="/commands" element={
        <PrivateRoute>
          <Command />
        </PrivateRoute>
      } />
      
      <Route path="/shop" element={
        <PrivateRoute>
          <Shop />
        </PrivateRoute>
      } />
    

       <Route path="/dashboard" element={
        <PrivateRoute role="Admin">
          <Dashboard />
        </PrivateRoute>
      } />
      <Route path="/admin" element={
        <PrivateRoute role="Admin">
          <Admin />
        </PrivateRoute>
      } />
      <Route path="/admin/add" element={
        <PrivateRoute role="Admin">
          <AdminAdd />
        </PrivateRoute>
      } />
      <Route path="/edit/:id" element={
        <PrivateRoute role="Admin">
          <AdminDetails />
        </PrivateRoute>
      } />
      <Route path="/users" element={
        <PrivateRoute role="Admin">
          <AllUsers />
        </PrivateRoute>
      } />

        <Route path='*' element={<PageNotFound />} />
        {/* <Route path="/error" element={<Navigate to="/" />} /> */}


    </Routes>
  );
};


export default App;
