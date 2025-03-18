import React from "react";
import { Card, Table } from "react-bootstrap";
import { FaUserAlt, FaChartBar } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import "./Orders.css";

const Orders = () => {
  return (
    <div className="container py-4">
      {/* Cards */}
      <div className="row mb-4">
        <div className="col-md-3">
          <Card className="shadow-sm text-center p-3">
            <FaUserAlt size={28} className="mb-2 icon-purple" />
            <h5 className="fw-bold mb-0">245</h5>
            <small>Total Customers</small>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="shadow-sm text-center p-3">
            <FaChartBar size={28} className="mb-2 icon-purple" />
            <h5 className="fw-bold mb-0">562</h5>
            <small>Total Transactions</small>
          </Card>
        </div>
        <div className="col-md-6">
          <Card className="shadow-sm bg-dark text-white p-3">
            <div className="d-flex align-items-center">
              <MdHome size={40} className="me-3" />
              <div>
                <h5 className="fw-bold">INFORMATION</h5>
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </small>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Table */}
      <Card className="shadow-sm">
        <div className="table-responsive">
          <Table hover className="table-sm custom-table mb-0">
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Order ID</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Property</th>
                <th>Location</th>
                <th>Price</th>
                <th>Type</th>
                <th>Agent</th>
                <th>Status</th>
               
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="checkbox" defaultChecked /></td>
                <td>#0001234</td>
                <td>26/04/2020, 12:42 AM</td>
                <td>James Witcwiky</td>
                <td>TY35 Avenue GGLondon Center</td>
                <td>Flat 2551 Center London 287223</td>
                <td>$521k</td>
                <td>ABC356</td>
                <td>Kevin Jr.</td>
                <td><span className="text-warning">Pending</span></td>
             
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>#0001234</td>
                <td>26/04/2020, 12:42 AM</td>
                <td>Stephani</td>
                <td>TY35 Avenue GGLondon Center</td>
                <td>Straight 22th London 51256</td>
                <td>$235k</td>
                <td>TY1255</td>
                <td>Louis</td>
                <td><span className="text-primary">Negotiation</span></td>
              
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>#0001234</td>
                <td>26/04/2020, 12:42 AM</td>
                <td>Smantha Jr.</td>
                <td>655M Alexander Court, NewYork</td>
                <td>Corner Street 5th London 126623</td>
                <td>$116k</td>
                <td>UJ2356</td>
                <td>Melinda S.</td>
                <td><span className="text-warning">Pending</span></td>
                
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>#0001234</td>
                <td>26/04/2020, 12:42 AM</td>
                <td>Hawkins</td>
                <td>TY35 Avenue GGLondon Center</td>
                <td>Waves Street 1st London 2441</td>
                <td>$763k</td>
                <td>RE5135</td>
                <td>Peter P.</td>
                <td><span className="text-primary">Negotiation</span></td>
           
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>#0001234</td>
                <td>26/04/2020, 12:42 AM</td>
                <td>Sanji Fujiwara</td>
                <td>5122 Franklin Court, NewYork</td>
                <td>Flat 2551 Center London 287223</td>
                <td>$245k</td>
                <td>POT434</td>
                <td>Robinson</td>
                <td><span className="text-success">Approved</span></td>
               
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>#0001234</td>
                <td>26/04/2020, 12:42 AM</td>
                <td>Ilham Supriadi</td>
                <td>TY35 Avenue GGLondon Center</td>
                <td>Waves Street 1st London 2441</td>
                <td>$765k</td>
                <td>VDBF42</td>
                <td>Rendy</td>
                <td><span className="text-warning">Pending</span></td>
                
              </tr>
            </tbody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default Orders;