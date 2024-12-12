import React, { createContext, useState, useContext, useEffect } from "react";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [adminLogin, setAdminLogin] = useState(false);
  useEffect(() => {
    const adminToken = localStorage.getItem("authToken");
    if (adminToken) {
      setAdminLogin(true); // If the token exists, set logged in state to true
    }
  }, []);
  return (
    <AdminContext.Provider value={{ adminLogin, setAdminLogin }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AdminContext);
};
