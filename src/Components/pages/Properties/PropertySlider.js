import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBed, FaBath } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css"


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

// Custom Arrow Components
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowForward
      className={className}
      style={{
        ...style,
        display: "block",
        fontSize: "30px",
        color: "#333",
        right: "-40px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowBack
      className={className}
      style={{
        ...style,
        display: "block",
        fontSize: "30px",
        color: "#333",
        left: "-40px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};

const PropertySlider = () => {
  const settings = {
    dots: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  

  return (
    <div className="container my-5">
    
      <h1 className="text-center fw-bold mb-4">Featured Properties</h1>

      
      
      
      <Slider {...settings}>
        {properties.map((property, index) => (
          <motion.div
            key={property.id}
            className="p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
      </Slider>
    </div>
  );
};

export default PropertySlider;
