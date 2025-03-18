import React from "react";
import "./AboutSection.css"; // Custom styling
// import aboutImage from "./aboutbanner.png"; // Ensure the image is in the correct path

const AboutSection = () => {
  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-lg-6">
            <p className="text-uppercase text-muted small fw-bold">The Best Deals</p>
            <h2 className="fw-bold">Who we are</h2>
            <p className="text-muted">
              Nulla aliquet bibendum sem, non placerat risus venenatis at. Prae sent 
              vulputate bibendum dictum. Cras at vehicula urna. Suspendisse fringilla 
              lobortis justo, ut tempor leo cursus in. 
            </p>
            <p className="text-muted">
              Nulla aliquet bibendum sem, non placerat risus venenatis at. Prae sent 
              vulputate bibendum dictum. Cras at vehicula urna. Suspendisse fringilla 
              lobortis justo, ut tempor leo cursus in.
            </p>
            <button className="custom-btn btn-lg px-4">Read More</button>

          </div>

          {/* Image Section */}
          <div className="col-lg-6 text-center">
            <img src='https://preview.colorlib.com/theme/myhome/images/intro.jpg.webp' alt="Who we are" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
