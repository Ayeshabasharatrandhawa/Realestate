import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminDashboard.css'; 

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <main className="dashboard-content p-3">
        <div className="dashboard-stats">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h4 className="fw-bold">Dashboard</h4>
              <p className="text-muted">Welcome to Omah Property Admin</p>
            </div>
            <div>
              <button className="btn btn-light me-2">Refresh</button>
              <button className="btn btn-primary">
                <i className="bi bi-gear"></i>
              </button>
            </div>
          </div>

          <div className="total-properties-card p-4 rounded mb-4">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5 className="text-white fw-bold">Total Properties</h5>
                <div className="progress-bar-bg my-3">
                  <div className="progress-bar-fill" style={{ width: '85%' }}></div>
                </div>
                <p className="text-white">431 more to break last month record</p>
              </div>
              <h1 className="text-white fw-bold">4,562</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="property-card p-3 rounded h-100">
                <h2 className="fw-bold">2,356</h2>
                <p className="mb-1">Properties for Sale</p>
                <small className="text-muted">Target 3k/month</small>
                <div className="circular-progress blue mt-3">
                  <span>71%</span>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="property-card p-3 rounded h-100">
                <h2 className="fw-bold">2,206</h2>
                <p className="mb-1">Properties for Rent</p>
                <small className="text-muted">Target 3k/month</small>
                <div className="circular-progress green mt-3">
                  <span>90%</span>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="property-card p-3 rounded h-100">
                <h2 className="fw-bold">500</h2>
                <p className="mb-1">New Listings</p>
                <small className="text-muted">Updated weekly</small>
                <div className="circular-progress orange mt-3">
                  <span>60%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Total Revenue Section */}
        <div className="revenue-card p-4 rounded mb-4">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h5 className="fw-bold">Total Revenue</h5>
              <h2 className="fw-bold">$678,345</h2>
              <p className="text-muted">last month $563,443</p>
            </div>
            <div className="text-success fw-bold">
              <span className="me-1">7%</span> ▲
            </div>
          </div>

          {/* Revenue Graph */}
          <div className="revenue-bars d-flex justify-content-between align-items-end mt-4">
            {/* Sample revenue heights */}
            {[30, 50, 100, 90, 20, 30, 70, 40, 25, 35, 25, 30, 80, 50, 40, 20].map((height, index) => (
              <div key={index} className="revenue-bar text-center">
                <div className="bar-bg">
                  <div className="bar-filled" style={{ height: `${height}%` }}></div>
                </div>
                <small className="text-muted d-block mt-1">{index + 6}</small>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
