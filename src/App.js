import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/pages/Home/Home";
import About from "./Components/pages/About/About";
import Properties from "./Components/pages/Properties/Properties";
import Contact from "./Components/pages/Contact/Contact";
import Signup from "./Components/pages/Auth/Signup";
import Login from "./Components/pages/Auth/Login";

const AppLayout = () => {
  const location = useLocation();
  const hideNavbarFooter = location.pathname === "/signup" || location.pathname === "/login";

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </>
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
