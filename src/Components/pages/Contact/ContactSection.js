import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const ContactSection = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-stretch">
        <div className="col-md-7 d-flex flex-column justify-content-between">
          <h2 className="fw-bold mb-4 text-primary-custom">Get in Touch</h2>
          <form className="h-100 d-flex flex-column">
            <div className="mb-3 flex-grow-1">
              <label className="form-label">Name</label>
              <textarea className="form-control focus-outline" rows="4" placeholder=""></textarea>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <input type="text" className="form-control focus-outline" placeholder="Enter your name" />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control focus-outline" placeholder="Email" />
              </div>
            </div>
            <div className="mb-3">
              <input type="text" className="form-control focus-outline" placeholder="Enter Subject" />
            </div>
            <button className="btn btn-outline-custom px-4 py-2">SEND</button>
          </form>
        </div>
        <div className="col-md-5 d-flex flex-column justify-content-between mt-4">
          <ul className="list-unstyled">
            <li className="mb-3 d-flex align-items-center">
              <i className="bi bi-house-door me-3 fs-4 text-icon-custom"></i>
              <div>
                <strong className="text-primary-custom">Buttonwood, California.</strong>
                <p className="mb-0 text-muted-custom">Rosemead, CA 91770</p>
              </div>
            </li>
            <li className="mb-3 d-flex align-items-center">
              <i className="bi bi-phone me-3 fs-4 text-icon-custom"></i>
              <div>
                <strong className="text-primary-custom">+1 253 565 2365</strong>
                <p className="mb-0 text-muted-custom">Mon to Fri 9am to 6pm</p>
              </div>
            </li>
            <li className="d-flex align-items-center">
              <i className="bi bi-envelope me-3 fs-4 text-icon-custom"></i>
              <div>
                <strong className="text-primary-custom">support@colorlib.com</strong>
                <p className="mb-0 text-muted-custom">Send us your query anytime!</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

// Add custom styling to enhance focus outline effect
const style = document.createElement("style");
style.innerHTML = `
  .focus-outline {
    border: none !important;
  }
  .focus-outline:focus {
    outline: 2px solid #F1AE67 !important;
    box-shadow: 0 0 5px #F1AE67 !important;
  }
  .btn-outline-custom {
    color: #F1AE67 !important;
    border-color: #F1AE67 !important;
  }
  .btn-outline-custom:hover {
    background-color: #F1AE67 !important;
    color: #fff !important;
  }
  .text-primary-custom {
    color: #001D38 !important;
  }
  .text-muted-custom {
    color: #6c757d !important;
  }
  .text-icon-custom {
    color: #F1AE67 !important;
  }
`;
document.head.appendChild(style);
