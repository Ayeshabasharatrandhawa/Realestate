import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import "./Realestate.css";

const RealEstateCard = () => {
  return (
    <div className="real-estate-section">
      <Card className="property-card animate-card">
        <span className="badge bg-warning text-dark position-absolute badge-sale">
          For Sale
        </span>
        <Card.Body>
          <Card.Title className="fw-bold fs-5">Blue Haven Modern Home</Card.Title>
          <Card.Subtitle className="text-muted mb-3">Popular Properties</Card.Subtitle>
          <div className="d-flex justify-content-between text-secondary mb-3">
            <span><FaRulerCombined /> 1200 Sqft</span>
            <span><FaBed /> 2 Bed</span>
            <span><FaBath /> 2 Bath</span>
          </div>
          <Card.Text className="text-secondary property-text">
            Esteem spirit temper too say adieus who direct esteem. It esteem luckily or picture placing drawing. Apartments frequently or motionless on reasonable.
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="text-danger fw-bold">$4567</h4>
            <button className="btn rounded-pill shadow-sm view-details-button">
              View Details
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RealEstateCard;