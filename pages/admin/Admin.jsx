import React from "react";
import AdminLayout from "../../components/adminComponents/AdminLayout";
import { Routes, Route } from "react-router-dom";
import OurSports from "./adminpages/OurSports";
import OurWinnerList from "./adminpages/OurWinnerList";
import Booking from "./adminpages/Booking";
import UserDetails from "./adminpages/UserDetails";

const Admin = () => {
  return (
    <div>
      <AdminLayout>
        <Routes>
          <Route path="our-sports-types" element={<OurSports />} />
          <Route path="out-winner-list" element={<OurWinnerList />} />
          <Route path="booking-venues" element={<Booking />} />
          <Route path="users-details" element={<UserDetails />} />
        </Routes>
      </AdminLayout>
    </div>
  );
};

export default Admin;
