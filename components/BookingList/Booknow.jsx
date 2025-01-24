import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import Booknowcss from "../../src/assets/css/Booknow.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Booknow = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id, item } = state || {};
  const [error, setError] = useState(false);
  const [sportsValue, setSportsValue] = useState({
    sportsName: "",
    sportsDate: "",
    teamName: "",
    teamLeaderName: "",
    city: "",
    teamEmail: "",
  });

  const formSubmit = async (e) => {
    e.preventDefault();
    if (formValidation()) {
      try {
        console.log("Payload being sent:", sportsValue);
        const res = await axios.post(
          "http://localhost:8000/api/booknow-players",
          sportsValue,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        alert("Your application Successfully");
        setSportsValue({
          sportsName: "",
          sportsDate: "",
          teamName: "",
          teamLeaderName: "",
          city: "",
          teamEmail: "",
        });
        navigate("/");
        console.log("Response:", res.data);
      } catch (error) {
        if (error.response) {
          // Server responded with a status outside 2xx
          console.error("Error Response Data:", error.response.data);
          console.error("Error Response Status:", error.response.status);
        } else if (error.request) {
          // Request was made, no response received
          console.error("Error Request:", error.request);
        } else {
          // Something happened in setting up the request
          console.error("Error Message:", error.message);
        }
      }
    }
  };

  const formValidation = () => {
    const newErrors = {};
    if (!sportsValue.sportsName.trim())
      newErrors.sportsName = "Sports name is required.";
    if (!sportsValue.sportsDate.trim())
      newErrors.sportsDate = "Sports date is required.";
    if (!sportsValue.teamName.trim())
      newErrors.teamName = "Team name is required.";
    if (!sportsValue.teamLeaderName.trim())
      newErrors.teamLeaderName = "Team leader name is required.";
    if (!sportsValue.city.trim()) newErrors.city = "City is required.";
    if (!sportsValue.teamEmail.trim())
      newErrors.teamEmail = "Team email is required.";

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSportsValue((preValue) => ({ ...preValue, [name]: value }));
    setError((prevError) => ({ ...prevError, [name]: "" }));
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-12 mt-5 d-flex justify-content-center">
            <form onSubmit={formSubmit}>
              <div
                className={`card mb-5 ${Booknowcss.bookCard}`}
                style={{ maxWidth: "550px", width: "100%" }}
              >
                <h6
                  className={`text text-center text-white  mb-3 bg-success w-100 ${Booknowcss.BooknowHeader}`}
                >
                  Tech Star Sports Pvt. Ltd
                </h6>
                <div className="card-body px-4 py-4">
                  {/* Sports Dropdown */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <label
                      htmlFor="sportsSelect"
                      className={`col-form-label me-2 ${Booknowcss.labels}`}
                    >
                      Sports
                    </label>
                    <select
                      onChange={handleChange}
                      value={sportsValue.sportsName}
                      name="sportsName"
                      id="sportsSelect"
                      className="form-select w-75"
                      aria-label="Default select example"
                    >
                      <option value="" disabled selected>
                        Select a Sport
                      </option>
                      <option value={item.bookSportsName}>
                        {item.bookSportsName}
                      </option>
                    </select>
                  </div>
                  {/* <p className="text text-danger text-center"></p> */}
                  {error.sportsName && (
                    <p className="text text-danger text-center">
                      {error.sportsName}
                    </p>
                  )}

                  {/* Date Picker */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <label
                      htmlFor="sportsDate"
                      className={`col-form-label me-2 ${Booknowcss.labels}`}
                    >
                      Date
                    </label>
                    <input
                      onChange={handleChange}
                      value={sportsValue.sportsDate}
                      name="sportsDate"
                      type="date"
                      className="form-control w-75"
                      id="sportsDate"
                    />
                  </div>
                  {error.sportsDate && (
                    <p className="text text-danger text-center">
                      {error.sportsDate}
                    </p>
                  )}

                  {/* Team Name */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <label
                      htmlFor="sportsTeamname"
                      className={`col-form-label me-2 ${Booknowcss.labels}`}
                    >
                      Team Name
                    </label>
                    <input
                      onChange={handleChange}
                      value={sportsValue.teamName}
                      name="teamName"
                      type="text"
                      className="form-control w-75"
                      id="sportsTeamname"
                    />
                  </div>
                  {error.teamName && (
                    <p className="text text-danger text-center">
                      {error.teamName}
                    </p>
                  )}
                  {/* Team Leader Name */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <label
                      htmlFor="sports"
                      className={`col-form-label me-2 ${Booknowcss.labels}`}
                    >
                      Team Leader Name
                    </label>
                    <input
                      onChange={handleChange}
                      value={sportsValue.teamLeaderName}
                      name="teamLeaderName"
                      type="text"
                      className="form-control w-75"
                      id="sports"
                    />
                  </div>
                  {error.teamLeaderName && (
                    <p className="text text-danger text-center">
                      {error.teamLeaderName}
                    </p>
                  )}

                  {/* City */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <label
                      htmlFor="sportscity"
                      className={`col-form-label me-2 ${Booknowcss.labels}`}
                    >
                      City
                    </label>
                    <input
                      onChange={handleChange}
                      value={sportsValue.city}
                      name="city"
                      type="text"
                      className="form-control w-75"
                      id="sportscity"
                    />
                  </div>
                  {error.city && (
                    <p className="text text-danger text-center">{error.city}</p>
                  )}
                  {/* Team Email */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <label
                      htmlFor="sportscity"
                      className={`col-form-label me-2 ${Booknowcss.labels}`}
                    >
                      Team Email
                    </label>
                    <input
                      onChange={handleChange}
                      value={sportsValue.teamEmail}
                      name="teamEmail"
                      type="email"
                      className="form-control w-75"
                      id="sportscity"
                    />
                  </div>
                  {error.teamEmail && (
                    <p className="text text-danger text-center">
                      {error.teamEmail}
                    </p>
                  )}
                  {/* Submit Button */}
                  <div className="text-center mt-3">
                    <button
                      type="submit"
                      className={`btn w-100 rounded ${Booknowcss.bookButton}`}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booknow;
