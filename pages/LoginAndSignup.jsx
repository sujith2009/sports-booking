import React from "react";
import ModelImg from "../src/assets/images/loginmodel.png";
import India from "../src/assets/images/india.png";
import LoginGmailandGoogle from "./LoginGmailandGoogle";
import NavbarCss from "../src/assets/css/Navbar.module.css";

const LoginAndSignup = () => {
  const formSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-scrollable modal-lg"
          style={{ maxHeight: "90vh" }}
        >
          <div className="modal-content" style={{ height: "100%" }}>
            <div className="row g-0" style={{ height: "100%" }}>
              {/* Left Column with Image */}
              <div
                className={`col-md-6  d-flex align-items-center justify-content-center ${NavbarCss.loginPopImage}`}
                style={{
                  backgroundColor: "#F5F7F8",
                }}
              >
                <img
                  src={ModelImg}
                  alt="Modal Image"
                  className={`img-fluid ${NavbarCss.loginPopImage}`}
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* Right Column with Content */}
              <div
                className={`col-md-6 d-flex flex-column px-3 ${NavbarCss.loginPopModelRowImage}`}
              >
                {/* Modal Header */}
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Login / Signup
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                {/* Modal Body */}
                <div
                  className="modal-body flex-grow-1 overflow-auto"
                  style={{
                    padding: "1rem",
                  }}
                >
                  {/*---Form--*/}
                  <form onSubmit={formSubmit}>
                    <label for="exampleFormControlInput1" class="form-label">
                      <span className="text">Enter Mobile No*</span>
                    </label>
                    <div class="input-group  mb-3">
                      <span class="input-group-text fw-bold" id="basic-addon1">
                        + 91
                        <img src={India} alt="" className="img-fluid ps-2" />
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <button
                      className="btn  w-100"
                      style={{
                        backgroundColor: "#f1f2f3",
                        color: "#758a80",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      Send OTP
                    </button>
                  </form>
                  <p
                    className="text text-center mt-4"
                    style={{ color: "gray" }}
                  >
                    or
                  </p>
                  <LoginGmailandGoogle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAndSignup;
