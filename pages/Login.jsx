import React from "react";
import Video from "../src/assets/videos/login.mp4";
import Loginpage from "./Authentication/Loginpage";

const Login = () => {
  return (
    <div>
      <div
        className="container-fluid position-relative"
        style={{ overflow: "hidden", height: "100vh" }}
      >
        {/* Video Background */}
        <video
          src={Video}
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ objectFit: "cover", zIndex: -1 }}
          autoPlay
          muted
          loop
        ></video>

        {/* Form */}
        <div className="row align-items-center justify-content-center h-100">
          <div
            className="col-10 col-sm-8 col-md-6 col-lg-4  p-4 rounded shadow"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Loginpage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
