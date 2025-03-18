import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Agents.css';

const AddAgentForm = () => {
  return (
    <div className="add-agent-container container">
      <h5 className="add-agent-title">Add Agent</h5>
      <form className="add-agent-form">
        <div className="row g-3">
          <div className="col-md-4">
            <label className="form-label">Listing Type</label>
            <input type="text" className="form-control" placeholder="office, villa, apartment" />
          </div>
          <div className="col-md-4">
            <label className="form-label">Listing Status</label>
            <select className="form-select">
              <option>For Rent</option>
              <option>For Sale</option>
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label">Listing Price</label>
            <input type="text" className="form-control" placeholder="$2800" />
          </div>

          <div className="col-md-4">
            <label className="form-label">Total Rooms</label>
            <select className="form-select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label">Bedrooms</label>
            <select className="form-select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label">Bathrooms</label>
            <select className="form-select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          <div className="col-md-4">
            <label className="form-label">Total Area</label>
            <input type="text" className="form-control" placeholder="85 sq ft" />
          </div>
          <div className="col-md-4">
            <label className="form-label">Rental Price</label>
            <input type="text" className="form-control" placeholder="$3000" />
          </div>
          <div className="col-md-4">
            <label className="form-label">Feature Category</label>
            <select className="form-select">
              <option>Blue Sky</option>
              <option>Green Garden</option>
              <option>Golden Home</option>
            </select>
          </div>

          <div className="col-12">
            <label className="form-label">Property Description</label>
            <textarea className="form-control" rows="4" placeholder=""></textarea>
          </div>

          <div className="col-md-6">
            <label className="form-label">Property Address</label>
            <input type="text" className="form-control" placeholder="Address of your property" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Postal Code</label>
            <input type="text" className="form-control" placeholder="Enter pin code" />
          </div>

          <div className="col-12">
            <label className="form-label">Upload Media</label>
            <input type="file" className="form-control" />
          </div>
        </div>

        <div className="mt-4">
          <button type="submit" className="btn btn-submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddAgentForm;
