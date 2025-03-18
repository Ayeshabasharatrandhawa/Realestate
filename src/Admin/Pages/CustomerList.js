import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Customer.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const customers = [
  {
    id: '#C01234',
    name: 'Robert Patilson',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    location: 'TY35 Avenue GGLondon Center',
    phone: '+51 1234 5678',
    email: 'info@example.com',
    joined: '26/04/2020, 12:42 AM',
  },
  {
    id: '#C01234',
    name: 'Robert Patilson',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    location: 'TY35 Avenue GGLondon Center',
    phone: '+51 1234 5678',
    email: 'info@example.com',
    joined: '26/04/2020, 12:42 AM',
  },
  {
    id: '#C01234',
    name: 'Robert Patilson',
    image: 'https://randomuser.me/api/portraits/women/22.jpg',
    location: 'TY35 Avenue GGLondon Center',
    phone: '+51 1234 5678',
    email: 'info@example.com',
    joined: '26/04/2020, 12:42 AM',
  }
];

const orderHistory = [
  {
    name: 'James Humbly',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    duration: '2 June 2018 - 4 June 2019',
    rating: 4
  },
  {
    name: 'James Humbly',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    duration: '2 June 2018 - 4 June 2019',
    rating: 4
  }
];

const CustomerList = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <div className="container">
      <h3 className="mb-4 text-center">Customer List</h3>

      {customers.map((customer, index) => (
        <Card 
          className="mb-3 shadow-sm p-3 rounded"
          key={index}
          style={{ maxWidth: '1050px', minHeight: '160px' }}
        >
          <div className="d-flex align-items-center">
            <img src={customer.image} alt="Customer" className="rounded-circle me-3" width="60" height="60" />
            <div className="flex-grow-1">
              <small className="text-muted">{customer.id}</small>
              <h5 className="mb-0">{customer.name}</h5>
              <small className="text-muted">Join on {customer.joined}</small>
            </div>

            <div className="text-end" style={{ fontSize: '14px' }}>
              <p><b>Location:</b><br />{customer.location}</p>
              <p><b>Phone:</b> {customer.phone}</p>
              <p><b>Email:</b> {customer.email}</p>
            </div>
          </div>

          {/* Dropdown for Order History */}
          <div className="position-relative">
            <Button
              style={{ backgroundColor: '#FADE5C', border: 'none', color: '#000', marginTop: '10px' }}
              onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
            >
              Show Order History
            </Button>

            {openDropdown === index && (
              <div 
                className="p-3 bg-white shadow rounded position-absolute" 
                style={{ zIndex: 10, width: '350px', top: '100%', left: '0', marginTop: '10px' }}
              >
                {orderHistory.map((order, idx) => (
                  <Card key={idx} className="mb-2 shadow-sm p-2">
                    <div className="d-flex align-items-center">
                      <img src={order.image} alt="Order" className="rounded me-3" width="50" height="50" />
                      <div>
                        <h6 className="mb-1">{order.name}</h6>
                        <small className="text-muted">{order.duration}</small>
                        <div className="text-warning mt-1">
                          {'★'.repeat(order.rating)}{'☆'.repeat(5 - order.rating)}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CustomerList;
