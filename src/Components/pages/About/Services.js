import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Services.css";
import { FaClipboardList, FaBuilding, FaHome, FaSpa, FaChartBar, FaDollarSign } from "react-icons/fa";

const services = [
  { icon: <FaClipboardList />, title: "Consulting", description: "Nulla aliquet bibendum sem, non placerat risus venenatis at. Prae sent vulputate bibendum dictum." },
  { icon: <FaBuilding />, title: "Real estate sales", description: "Aliquet bibendum sem, non placerat risus venenatis at. Prae sent vulputate bibendum dictum. Cras at vehicula." },
  { icon: <FaHome />, title: "Renting", description: "Nulla aliquet bibendum sem, non placerat risus venenatis at. Prae sent vulputate bibendum dictum." },
  { icon: <FaSpa />, title: "Meditation", description: "Aliquet bibendum sem, non placerat risus venenatis at. Prae sent vulputate bibendum dictum." },
  { icon: <FaChartBar />, title: "Evaluation", description: "Aliquet bibendum sem, non placerat risus venenatis at. Prae sent vulputate bibendum dictum." },
  { icon: <FaDollarSign />, title: "Price Consulting", description: "Aliquet bibendum sem, non placerat risus venenatis at. Prae sent vulputate bibendum dictum." }
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <section className="services-section text-center py-5">
      <h6 className="text-uppercase text-muted">The Best Deals</h6>
      <h2 className="services-heading">Services</h2>
      <div className="container mt-4">
        <div className="row">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`col-md-4 mb-4 fade-in ${isVisible ? "visible" : ""}`}
            >
              <div className="service-box p-4">
                <div className="service-icon">{service.icon}</div>
                <h4 className="service-title">{service.title}</h4>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;