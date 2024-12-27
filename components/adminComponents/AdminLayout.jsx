import React from "react";
import AdminSidebar from "../../pages/admin/AdminSidebar";
import AdminNavbar from "../../pages/admin/AdminNavbar";
import AdminCss from "../../src/assets/css/Admin.module.css";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 d-none d-md-block">
            <div
              className="sidebar vh-100"
              style={{ backgroundColor: "#3C3D37" }}
            >
              <AdminSidebar />
            </div>
          </div>

          {/* Main Content */}
          <div className="col-md-9 col-12">
            {/* Navbar */}
            <div className="navbar">
              <AdminNavbar />
            </div>

            {/* Body Content */}
            <div className="body">{children}</div>
          </div>
        </div>

        {/* Offcanvas Sidebar for Mobile */}
        <AdminSidebar isMobile />
      </div>
    </div>
  );
};

export default AdminLayout;
