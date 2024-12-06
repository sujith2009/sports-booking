import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import NavbarCss from "../src/assets/css/Navbar.module.css";

const LoginGmailandGoogle = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="w-50 d-flex align-items-center justify-content-center justify-content-between">
          <MdOutlineMail className="fs-2" />
          <FcGoogle className="fs-2" />
        </div>
      </div>
    </div>
  );
};

export default LoginGmailandGoogle;
