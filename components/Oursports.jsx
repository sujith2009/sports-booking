import React, { useEffect, useState } from "react";
import cardFootBall from "../src/assets/images/footballCard.jpg";
import OurSportsCss from "../src/assets/css/Oursports.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Oursports = () => {
  const [details, setDetails] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/popular-sports/get"
        );
        setDetails(res.data);
      } catch (error) {
        console.log("Server Error", error);
      }
    };
    getData();
  }, []);
  return (
    <div style={{ backgroundColor: "#f1f3f2" }}>
      <div
        className={`container px-5 py-3  bg-white rounded ${OurSportsCss.OurSportContainer}`}
      >
        <h4 className={`text pb-3 ${OurSportsCss.popular}`}>Popular Sports</h4>
        <div className="row d-flex justify-content-center">
          {details &&
            details.map((item, index) => (
              <div
                className={`col-12  col-sm-6 col-md-4 col-lg-3 ${OurSportsCss.cardContainer}`}
                key={item._id} // Use index as the key if the items don't have unique IDs
              >
                <img
                  src={item.imageUrl}
                  className={`card-img-top rounded ${OurSportsCss.cardImage}`}
                  alt={item.sportsName || "Sport"} // Use a meaningful alt text
                />
                <h4
                  className={`text text-center mt-1 ${OurSportsCss.itemSportsName}`}
                >
                  {item.sportsName}
                </h4>
                <div className={OurSportsCss.cardOverlay}>
                  <div className={OurSportsCss.cardOverlayText}>
                    Play {item.sportsName || "Sport"}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Oursports;
