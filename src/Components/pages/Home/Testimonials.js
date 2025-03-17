import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Testimonials.css";

const testimonials = [
  {
    text: "Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque. Fusce ac mattis nulla. Morbi eget ornare dui.",
    name: "Robert Thomson",
    role: "Business Owner",
    image: "https://preview.colorlib.com/theme/realestate2/img/team/2.png", // Replace with actual image
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec fermentum placerat justo, eget rutrum elit fermentum ac.",
    name: "Jane Doe",
    role: "CEO, Tech Ltd.",
    image: "https://preview.colorlib.com/theme/realestate2/img/team/3.png", // Replace with actual image
  },
];

const Testimonial = () => {
  useEffect(() => {
    const bootstrap = require("bootstrap"); // Import Bootstrap JS dynamically
    const myCarousel = document.querySelector("#testimonialCarousel");
    new bootstrap.Carousel(myCarousel, {
      interval: 1000, // Auto-slide every 1 second
      ride: "carousel",
    });
  }, []);

  return (
    <div className="testimonial-section">
      <div id="testimonialCarousel" className="carousel slide">
        <div className="carousel-inner text-center">
          {testimonials.map((testimonial, index) => (<div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>

              <blockquote className="blockquote">
                <p className="mb-4">{testimonial.text}</p>
                <div className="d-flex justify-content-center align-items-center flex-column">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-circle mb-2"
                    width="50"
                    height="50"
                  />
                  <h5 className="mb-0">{testimonial.name}</h5>
                  <small>{testimonial.role}</small>
                </div>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;