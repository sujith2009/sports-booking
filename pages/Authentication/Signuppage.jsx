import React from "react";
import SportsLogo from "../../src/assets/images/sports.png";
import { Link } from "react-router-dom";
// import SignupCss from "../src/assets/css/Signup.module.css";

const Signuppage = () => {
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
      <form>
        <div className="mb-3">
          <label className="form-label text-white">Name</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Email</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label text-white"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
        <p>
          Already have on account? <Link>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signuppage;
