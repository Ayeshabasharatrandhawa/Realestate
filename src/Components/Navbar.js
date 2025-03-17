import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"; 

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState("");
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setNavbarBg(window.scrollY > 50 ? "navbar-dark bg-black" : "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => setIsNavCollapsed(!isNavCollapsed);
  const handleNavLinkClick = () => setIsNavCollapsed(true);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${navbarBg}`}>
      <div className="container">
        <Link className="navbar-brand text-white" to="/">
          <strong style={{ fontSize: "30px" }}>
            Real Estate<span style={{ color: "#F1AE67" }}>.</span>
          </strong>
        </Link>

        <button className="navbar-toggler" type="button" onClick={handleToggle}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`navbar-collapse justify-content-between ${isNavCollapsed ? "collapse" : "show"}`}>
          <ul className="navbar-nav">
            {["/", "/about", "/properties", "/contact", "/signup"].map((path, index) => (
              <li className="nav-item" key={index}>
                <Link
                  className={`nav-link text-white ${location.pathname === path ? "active-link" : ""}`}
                  to={path}
                  onClick={handleNavLinkClick}
                >
                  {path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <button className="btn btn-warning rounded-pill d-none d-lg-inline-block ms-3 btn-hover">
          Add Property
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
