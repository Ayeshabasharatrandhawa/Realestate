

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DashboardNavbar = () => {
  const userAvatar =
    "https://omah.dexignzone.com/php/demo/assets/images/profile/17.jpg";

  return (
    <nav className="navbar navbar-expand-md bg-white shadow-sm px-3 py-2">
      <div className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center">
        {/* Brand Logo */}
        <h1
          className="navbar-brand mb-2 mb-md-0 h1"
          style={{ fontSize: "28px", fontWeight: "bold", marginLeft: "10px" }}
        >
          Real<span style={{ color: "#FADE5C" }}>Estate.</span>
        </h1>

        {/* Navbar Content (Flex Column on Small Screens) */}
        <div className="d-flex flex-column flex-md-row align-items-center">
          <div className="text-center text-md-end me-md-3">
            <div style={{ fontSize: "0.9rem", fontWeight: "600" }}>
              Henry Jr.
            </div>
            <small className="text-muted" style={{ fontSize: "0.8rem" }}>
              Admin
            </small>
          </div>
          <img
            src={userAvatar}
            alt="Admin Avatar"
            className="rounded-3 shadow-sm"
            style={{
              width: "45px",
              height: "45px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
