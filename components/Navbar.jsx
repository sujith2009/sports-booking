import React, { useState, useEffect } from "react";
import { Link, useNavigate, NavLink, replace } from "react-router-dom";
import NavbarCss from "../src/assets/css/Navbar.module.css";
import SportsLogo from "../src/assets/images/sports.png";
import { TbPlayVolleyball, TbBallVolleyball, TbCricket } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { useAuth } from "../context/Authcontext";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("Home");
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  // Check if the user is logged in by checking if authToken is present in localStorage
  const handleAuthClick = () => {
    if (isLoggedIn) {
      handleLogout();
    } else {
      navigate("/login", { replace: false }); // Navigate to login page
    }
  };

  // Handle logout logic
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove token
    setIsLoggedIn(false); // Update the login state
    navigate("/"); // Redirect to login page
  };

  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${NavbarCss.navbarHeader}`}>
        <div className="container-fluid">
          <Link className={`navbar-brand ${NavbarCss.navbarBrand}`} to="/">
            <img
              src={SportsLogo}
              alt="logo"
              className={`d-inline-block align-text-top ps-5 ${NavbarCss.headerLogo}`}
              width={"100%"}
              height={"80px"}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            style={{ border: "none", outline: "none" }}
          >
            {/* <span
              className="navbar-toggler-icon"
              style={{ backgroundColor: "#fff" }}
            ></span> */}
            <HiOutlineBars3BottomRight
              style={{ border: "none", outline: "none", fontSize: "40px" }}
            />
          </button>

          <div
            className="offcanvas offcanvas-bottom  h-75"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav mx-auto align-items-center">
                <NavLink to="/" className="nav-item px-3">
                  <li
                    onClick={() => {
                      setMenu("Home");
                    }}
                    className={`nav-link py-0 ${NavbarCss.listItems}`}
                  >
                    <div className="d-flex align-items-center">
                      <TbPlayVolleyball
                        color="#071952"
                        style={{ fontSize: "29px", marginRight: "10px" }}
                      />
                      Home
                    </div>
                    {menu === "Home" ? (
                      <hr className={`${NavbarCss.hrTag}`} />
                    ) : null}
                  </li>
                </NavLink>
                <NavLink to="/booking" className="nav-item px-3">
                  <li
                    onClick={() => setMenu("Booking")}
                    className={`nav-link py-0 ${NavbarCss.listItems}`}
                  >
                    <div className="d-flex align-items-center">
                      <TbBallVolleyball
                        color="#071952"
                        style={{ fontSize: "29px", marginRight: "10px" }}
                      />
                      Book
                    </div>
                    {menu === "Booking" ? (
                      <hr className={`${NavbarCss.hrTag}`} />
                    ) : null}
                  </li>
                </NavLink>
                <NavLink to="/upcoming" className="nav-item px-3">
                  <li
                    onClick={() => setMenu("upcomingMatch")}
                    className={`nav-link py-0 ${NavbarCss.listItems}`}
                  >
                    <div className="d-flex align-items-center">
                      <TbCricket
                        color="#071952"
                        style={{ fontSize: "29px", marginRight: "10px" }}
                      />
                      UpcomingMatches
                    </div>
                    {menu === "upcomingMatch" ? (
                      <hr className={`${NavbarCss.hrTag}`} />
                    ) : null}
                  </li>
                </NavLink>
              </ul>
              {/*----Navbar Authtication page---*/}
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={`nav-link py-0 px-3 ${NavbarCss.listItems}`}
                // onClick={() => navigate("/signup", { replace: false })}
                onClick={handleAuthClick}
              >
                <FaUserCircle
                  color="#071952"
                  style={{ fontSize: "29px", marginRight: "10px" }}
                />
                {isLoggedIn ? "Logout" : "Login / Signup"}
              </button>
              {/*----Navbar Authtication page End---*/}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
