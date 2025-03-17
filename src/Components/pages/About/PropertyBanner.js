import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PropertyBanner.css"; // Custom CSS for styling

const PropertyBanner = () => {
  return (
    <section className="add-property-banner d-flex align-items-center">
      <div className="container text-center text-md-start d-flex flex-column flex-md-row justify-content-between align-items-center">
        <h2 className="text-white fw-bold mb-3 mb-md-0">
          Add your property for sale
        </h2>
        <div className="d-flex flex-column flex-sm-row align-items-center">
          <span className="text-white fw-bold me-sm-4 mb-2 mb-sm-0">+10 637 367 4567</span>
          <button className="btn btn-outline-light rounded-pill px-4">
            Add Property
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyBanner;