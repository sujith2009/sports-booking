import React, { useState } from "react";
import AdminCss from "../../../src/assets/css/Admin.module.css";
import axios from "axios";
const OurWinnerList = () => {
  const [file, setFile] = useState(null);
  const [teamName, setTeamName] = useState(""); // Updated to store team name
  const [city, setCity] = useState(""); // Added city state

  // Handle file change (image upload)
  const fileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle team name change
  const teamNameChange = (e) => {
    setTeamName(e.target.value);
  };

  // Handle city change
  const cityChange = (e) => {
    setCity(e.target.value);
  };

  // Handle form submission
  const handleUpload = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file); // Append the image file
    formData.append("teamName", teamName); // Append team name
    formData.append("teamCity", city); // Append city

    // Upload the file using axios
    axios
      .post("http://localhost:8000/api/our-sports-post", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the proper header for file upload
        },
      })
      .then((res) => {
        console.log("Upload Success:", res.data); // Handle the success response
        alert("File uploaded successfully!");
      })
      .catch((err) => {
        console.error(
          "Upload Error:",
          err.response ? err.response.data : err.message
        );
        alert("File upload failed.");
      });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div
              className={`d-flex justify-content-center flex-column ${AdminCss.AdminOurSportsTypes}`}
            >
              <h5 className="text mb-3">Our Winner List</h5>

              <form onSubmit={handleUpload}>
                <label htmlFor="teamName" className="form-label">
                  Enter a Team Name
                </label>
                <input
                  value={teamName}
                  onChange={teamNameChange}
                  type="text"
                  className="form-control"
                  id="teamName"
                />
                <div className="mt-3">
                  <label htmlFor="city" className="form-label">
                    Enter a City
                  </label>
                  <input
                    value={city}
                    onChange={cityChange}
                    type="text"
                    className="form-control"
                    id="city"
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="imageUpload" className="form-label">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    onChange={fileChange}
                    className="form-control"
                    id="imageUpload"
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWinnerList;
