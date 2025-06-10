import React from "react";
import { Navigate } from "react-router-dom";

// children: the component to be displayed if access is authorized
const PrivateRoute = ({ children, role }) => {

   const user = JSON.parse(localStorage.getItem("user"));
   console.log("PrivateRoute user:", user);
   // If no user found, not logged in
   if (!user) return <Navigate to="/connexion" />;
   // If a specific role is required (role is supplied) and the user's role does not match
   // if (role && user.role !== role) {
   // user.user.role +> user contains a user sub-property
   if (role && user?.user?.role !== role) {
      return <Navigate to="/connexion" />;
   }
   // If everything is OK (user logged in and authorized), we return the child component
   return children;
};

export default PrivateRoute;

