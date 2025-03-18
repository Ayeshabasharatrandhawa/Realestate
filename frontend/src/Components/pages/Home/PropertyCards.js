import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBed, FaBath } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import "./PropertyCards.css"; // Ensure CSS includes hover effects

const properties = [
  {
    id: 1,
    image: "https://preview.colorlib.com/theme/realestate2/img/property/2.png",
    type: "For Sale",
    price: "From $20k",
    location: "Popular Properties",
    sqft: "1200 Sqft",
    beds: "2 Bed",
    baths: "2 Bath",
    bgColor: "#FDAE5C",
  },
  {
    id: 2,
    image: "https://preview.colorlib.com/theme/realestate2/img/property/3.png",
    type: "For Rent",
    price: "$563/month",
    location: "Popular Properties",
    sqft: "1200 Sqft",
    beds: "2 Bed",
    baths: "2 Bath",
    bgColor: "#ff5748",
  },
  {
    id: 3,
    image: "https://preview.colorlib.com/theme/realestate2/img/property/1.png",
    type: "For Sale",
    price: "From $20k",
    location: "Popular Properties",
    sqft: "1200 Sqft",
    beds: "2 Bed",
    baths: "2 Bath",
    bgColor: "#FDAE5C",
  },
  {
    id: 4,
    image: "https://preview.colorlib.com/theme/realestate2/img/property/6.png",
    type: "For Sale",
    price: "From $22k",
    location: "Downtown Estates",
    sqft: "1500 Sqft",
    beds: "3 Bed",
    baths: "3 Bath",
    bgColor: "#FDAE5C",
  },
  {
    id: 5,
    image: "https://preview.colorlib.com/theme/realestate2/img/property/4.png",
    type: "For Rent",
    price: "$700/month",
    location: "Luxury Apartments",
    sqft: "1000 Sqft",
    beds: "1 Bed",
    baths: "1 Bath",
    bgColor: "#FDAE5C",
  },
  {
    id: 6,
    image: "https://preview.colorlib.com/theme/realestate2/img/property/5.png",
    type: "For Sale",
    price: "From $25k",
    location: "Seaside Villas",
    sqft: "1800 Sqft",
    beds: "3 Bed",
    baths: "2 Bath",
    bgColor: "#FDAE5C",
  },
];

const PropertyCards = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center my-4">Popular Properties</h1>
      <br />

      <div className="row">
        {properties.map((property, index) => (
          <motion.div
            key={property.id}
            className="col-lg-4 col-md-6 mb-4"
            initial={{ x: -100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 0.6, delay: index * 0.2 }} 
          >
            <div className="card shadow border-0 rounded">
              <div className="position-relative overflow-hidden">
                <img
                  src={property.image}
                  alt="Property"
                  className="card-img-top rounded-top property-img"
                />
                <span
                  className="position-absolute top-0 start-0 m-3 px-3 py-1 text-white rounded-pill"
                  style={{ backgroundColor: property.bgColor }}
                >
                  {property.type}
                </span>
              </div>
              <div className="card-body">
                <h5 className="card-title">Comfortable Apartment in Palace</h5>
                <p className="text-muted">
                  <MdLocationOn /> {property.location}
                </p>
                <button className="btn btn-success rounded-pill px-3">
                  {property.price}
                </button>
              </div>
              <div className="card-footer bg-white d-flex justify-content-between">
                <span className="text-muted">{property.sqft}</span>
                <span>
                  <FaBed className="text-dark me-1" /> {property.beds}
                </span>
                <span>
                  <FaBath className="text-dark me-1" /> {property.baths}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="d-flex justify-content-center mt-3">
        <button className="btn rounded-pill px-4 py-2 shadow-sm custom-btn">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCards;