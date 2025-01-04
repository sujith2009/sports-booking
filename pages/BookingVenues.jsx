import React from "react";
import BookCss from "../src/assets/css/Book.module.css";
import { useNavigate } from "react-router-dom";

const BookingVenues = ({ details, change }) => {
  const navigate = useNavigate();
  const safeFilterValue = change || "";
  const filteredDetails = details.filter((item) =>
    item.bookSportsName.toLowerCase().includes(safeFilterValue.toLowerCase())
  );
  const handleId = (id, item) => {
    navigate(`/booking-list/${id}`, { state: item });
  };
  return (
    <div>
      <div className="row">
        <h6 className={`text mb-4 ${BookCss.busStandText}`}>
          (Bus Stand to Anna Stadium 1.3 km)
        </h6>
        {filteredDetails && filteredDetails.length > 0 ? (
          filteredDetails.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={item._id}>
              <div
                className={`card shadow w-100 cursor-pointer ${BookCss.cardDetails}`}
                onClick={() => handleId(item._id, item)}
              >
                <img
                  src={item.imageUrl}
                  alt="logo"
                  className={`card-img-top ${BookCss.venuesImages}`}
                />
                <div className={`card-body ${BookCss.cardBody}`}>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className={`text ${BookCss.bookSportsName}`}>
                      {item.bookSportsName}
                    </p>
                    <span className={`badge ${BookCss.bookable}`}>
                      Bookable
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text text-center text-success fw-bold">
            Sorry Not Available !
          </p>
        )}
      </div>
    </div>
  );
};

export default BookingVenues;
