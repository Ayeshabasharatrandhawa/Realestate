import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const agents = [
  {
    name: "Thomas Djons",
    role: "Senior Developer",
    description:
      "Answering guest inquiries, directing phone calls, coordinating travel plans, and more.",
    email: "example@gmail.com",
    phone: "1238545644",
    location: "Indonesia",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Oliver Jean",
    role: "Junior Developer",
    description:
      "Maintain inventory of supplies and order new stock as needed.",
    email: "example@gmail.com",
    phone: "1238545644",
    location: "Indonesia",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Post Melone",
    role: "Senior Designer",
    description:
      "Anticipate guests’ needs in order to accommodate them and provide an exceptional experience.",
    email: "example@gmail.com",
    phone: "1238545644",
    location: "Indonesia",
    image:  "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Emily Watson",
    role: "Project Manager",
    description:
      "Responsible for planning, overseeing projects to ensure completion on time.",
    email: "example@gmail.com",
    phone: "1238545644",
    location: "Indonesia",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "James Smith",
    role: "HR Manager",
    description:
      "Handles recruitment, employee relations, and company culture.",
    email: "example@gmail.com",
    phone: "1238545644",
    location: "Indonesia",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Sophia Loren",
    role: "Marketing Lead",
    description:
      "Develops marketing strategies and oversees campaigns.",
    email: "example@gmail.com",
    phone: "1238545644",
    location: "Indonesia",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
];

const AllAgents= () => {
  return (<>
    
    <h3 className="mb-4 text-center">All Agents</h3>

    <div className="container my-4">
      <div className="row">
        {agents.map((agent, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm p-3 h-100">
              <div
                className="text-dark p-2 text-center"
                style={{
                  backgroundColor: "#FADE5C",
                  fontSize: "14px",
                  fontWeight: "bold",
                  borderRadius: "5px",
                }}
              >
                {agent.name}
              </div>
              <div className="d-flex align-items-center mt-3">
                {agent.image ? (
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="rounded-circle me-3"
                    width="50"
                    height="50"
                  />
                ) : (
                  <div
                    className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                    style={{ width: "50px", height: "50px" }}
                  >
                    {agent.name[0]}
                  </div>
                )}
                <div>
                  <p className="text-muted mb-0" style={{ fontSize: "13px" }}>
                    {agent.role}
                  </p>
                </div>
              </div>
              <p
                className="mt-2"
                style={{ fontSize: "12px", color: "#555", lineHeight: "1.3" }}
              >
                {agent.description}
              </p>
              <hr />
              <p className="mb-1" style={{ fontSize: "12px" }}>
                <strong>Email:</strong> {agent.email}
              </p>
              <p className="mb-1" style={{ fontSize: "12px" }}>
                <strong>Phone:</strong> {agent.phone}
              </p>
              <p className="mb-1" style={{ fontSize: "12px" }}>
                <strong>Location:</strong> {agent.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default AllAgents;
