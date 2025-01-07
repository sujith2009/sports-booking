import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import BookingCss from "../../src/assets/css/BookingList.module.css";
import BookingListTwo from "./BookingListTwo";

const Bookinglist = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();
  const timing = "10:00 AM - 5:30 PM";

  if (!state) {
    return <p>Loading or No data available!</p>;
  }
  const handleNextPage = (id, item) => {
    navigate(`/booking-list/book-now`, { state: { id, item } });
  };
  return (
    <div>
      <div className="container mt-5 mb-2">
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-md-6">
            <h5 className={`text text-center ${BookingCss.listSportsName}`}>
              {state.bookSportsName}
            </h5>
            <img
              src={state.imageUrl}
              alt="logo"
              className={`img-fluid ${BookingCss.listImage}`}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="col-12 col-md-6 mt-3">
            <div className="d-flex flex-column justify-content-end align-items-center align-items-md-end">
              <button
                type="button"
                className={`btn py-2 w-75 w-md-75 w-sm-100 ${BookingCss.BookingButton}`}
                onClick={() => handleNextPage(state._id, state)}
              >
                Book Now
              </button>
              <div
                className="card mt-3"
                style={{
                  width: "100%",
                  maxWidth: "29.8rem",
                }}
              >
                <div className="card-body">
                  <h5 className={`card-title ${BookingCss.cardTitle}`}>
                    Timing
                  </h5>
                  <p className={`text ${BookingCss.timingCss}`}>{timing}</p>
                </div>
              </div>
              {/*---Location----*/}
              <div
                className="card mt-3"
                style={{
                  width: "100%",
                  maxWidth: "29.8rem",
                }}
              >
                <div className="card-body">
                  <h5 className={`card-title ${BookingCss.cardTitle}`}>
                    Location
                  </h5>
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      className={`embed-responsive-item ${BookingCss.embedResponsive}`}
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.1548834679593!2d79.76374497503662!3d11.754137240399508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5498f438769dd7%3A0x178d1ef40134eb56!2sAnna%20Stadium!5e0!3m2!1sen!2sin!4v1735986255440!5m2!1sen!2sin"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*----About Venue Page----*/}
        <div className="row">
          <BookingListTwo />
        </div>
      </div>
    </div>
  );
};

export default Bookinglist;
