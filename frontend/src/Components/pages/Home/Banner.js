import React, { useState } from "react";
import './Banner.css'
const Banner = () => {
  const [price, setPrice] = useState(10000);

  const formatPrice = (value) => {
    return `${(value / 1000).toFixed(0)}k`;
  };
  

  return (
    
    <div className="hero-section">
      <div className="container text-center text-white">
        <h1 className="display-4 fw-bold">Find Your Best Property</h1>
        <p className="lead">Esteem spirit temper too say adieus who direct esteem.</p>

        <div className="search-box p-4 mt-4">
          <div className="row">
        
            <div className="col-6 col-md-2 mb-3 mb-md-0">
              <label>Location</label>
              <select className="form-control">
                <option>New York</option>
                <option>Los Angeles</option>
                <option>Chicago</option>
              </select>
            </div>

            
            <div className="col-6 col-md-2 mb-3 mb-md-0">
              <label>Property Type</label>
              <select className="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>

        
            <div className="col-6 col-md-2 mb-3 mb-md-0">
              <label>Price ($): {formatPrice(price)}</label>
              <input
                type="range"
                className="form-range"
                min="10000"
                max="500000"
                step="5000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

        
            <div className="col-6 col-md-2 mb-3 mb-md-0">
              <label>Bed Room</label>
              <select className="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>

            
            <div className="col-6 col-md-2 mb-3 mb-md-0">
              <label>Bath Room</label>
              <select className="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>

        
            <div className="col-6 col-md-2 d-flex align-items-end">
              <button
                className="search-btn"
                style={{
                  backgroundColor: "#FDAE5C",
                  border: "none",
                  width: "50px",
                  height: "50px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <i className="fas fa-search" style={{ fontSize: "18px", color: "white" }}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Banner;