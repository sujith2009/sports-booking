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
                    <button
                      className="btn  w-100"
                      style={{
                        backgroundColor: "#f1f2f3",
                        color: "#758a80",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    ></button>
                  </form>

                  {/* <LoginGmailandGoogle /> */}
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
