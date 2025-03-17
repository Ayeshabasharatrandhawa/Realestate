import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div className="container mt-5">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="row justify-content-center align-items-center"
      >
        
        <div className="col-lg-6 col-md-12">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="accordion" id="faqAccordion">
            
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Adieus who direct esteem It esteems luckily?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Esteem spirit temper too say adieus who direct esteem
                  esteems luckily or picture placing drawing.
                </div>
              </div>
            </div>

            
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Who direct esteem It esteems?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>

            
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Duis consectetur feugiat auctor?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Esteem spirit temper too say adieus who direct esteem
                  esteems luckily or picture placing drawing.
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="col-lg-6 col-md-12 mt-4 mt-lg-0 text-center"
        >
          <img
            src="https://preview.colorlib.com/theme/realestate2/img/banner/accordion.png"
            alt="FAQ"
            className="img-fluid rounded-3 shadow"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FAQ;