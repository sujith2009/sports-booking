import React, { useEffect, useState } from "react";
import BookCss from "../src/assets/css/Book.module.css";
import { IoSearch } from "react-icons/io5";
import BookingVenues from "./BookingVenues";
import { FaMapLocationDot } from "react-icons/fa6";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Booking = () => {
  const [change, setChange] = useState();
  const [details, setDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // Debugging line
    const getDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/venues/get-book-venues/${id}`
        );
        setDetails(res.data);
      } catch (error) {
        console.error("Server Error", error);
      }
    };

    getDetails();
  }, [id]);

  const inputChange = (e) => {
    setChange(e.target.value);
  };
  return (
    <div>
      <div className="container">
        <div className="row pt-3 d-flex justify-content-between align-items-center">
          {/* Left Section: Heading */}
          <div className="col-md-8">
            <h4 className={`text pt-4 ${BookCss.bookHeading}`}>
              Discover and Book Top Sports Complexes in Bangalore Online
            </h4>
          </div>
          {/* Right Section: Search Input */}
          <div className="col-md-4 pt-3">
            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="addon-wrapping">
                <IoSearch className="fs-5" />
              </span>
              <input
                value={change} // Controlled by state
                onChange={inputChange}
                type="text"
                className="form-control"
                placeholder="Search by Sports name"
                aria-label="Search"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
        </div>
      </div>
      <hr style={{ color: "gray" }} />
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-5 d-flex align-items-center">
            <h4 className="text-success">Venues</h4>
            <FaMapLocationDot className="ms-2 fs-3 text-success" />
          </div>
        </div>
        <div className="row">
          <BookingVenues details={details} change={change} />
        </div>
      </div>
    </div>
  );
};

export default Booking;
