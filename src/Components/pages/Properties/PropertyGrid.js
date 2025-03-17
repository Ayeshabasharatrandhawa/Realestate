import React, { useState } from "react";
import { FaBed, FaBath } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Properties.css";

const properties = [
  { id: 1, image: "https://preview.colorlib.com/theme/realestate2/img/property/2.png", type: "For Sale", price: "From $20k", location: "Popular Properties", sqft: "1200 Sqft", beds: "2 Bed", baths: "2 Bath", bgColor: "#FDAE5C" },
  { id: 2, image: "https://preview.colorlib.com/theme/realestate2/img/property/3.png", type: "For Rent", price: "$563/month", location: "Popular Properties", sqft: "1200 Sqft", beds: "2 Bed", baths: "2 Bath", bgColor: "#ff5748" },
  { id: 3, image: "https://preview.colorlib.com/theme/realestate2/img/property/1.png", type: "For Sale", price: "From $20k", location: "Popular Properties", sqft: "1200 Sqft", beds: "2 Bed", baths: "2 Bath", bgColor: "#FDAE5C" },
  { id: 4, image: "https://preview.colorlib.com/theme/realestate2/img/property/6.png", type: "For Sale", price: "From $22k", location: "Downtown Estates", sqft: "1500 Sqft", beds: "3 Bed", baths: "3 Bath", bgColor: "#FDAE5C" },
  { id: 5, image: "https://preview.colorlib.com/theme/realestate2/img/property/4.png", type: "For Rent", price: "$700/month", location: "Luxury Apartments", sqft: "1000 Sqft", beds: "1 Bed", baths: "1 Bath", bgColor: "#FDAE5C" },
  { id: 6, image: "https://preview.colorlib.com/theme/realestate2/img/property/5.png", type: "For Sale", price: "From $25k", location: "Seaside Villas", sqft: "1800 Sqft", beds: "3 Bed", baths: "2 Bath", bgColor: "#FDAE5C" },
  { id: 7, image: "https://preview.colorlib.com/theme/realestate2/img/property/3.png", type: "For Rent", price: "$600/month", location: "Urban Heights", sqft: "1300 Sqft", beds: "2 Bed", baths: "2 Bath", bgColor: "#ff5748" },
  { id: 8, image: "https://preview.colorlib.com/theme/realestate2/img/property/1.png", type: "For Sale", price: "From $30k", location: "Elite Residency", sqft: "2000 Sqft", beds: "4 Bed", baths: "3 Bath", bgColor: "#FDAE5C" },
  { id: 9, image: "https://preview.colorlib.com/theme/realestate2/img/property/2.png", type: "For Sale", price: "From $28k", location: "Lakeside Homes", sqft: "1700 Sqft", beds: "3 Bed", baths: "2 Bath", bgColor: "#FDAE5C" },
  { id: 10, image: "https://preview.colorlib.com/theme/realestate2/img/property/6.png", type: "For Sale", price: "From $35k", location: "Sunset Villas", sqft: "1900 Sqft", beds: "3 Bed", baths: "3 Bath", bgColor: "#FDAE5C" },
  { id: 11, image: "https://preview.colorlib.com/theme/realestate2/img/property/4.png", type: "For Rent", price: "$750/month", location: "Skyline Towers", sqft: "1400 Sqft", beds: "2 Bed", baths: "2 Bath", bgColor: "#FDAE5C" },
  { id: 12, image: "https://preview.colorlib.com/theme/realestate2/img/property/5.png", type: "For Sale", price: "From $40k", location: "Mountain View", sqft: "2100 Sqft", beds: "4 Bed", baths: "3 Bath", bgColor: "#FDAE5C" }
];

const PropertyPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;
  const totalPages = Math.ceil(properties.length / propertiesPerPage);
  
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

  return (
    <div className="container my-5" style={{ marginTop: "50px" }}>
      <h1 className="text-center fw-bold mb-4">240 properties found</h1>
      <div className="row">
        {currentProperties.map((property) => (
          <div key={property.id} className="col-md-4 mb-4">
            <div className="card shadow border-0 rounded">
              <div className="position-relative overflow-hidden">
                <img src={property.image} alt="Property" className="card-img-top rounded-top property-img" />
                <span className="position-absolute top-0 start-0 m-3 px-3 py-1 text-white rounded-pill" style={{ backgroundColor: property.bgColor }}>{property.type}</span>
              </div>
              <div className="card-body">
                <h5 className="card-title">Comfortable Apartment in Palace</h5>
                <p className="text-muted"><MdLocationOn /> {property.location}</p>
                <button className="btn btn-success rounded-pill px-3">{property.price}</button>
              </div>
              <div className="card-footer bg-white d-flex justify-content-between">
                <span className="text-muted">{property.sqft}</span>
                <span><FaBed className="text-dark me-1" /> {property.beds}</span>
                <span><FaBath className="text-dark me-1" /> {property.baths}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="d-flex justify-content-center mt-4">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            className={`pagination-btn mx-1 ${currentPage === index + 1 ? "active" : ""}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PropertyPagination;
