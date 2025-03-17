import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const handleSignup = (e) => {
    e.preventDefault();
    
    if (users.find((user) => user.email === email)) {
      setError("Email already registered. Please login.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/login");
  };

  return (
    <Container className="login-container">
      <div className="login-card">
        
        <div className="left">
          <h2 className="text-center">Sign Up</h2>

          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSignup}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder=""
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="dark" type="submit" className="w-100">
              SIGN UP
            </Button>
          </Form>
        </div>

        <div className="right">
          <div className="right-content">
            <h3>Already have an account?</h3>
            <p>Login now and explore exciting opportunities!</p>
            <Link to="/login">
            <Button
  className="custom-login-btn"
  style={{
    background: "transparent",
    color: "white",
    border: "2px solid #c7a17a",
    padding: "8px 25px",
    borderRadius: "20px",
    transition: "0.3s",
    fontWeight: "bold",
  }}
  onMouseEnter={(e) => {
    e.target.style.background = "#b08968";
    e.target.style.color = "white";
  }}
  onMouseLeave={(e) => {
    e.target.style.background = "transparent";
    e.target.style.color = "white";
  }}
>
  Login
</Button>

            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Signup;
