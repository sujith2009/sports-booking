import React, { useEffect, useState } from "react";
import axios from "axios";

const UserDetails = () => {
  const [fetchData, setFetchData] = useState([]);
  useEffect(() => {
    const usersDetails = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/booknow-players/list"
        );
        setFetchData(res.data.data);
      } catch (error) {
        console.log("Server details", error);
      }
    };
    usersDetails();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          <table className="table table-striped table-hover shadow-lg table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Sports Name</th>
                <th scope="col">Sports Date</th>
                <th scope="col">Team Name</th>
                <th scope="col">Team Leader Name</th>
                <th scope="col">City</th>
                <th scope="col">Team Email</th>
              </tr>
            </thead>
            <tbody>
              {fetchData.map((item, index) => (
                <tr key={index} className="align-middle">
                  <td>{item.sportsName}</td>
                  <td>
                    {new Date(item.sportsDate).toLocaleDateString("en-GB")}
                  </td>
                  <td>{item.teamName}</td>
                  <td>{item.teamLeaderName}</td>
                  <td>{item.city}</td>
                  <td>{item.teamEmail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
