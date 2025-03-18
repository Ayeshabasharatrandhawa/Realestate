import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Frontend pages
import Home from "./Components/pages/Home/Home";
import About from "./Components/pages/About/About";
import Properties from "./Components/pages/Properties/Properties";
import Contact from "./Components/pages/Contact/Contact";
import Signup from "./Components/pages/Auth/Signup";
import Login from "./Components/pages/Auth/Login";

// Admin Routes
import AdminRoutes from "./Admin/AdminRoutes";

const AppLayout = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Mount all admin routes under /admin */}
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;
