import React from "react";
import GroundImg from "../src/assets/images/ground.jpg";
import NavbarCss from "../src/assets/css/Navbar.module.css";
import { useState, useEffect } from "react";

const Header = () => {
  const [footballs, setFootballs] = useState([]);
  useEffect(() => {
    const icons = [];
    for (let i = 0; i < 10; i++) {
      icons.push(<div key={i} className={NavbarCss.footballIcon}></div>);
    }
    setFootballs(icons);
  }, []);
  return (
    <div style={{ backgroundColor: "#f1f3f2" }}>
      <div
        className="container"
        style={{
          height: "80vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {footballs}
        <div className="row  h-100">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <div className={`${NavbarCss.backgroundAnimation} text-start`}>
              <h1 className={` fw-bold pb-3  ${NavbarCss.LocandVanues}`}>
                Location & Venues
              </h1>
              <h5 className={` ${NavbarCss.headerAddres}`}>Place: Cuddalore</h5>
              <h5 className={`${NavbarCss.headerAddres}`}>
                Address: QQ38+MG4, Avenue Road,
              </h5>
              <h5 className={`${NavbarCss.headerAddres}`}>
                Manjakuppam, Cuddalore, Tamil Nadu 607001
              </h5>
              <h6 className={` fs-4 pt-3 ${NavbarCss.headerAddres}`}>
                Seamlessly explore sports venues and play with
              </h6>
              <h6 className={` fs-4 ${NavbarCss.headerAddres}`}>
                sports enthusiasts just like you!
              </h6>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src={GroundImg}
              alt="ground"
              className={`img-fluid ${NavbarCss.HeaderImage}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
