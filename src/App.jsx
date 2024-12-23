import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Booking from "../pages/Booking";
import UpcomingMatches from "../pages/UpcomingMatches";
import NotFound from "../pages/NotFound";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import { AuthProvider } from "../context/Authcontext";
import Admin from "../pages/admin/Admin";
import { useAuth } from "../context/Authcontext";

function App() {
  const location = useLocation();
  const hideNavbarRoutesSignup = [
    "/signup",
    "/login",
    "/admin-sports-dashoard",
  ];
  //  const { isLoggedIn, isAdmin } = useAuth();

  return (
    <>
      <AuthProvider>
        {!hideNavbarRoutesSignup.includes(location.pathname) && <Navbar />}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/upcoming" element={<UpcomingMatches />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-sports-dashoard" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
