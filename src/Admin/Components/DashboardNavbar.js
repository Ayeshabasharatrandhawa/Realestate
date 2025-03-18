import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DashboardNavbar = () => {
  const userAvatar =
    "https://omah.dexignzone.com/php/demo/assets/images/profile/17.jpg";

  return (
    <nav className="navbar navbar-expand-md navbar-white bg-white">
      <div className="container-fluid">
      <h1 className="navbar-brand mb-0 h1" style={{fontSize:"30px", fontWeight:"bold"}}>
  Real<span style={{ color: "#FADE5C", fontSize:"30px" }}>Estate.</span>
</h1>



        <div className="navbar-collapse" id="adminNavbar">
          <ul className="navbar-nav me-auto"></ul>

          <div className="d-flex align-items-center">
            <div className="me-2">
              <div style={{ fontSize: "0.85rem", fontWeight: "500" }}>
                Henry Jr.
              </div>
              <small className="text-muted" style={{ fontSize: "0.75rem" }}>
                Admin
              </small>
            </div>
            <img
              src={userAvatar}
              alt="Admin Avatar"
              style={{
                width: "45px",
                height: "50px",
                objectFit: "cover",
                borderRadius: "8px" // Boxy with rounded corners
              }}
            />
          </div>
        </div>
      </div>
      
      <hr className="d-none d-md-block" />
    </nav>
  );
};

export default DashboardNavbar;
