import React, { useState, useEffect } from "react";
import SportsLogo from "../../src/assets/images/sports.png";
import { Link, useNavigate } from "react-router-dom";
import SignupCss from "../../src/assets/css/Signup.module.css";
import axios from "axios";
import { useAuth } from "../../context/Authcontext";
const Loginpage = () => {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [loginSubmit, setLoginSubmit] = useState({
    email: "",
    password: "",
  });
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(false);
  const inputChange = (e) => {
    const { name, value } = e.target;
    setLoginSubmit((prev) => ({ ...prev, [name]: value }));
  };
  const loginformSubmit = (e) => {
    e.preventDefault();
    if (formValidation()) setSubmit(true);
  };
  useEffect(() => {
    if (submit) {
      const sendData = async () => {
        try {
          const res = await axios.post(
            "http://localhost:8000/api/login",
            loginSubmit
          );

          if (res.status === 200) {
            // Make sure setIsLoggedIn is available
            setIsLoggedIn(true);

            // Example of storing the token after successful login
            localStorage.setItem("authToken", res.data.token);
            setLoginSubmit({ email: "", password: "" });
            navigate("/"); // Navigate to home after login
            alert("Login successful!");
          }
        } catch (error) {
          console.error("Login failed:", error);
          setError({ general: "Login failed. Please try again." });
        } finally {
          setSubmit(false);
        }
      };

      sendData();
    }
  }, [submit, loginSubmit, setIsLoggedIn, navigate]);

  const formValidation = () => {
    const errors = {};
    if (loginSubmit.email.trim() === "") {
      errors.email = "Email is required";
    }
    if (loginSubmit.password.trim() === "") {
      errors.password = "Password is required";
    }
    setError(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <div>
      <div className="text-center">
        <img
          src={SportsLogo}
          alt="logo"
          className="img=fluid"
          style={{ height: "150px" }}
        />
      </div>
      <form onSubmit={loginformSubmit}>
        <div className="mb-3">
          <label className={`form-label text-white ${SignupCss.labels}`}>
            Email
          </label>
          <input
            onChange={inputChange}
            value={loginSubmit.email}
            name="email"
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            style={{
              backgroundColor: "transparent",
              outline: "none",
              border: "1px solid black",
              color: "#fff",
            }}
          />
          {/* {loginSubmit.email === "" && error ? (
            <p className="text text-warning pt-1">Email is required</p>
          ) : null} */}
          {error.email && <p className="text-danger py-1">{error.email}</p>}
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className={`form-label text-white ${SignupCss.labels}`}
          >
            Password
          </label>
          <input
            onChange={inputChange}
            value={loginSubmit.password}
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            style={{
              backgroundColor: "transparent",
              outline: "none",
              border: "1px solid black",
              color: "#fff",
            }}
          />
          {/* {loginSubmit.password === "" && error ? (
            <p className="text text-warning pt-1">Password is required</p>
          ) : null} */}
          {error.password && <p className="text-danger">{error.password}</p>}
        </div>
        {error.general && <p className="text-danger">{error.general}</p>}
        <button
          type="submit"
          className={`btn btn-dark text-white w-100 rounded ${SignupCss.labels} `}
        >
          Login
        </button>
      </form>
      <p className={`text-white mt-3 ${SignupCss.labels} `}>
        Create an account?
        <button
          onClick={() => navigate("/signup")}
          className={`text-dark btn  ps-4 ${SignupCss.labels} `}
        >
          Signup
        </button>
      </p>
    </div>
  );
};

export default Loginpage;
