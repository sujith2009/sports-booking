import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Booking from "../pages/Booking";
import UpcomingMatches from "../pages/UpcomingMatches";
import NotFound from "../pages/NotFound";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ["/signup"];
  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/upcoming" element={<UpcomingMatches />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
