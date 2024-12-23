import React, { createContext, useState } from "react";
import axios from "axios";

// Create the AuthContext
export const AdminContext = createContext();

// AuthProvider component to wrap your app
export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null); // Tracks logged-in admin
  const [adminLogin, setadminIn] = useState(false); // Tracks login status
  const [adminerror, setAdminError] = useState(null); // Tracks login errors

  const login = async (credentials) => {
    try {
      setAdminError(null); // Clear any previous errors
      const res = await axios.post(
        "http://localhost:8000/account/admin/login",
        credentials,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (res.status === 201) {
        setAdmin(res.data.admin); // Assuming the response contains admin data
        setadminIn(true);
        return { success: true }; // Indicate successful login
      } else {
        setAdminError("Unexpected error occurred.");
        return { success: false };
      }
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);

      if (err.response?.status === 401) {
        setAdminError("Invalid email or password.");
      } else {
        setAdminError("Unable to connect to the server.");
      }

      return { success: false };
    }
  };

  const logout = () => {
    setAdmin(null);
    setadminIn(false);
    localStorage.removeItem("authToken"); // Clear any stored tokens
  };

  return (
    <AdminContext.Provider
      value={{ admin, adminLogin, login, logout, adminerror }}
    >
      {children}
    </AdminContext.Provider>
  );
};
