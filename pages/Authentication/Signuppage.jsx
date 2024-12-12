import React, { useState, useEffect } from "react";
import SportsLogo from "../../src/assets/images/sports.png";
import { Link, replace, useNavigate } from "react-router-dom";
import SignupCss from "../../src/assets/css/Signup.module.css";
import axios from "axios";

const Signuppage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [storeInput, setStoreInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  //Form-Submit
  const formSubmit = (e) => {
    e.preventDefault();
    if (formValidation()) setSubmit(true);
  };

  //Form-Validation
  const formValidation = () => {
    let isValid = true;
    if (storeInput.username.trim() === "") {
      setError(true);
      isValid = false;
    }
    if (
      storeInput.email.trim() === "" ||
      !/^\S+@\S+\.\S+$/.test(storeInput.email)
    ) {
      setError(true);
      isValid = false;
    }
    if (storeInput.password.trim() === "") {
      setError(true);
      isValid = false;
    } else if (storeInput.password.length < 6) {
      setEmailError("Password must be at least 6 characters long");
      isValid = false;
    } else {
      setError("");
    }
    return isValid;
  };

  useEffect(() => {
    if (submit) {
      const sendData = async () => {
        try {
          const response = await axios.post(
            "http://localhost:8000/api/signup",
            storeInput
          );
          alert("Signup successful!");
          console.log(response.data);
          // Clear the input fields
          setStoreInput({
            username: "",
            email: "",
            password: "",
          });
          navigate("/login");
        } catch (err) {
          if (err.response && err.response.status === 409) {
            alert("Email already exists,Please use a different email");
          }
          console.error(err);
          alert("Signup failed. Please try again.");
        } finally {
          setSubmit(false);
        }
      };
      sendData();
    }
  }, [submit, storeInput]);

  const inputValue = (e) => {
    const { name, value } = e.target;
    setStoreInput((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <div className="text-center">
        <img
          src={SportsLogo}
          alt=""
          className="img=fluid"
          style={{ height: "150px" }}
        />
      </div>
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label className={`form-label text-white ${SignupCss.labels}`}>
            Name
          </label>
          <input
            value={storeInput.username}
            name="username"
            onChange={inputValue}
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            style={{
              backgroundColor: "transparent",
              outline: "none",
              border: "1px solid black",
              color: "#fff",
            }}
          />
          {storeInput.username === "" && error ? (
            <p className="text text-warning pt-1">Name is required</p>
          ) : null}
        </div>
        <div className="mb-3">
          <label className={`form-label text-white ${SignupCss.labels}`}>
            Email
          </label>
          <input
            value={storeInput.email}
            name="email"
            onChange={inputValue}
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
          {storeInput.email === "" && error ? (
            <p className="text text-warning pt-1">Email is required</p>
          ) : null}
          {emailError && <p className="text text-danger pt-1">{emailError}</p>}
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className={`form-label text-white ${SignupCss.labels}`}
          >
            Password
          </label>
          <input
            value={storeInput.password}
            name="password"
            onChange={inputValue}
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
          {storeInput.password === "" && error ? (
            <p className="text text-warning pt-1">Password is required</p>
          ) : null}
        </div>
        <button
          type="submit"
          className={`btn btn-dark text-white w-100 rounded ${SignupCss.labels} `}
        >
          Submit
        </button>
      </form>
      <p className={`text-white mt-3 ${SignupCss.labels} `}>
        Already have on account?
        <button
          className={`text-dark ps-4 btn ${SignupCss.labels} `}
          onClick={() => {
            navigate("/login", { replace: false });
          }}
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default Signuppage;
