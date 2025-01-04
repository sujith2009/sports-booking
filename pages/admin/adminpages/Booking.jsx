import React, { useState } from "react";
import axios from "axios";

const Booking = () => {
  const [file, setFile] = useState();
  const [sportsName, setSportsName] = useState("");
  const [sportsDistance, setSportsDistance] = useState("");
  const fileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const sportsNameChange = (e) => {
    setSportsName(e.target.value);
  };
  const sportsDistanceChange = (e) => {
    setSportsDistance(e.target.value);
  };
  const handleUpload = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    formData.append("bookSportsName", sportsName);
    formData.append("bookDistance", sportsDistance); // Append the file with the key 'image' as expected by the backend

    // Upload the file using axios
    axios
      .post("http://localhost:8000/venues/book-venues", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the proper header for file upload
        },
      })
      .then((res) => {
        console.log("Upload Success:", res.data); // Handle the success response
        alert("File uploaded successfully!");
        setFile(null);
        setSportsName("");
        setSportsDistance("");
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
          <div className="col-md-8">
            <h5 className="text mb-3">Booking Venues</h5>
            <form onSubmit={handleUpload}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Sports Name
                </label>
                <input
                  value={sportsName}
                  onChange={sportsNameChange}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              {/*---------------*/}
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Sports Venues
                </label>
                <input
                  onChange={fileChange}
                  type="file"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="sportsDistance" className="form-label">
                  Sports Distance
                </label>
                <input
                  value={sportsDistance}
                  onChange={sportsDistanceChange}
                  type="text"
                  className="form-control"
                  id="sportsDistance"
                  aria-describedby="sportsDistanceHelp"
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
  );
};

export default Booking;
