import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Agents.css"; // Custom CSS for overlay
import { FaFacebookF, FaWhatsapp, FaTwitter } from "react-icons/fa"; // React Icons

const agentsData = [
  {
    id: 1,
    name: "Milani Mou",
    role: "Business Agent",
    image: "https://preview.colorlib.com/theme/realestate2/img/team/1.png",
  },
  {
    id: 2,
    name: "Halim Yoka",
    role: "Business Agent",
    image: "https://preview.colorlib.com/theme/realestate2/img/team/3.png",
  },
  {
    id: 3,
    name: "Dalim Karma",
    role: "Business Agent",
    image: "https://preview.colorlib.com/theme/realestate2/img/team/2.png",
  },
  {
    id: 4,
    name: "Micky",
    role: "Business Agent",
    image: "https://preview.colorlib.com/theme/realestate2/img/team/4.png",
  },
];

const Agents = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Our Agents</h1>
      <div className="row g-4">
        {agentsData.map((agent) => (
          <div className="col-lg-3 col-md-6 text-center" key={agent.id}>
            <div className="card border-0 position-relative agent-card">
              {/* Image Container with Overlay */}
              <div className="image-container position-relative">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="card-img-top rounded-3"
                  style={{ objectFit: "cover", height: "300px" }}
                />
                <div className="overlay d-flex justify-content-center align-items-center">
                  {/* Social Icons */}
                  <a href="#!" className="mx-2 text-white fs-5">
                    <FaFacebookF />
                  </a>
                  <a href="#!" className="mx-2 text-white fs-5">
                    <FaWhatsapp />
                  </a>
                  <a href="#!" className="mx-2 text-white fs-5">
                    <FaTwitter />
                  </a>
                </div>
              </div>
              {/* Card Body */}
              <div className="card-body">
                <h5 className="card-title fw-bold">{agent.name}</h5>
                <p className="text-muted">{agent.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agents;