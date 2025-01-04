import React from "react";
import BookingCss from "../../src/assets/css/BookingList.module.css";
import { FaCircleCheck } from "react-icons/fa6";

const BookingListTwo = () => {
  const amenities = [
    {
      icon: <FaCircleCheck />,
      Showers1: "Showers",
      Showers2: "Toilets",
      Showers3: "Parking",
    },
  ];
  return (
    <div>
      <div className="col-md-6">
        <div className="card mt-4 mb-4">
          <div className="card-body">
            <h5 className={`card-title ${BookingCss.cardTitle}`}>Amenities</h5>
            {amenities.map((item, index) => (
              <div
                className="d-flex align-items-center justify-content-between"
                key={item}
              >
                <div className="d-flex align-items-center">
                  <h6 className="text pe-2 text-success">{item.icon}</h6>
                  <h6>{item.Showers1}</h6>
                </div>
                <div className="d-flex align-items-center">
                  <h6 className="text pe-2 text-success">{item.icon}</h6>
                  <h6>{item.Showers2}</h6>
                </div>
                <div className="d-flex align-items-center">
                  <h6 className="text pe-2 text-success">{item.icon}</h6>
                  <h6>{item.Showers3}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*---About Venue----*/}
        <div className="card">
          <div className="card-body">
            <h5 className={`card-title  ${BookingCss.cardTitle}`}>
              About Venue
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingListTwo;
