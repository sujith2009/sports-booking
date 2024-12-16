import React, { useState } from "react";
import cardFootBall from "../src/assets/images/footballCard.jpg";
import OurSportsCss from "../src/assets/css/Oursports.module.css";
import { useNavigate } from "react-router-dom";
const Oursports = () => {
  const [menu, setMenu] = useState("");
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "#f1f3f2" }}>
      <div className="container px-5 py-3  bg-white rounded">
        <h4 className={`text pb-3 ${OurSportsCss.popular}`}>Popular Sports</h4>
        <div className="row">
          <div
            className={`${OurSportsCss.cardContainer}`}
            onClick={() => {
              setMenu("Booking");
              navigate("/booking");
            }}
          >
            <img
              src={cardFootBall}
              className={`card-img-top ${OurSportsCss.cardImage}`}
              alt="Football"
            />
            <div className={OurSportsCss.cardOverlay}>
              <div className={OurSportsCss.cardOverlayText}>Play Football</div>
            </div>
          </div>
          <div
            className={`${OurSportsCss.cardContainer}`}
            onClick={() => {
              setMenu("Booking");
              navigate("/booking");
            }}
          >
            <img
              src={cardFootBall}
              className={`card-img-top ${OurSportsCss.cardImage}`}
              alt="Football"
            />
            <div className={OurSportsCss.cardOverlay}>
              <div className={OurSportsCss.cardOverlayText}>Play Football</div>
            </div>
          </div>
          <div
            className={`${OurSportsCss.cardContainer}`}
            onClick={() => {
              setMenu("Booking");
              navigate("/booking");
            }}
          >
            <img
              src={cardFootBall}
              className={`card-img-top ${OurSportsCss.cardImage}`}
              alt="Football"
            />
            <div className={OurSportsCss.cardOverlay}>
              <div className={OurSportsCss.cardOverlayText}>Play Football</div>
            </div>
          </div>
          <div
            className={`${OurSportsCss.cardContainer}`}
            onClick={() => {
              setMenu("Booking");
              navigate("/booking");
            }}
          >
            <img
              src={cardFootBall}
              className={`card-img-top ${OurSportsCss.cardImage}`}
              alt="Football"
            />
            <div className={OurSportsCss.cardOverlay}>
              <div className={OurSportsCss.cardOverlayText}>Play Football</div>
            </div>
          </div>
          <div
            className={`${OurSportsCss.cardContainer}`}
            onClick={() => {
              setMenu("Booking");
              navigate("/booking");
            }}
          >
            <img
              src={cardFootBall}
              className={`card-img-top ${OurSportsCss.cardImage}`}
              alt="Football"
            />
            <div className={OurSportsCss.cardOverlay}>
              <div className={OurSportsCss.cardOverlayText}>Play Football</div>
            </div>
          </div>
          <div
            className={`${OurSportsCss.cardContainer}`}
            onClick={() => {
              setMenu("Booking");
              navigate("/booking");
            }}
          >
            <img
              src={cardFootBall}
              className={`card-img-top ${OurSportsCss.cardImage}`}
              alt="Football"
            />
            <div className={OurSportsCss.cardOverlay}>
              <div className={OurSportsCss.cardOverlayText}>Play Football</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oursports;
