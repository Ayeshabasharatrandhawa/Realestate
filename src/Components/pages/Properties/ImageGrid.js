import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Grid.css"; // Custom styles

const ImageGrid = () => {
  return (
    <div className="container mt-4">
      <div className="row g-3 align-items-stretch">
        {/* Large Image on Left */}
        <div className="col-md-7 d-flex">
          <div className="image-box flex-grow-1">
            <img src="https://preview.colorlib.com/theme/realestate/img/p1.jpg" alt="Large Property" className="img-fluid w-80" />
            <div className="overlay">UK Properties</div>
          </div>
        </div>

        {/* Right Section (One Image on Top, Two Below) */}
        <div className="col-md-5 d-flex flex-column">
          {/* Top Image */}
          <div className="image-box mb-3">
            <img src="https://preview.colorlib.com/theme/realestate/img/p2.jpg" alt="Property" className="img-fluid" />
            <div className="overlay">UK Properties</div>
          </div>

          {/* Two Bottom Images */}
          <div className="row g-3 flex-grow-1">
            <div className="col-6 d-flex">
              <div className="image-box flex-grow-1">
                <img src="https://preview.colorlib.com/theme/realestate/img/p3.jpg" alt="Property" className="img-fluid" />
                <div className="overlay">UK Properties</div>
              </div>
            </div>
            <div className="col-6 d-flex">
              <div className="image-box flex-grow-1">
                <img src="https://preview.colorlib.com/theme/realestate/img/p4.jpg" alt="Property" className="img-fluid" />
                <div className="overlay">UK Properties</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ImageGrid;
