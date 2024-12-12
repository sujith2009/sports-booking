import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import NavbarCss from "../../src/assets/css/Navbar.module.css";

const NavbarAuth = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true); // Set logged in state if token exists
    }
  }, []);

  // Handle login API call
  const handleLogin = async (credentials) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        credentials
      );
      if (response.status === 200) {
        localStorage.setItem("authToken", response.data.token); // Save token
        setIsLoggedIn(true); // Update login state
        alert("Login successful!");
        navigate("/"); // Navigate to home page after successful login
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
    }
  };

  // Handle logout by removing token and navigating to login page
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove token from storage
    setIsLoggedIn(false); // Update state to logged out
    navigate("/login"); // Navigate to login page
  };

  // Handle button click for login/signup or logout
  const handleAuthClick = () => {
    if (isLoggedIn) {
      handleLogout(); // Logout if already logged in
    } else {
      navigate("/signup", { replace: false }); // Navigate to signup page if not logged in
    }
  };

  return (
    <div>
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        className={`nav-link py-0 px-3 ${NavbarCss.listItems}`}
        onClick={handleAuthClick}
      >
        <FaUserCircle
          color="#071952"
          style={{ fontSize: "29px", marginRight: "10px" }}
        />
        {isLoggedIn ? "Logout" : " Login / Signup"}
      </button>
    </div>
  );
};

export default NavbarAuth;
