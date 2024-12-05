import React, { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import NavbarCss from "../src/assets/css/Navbar.module.css";
import SportsLogo from "../src/assets/images/sports.png";
import { TbPlayVolleyball, TbBallVolleyball, TbCricket } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("Home");
  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${NavbarCss.navbarHeader}`}>
        <div className="container-fluid">
          <Link className={`navbar-brand ${NavbarCss.navbarBrand}`} to="/">
            <img
              src={SportsLogo}
              alt="logo"
              class={`d-inline-block align-text-top ps-5 ${NavbarCss.headerLogo}`}
              width={"100%"}
              height={"80px"}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto align-items-center">
              <NavLink to="/" className="nav-item px-3">
                <li
                  onClick={() => setMenu("Home")}
                  className={`nav-link py-0 ${NavbarCss.listItems}`}
                >
                  <div className="d-flex align-items-center">
                    <TbPlayVolleyball
                      color="black"
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
                      color="black"
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
                      color="black"
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
            <button
              className={`nav-link py-0 px-3 ${NavbarCss.listItems}`}
              onClick={() => navigate("/login-sign", { replace: true })}
            >
              <FaUserCircle
                color="black"
                style={{ fontSize: "29px", marginRight: "10px" }}
              />
              Login / Signup
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
