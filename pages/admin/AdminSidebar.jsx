import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineSportsRugby, MdSportsBaseball } from "react-icons/md";
import { GiPodiumWinner } from "react-icons/gi";
import AdminCss from "../../src/assets/css/Admin.module.css";
import { FaAlignLeft, FaUser } from "react-icons/fa";

const AdminSidebar = ({ isMobile }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      {isMobile && (
        <div
          style={{ position: "fixed", top: "10px", left: "10px", zIndex: 1100 }}
        >
          <button className="btn d-md-none mb-3" onClick={toggleSidebar}>
            <FaAlignLeft className="fs-4" />
          </button>
        </div>
      )}
      <div
        style={{
          backgroundColor: "#3C3D37",
          color: "#fff",
          position: "fixed",
          top: 0,
          left: 0,
          height: "100%",
          width: "250px",
          transition: "transform 0.3s ease-in-out",
          transform:
            isSidebarOpen || !isMobile ? "translateX(0)" : "translateX(-100%)",
          zIndex: 1050,
          overflowY: "auto",
        }}
      >
        <ul className="list-group list-group-flush">
          <Link
            className={`list-group-item text-white fw-bold ${AdminCss.listItems}`}
          >
            Sports Booking
          </Link>
          <Link
            className={`list-group-item text-white fw-bold ${AdminCss.listItems}`}
          >
            <div className="d-flex align-items-center">
              <RxDashboard className="me-2 fs-4" />
              Dashboard
            </div>
          </Link>

          <Link
            to="/admin/our-sports-types"
            className={`list-group-item text-white  fw-bold ${AdminCss.listItems}`}
          >
            <div className="d-flex align-items-center">
              <MdOutlineSportsRugby className="me-2 fs-4" />
              Our Sports Types
            </div>
          </Link>

          <Link
            to="/admin/out-winner-list"
            className={`list-group-item text-white  fw-bold ${AdminCss.listItems}`}
          >
            <div className="d-flex align-items-center">
              <GiPodiumWinner className="me-2 fs-4" />
              Our Sports Winner List
            </div>
          </Link>

          <Link
            to="/admin/booking-venues"
            className={`list-group-item text-white  fw-bold ${AdminCss.listItems}`}
          >
            <div className="d-flex align-items-center">
              <MdSportsBaseball className="me-2 fs-4" />
              Booking Venues
            </div>
          </Link>
          <Link
            to="/admin/users-details"
            className={`list-group-item text-white  fw-bold ${AdminCss.listItems}`}
          >
            <div className="d-flex align-items-center">
              <FaUser className="me-2 fs-4" />
              Users Details
            </div>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
