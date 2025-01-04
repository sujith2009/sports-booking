import React from "react";
import FooterLogo from "../src/assets/images/sports.png";
import FooterCss from "../src/assets/css/Footer.module.css";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#f1f3f2", paddingTop: "50px" }}>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-md-3 mb-4">
            <img
              src={FooterLogo}
              alt="footer-logo"
              className="img-fluid"
              width={"90px"}
              height={"90px"}
            />
            <h6 className={`text ${FooterCss.allRights}`}>
              &copy; 2025 Tech Star Sports Pvt. Ltd.
            </h6>
            <h6 className={`text ${FooterCss.allRights}`}>
              All Rights Reserved.
            </h6>
          </div>

          <div className="col-md-3 mb-4">
            <ul
              className={`list-unstyled text-center  ${FooterCss.footerlist}`}
            >
              <h5 className="text-start">Company</h5>
              <li className="text-start py-2">ABOUT US</li>
              <li className="text-start py-2">LEARN</li>
              <li className="text-start py-2">CONTACT</li>
              <li className="text-start py-2">PARTNER WITH US</li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <ul className={`list-unstyled text-center ${FooterCss.footerlist}`}>
              <h5 className="text-start">Social</h5>
              <li className="text-start py-2">INSTAGRAM</li>
              <li className="text-start py-2">FACEBOOK</li>
              <li className="text-start py-2">TWITTER</li>
              <li className="text-start py-2">THREADS</li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <ul className={`list-unstyled text-center ${FooterCss.footerlist}`}>
              <h5 className="text-start">Privacy & Terms</h5>
              <li className="text-start py-2">FAQS</li>
              <li className="text-start py-2">PRIVACY POLICY</li>
              <li className="text-start py-2">TERMS OF SERVICE</li>
              <li className="text-start py-2">CANCELLATION POLICY</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
