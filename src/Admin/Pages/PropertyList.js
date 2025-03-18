import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { FaSearch, FaFilter, FaBed, FaBath } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PropertyList.css";

const properties = [
  { id: 1, image: "https://preview.colorlib.com/theme/realestate2/img/property/2.png", type: "For Sale", price: "From $20k", location: "Popular Properties", sqft: "1200 Sqft", beds: "2 Bed", baths: "2 Bath" },
  { id: 2, image: "https://preview.colorlib.com/theme/realestate2/img/property/3.png", type: "For Rent", price: "$563/month", location: "Popular Properties", sqft: "1200 Sqft", beds: "2 Bed", baths: "2 Bath" },
  { id: 3, image: "https://preview.colorlib.com/theme/realestate2/img/property/1.png", type: "For Sale", price: "From $20k", location: "Popular Properties", sqft: "1200 Sqft", beds: "2 Bed", baths: "2 Bath" },
  
  { id: 1, image: "https://preview.colorlib.com/theme/realestate2/img/property/2.png", type: "For Sale", price: "From $20k", location: "Popular Properties", sqft: "1200 Sqft", beds: "2 Bed", baths: "2 Bath" },
  { id: 2, image: "https://preview.colorlib.com/theme/realestate2/img/property/3.png", type: "For Rent", price: "$563/month", location: "Popular Properties", sqft: "1200 Sqft", beds: "2 Bed", baths: "2 Bath" },
  { id: 3, image: "https://preview.colorlib.com/theme/realestate2/img/property/1.png", type: "For Sale", price: "From $20k", location: "Popular Properties", sqft: "1200 Sqft", beds: "2 Bed", baths: "2 Bath" }
];

const PropertyList = () => {
  const [priceRange, setPriceRange] = useState([40, 60]);
  const [areaRange, setAreaRange] = useState([40, 60]);

  return (
    <>
      <div className="property-filter-container">
        <div className="property-filter-header">
          <FaFilter className="filter-icon" />
          <span className="filter-title">Filter</span>
        </div>

        <Form className="property-filter-form">
          <Row className="g-2">
            <Col md={3}><Form.Control type="text" placeholder="Enter Your Keyword..." /></Col>
            <Col md={3}><Form.Select><option>Select Location</option><option>New York</option></Form.Select></Col>
            <Col md={3}><Form.Select><option>Property Type</option><option>Apartment</option></Form.Select></Col>
            <Col md={3}><Form.Select><option>Select Category</option><option>For Sale</option></Form.Select></Col>
          </Row>

          <Row className="g-2 mt-3 align-items-center">
            <Col md={4} className="range-container">
              <Form.Label className="range-label">Price Range</Form.Label>
              <div className="range-values">${priceRange[0]}k - ${priceRange[1]}k</div>
              <Form.Range 
                min={0} 
                max={100} 
                value={priceRange[0]} 
                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])} 
              />
              <Form.Range 
                min={0} 
                max={100} 
                value={priceRange[1]} 
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])} 
              />
            </Col>

            <Col md={4} className="range-container">
              <Form.Label className="range-label">Area Range</Form.Label>
              <div className="range-values">{areaRange[0]} - {areaRange[1]} sqft</div>
              <Form.Range 
                min={0} 
                max={5000} 
                step={100} 
                value={areaRange[0]} 
                onChange={(e) => setAreaRange([parseInt(e.target.value), areaRange[1]])} 
              />
              <Form.Range 
                min={0} 
                max={5000} 
                step={100} 
                value={areaRange[1]} 
                onChange={(e) => setAreaRange([areaRange[0], parseInt(e.target.value)])} 
              />
            </Col>

            <Col md={4} className="search-btn-container">
              <Button className="search-btn"><FaSearch className="search-icon" /> Search</Button>
            </Col>
          </Row>
        </Form>
      </div>

      <div style={{marginTop:"20px"}}>
        
      <h3 className="mb-4 text-center">Properties</h3>
        <div className="row">
          {properties.map((property) => (
            <div key={property.id} className="col-md-4 mb-4">
              <div className="card shadow border-0">
                <img src={property.image} className="card-img-top" alt="property" />
                <div className="card-body">
                  <h5 className="card-title">{property.type}</h5>
                  <p className="card-text">{property.price}</p>
                  <p><MdLocationOn /> {property.location}</p>
                  <p><FaBed /> {property.beds} | <FaBath /> {property.baths} | {property.sqft}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PropertyList;
