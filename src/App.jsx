import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import Booking from "../pages/Booking";
import UpcomingMatches from "../pages/UpcomingMatches";
import LoginAndSignup from "../pages/LoginAndSignup";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/upcoming" element={<UpcomingMatches />} />
          <Route path="/login-sign" element={<LoginAndSignup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
