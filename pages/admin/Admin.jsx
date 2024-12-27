import React from "react";
import AdminLayout from "../../components/adminComponents/AdminLayout";
import { Routes, Route } from "react-router-dom";
import OurSports from "./adminpages/OurSports";
import OurWinnerList from "./adminpages/OurWinnerList";

const Admin = () => {
  return (
    <div>
      <AdminLayout>
        <Routes>
          <Route path="our-sports-types" element={<OurSports />} />
          <Route path="out-winner-list" element={<OurWinnerList />} />
        </Routes>
      </AdminLayout>
    </div>
  );
};

export default Admin;
