import React, { useState } from "react";
import AdminCss from "../../../src/assets/css/Admin.module.css";
import axios from "axios";
const OurSports = () => {
  const [file, setFile] = useState();
  const [sportsName, setSportsName] = useState("");
  const fileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const sportsNameChange = (e) => {
    setSportsName(e.target.value);
  };
  const handleUpload = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    formData.append("sportsName", sportsName); // Append the file with the key 'image' as expected by the backend

    // Upload the file using axios
    axios
      .post("http://localhost:8000/api/popular-sports/upload", formData, {
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
              <h5 className="text mb-3">Our Sports Types</h5>

              <form onSubmit={handleUpload}>
                <input
                  value={sportsName}
                  type="text"
                  onChange={sportsNameChange}
                  placeholder="Enter a Sports Name"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <input
                  type="file"
                  onChange={fileChange}
                  className="form-control mt-3"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
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

export default OurSports;
