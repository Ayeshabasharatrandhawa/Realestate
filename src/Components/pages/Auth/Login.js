import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.email === email);

    if (!user) {
      setError("No account found. Please sign up first.");
      return;
    }

    if (user.password !== password) {
      setError("Incorrect password. Try again.");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user));
    navigate("/");
  };

  return (
    <Container className="login-container">
      <div className="login-card">
        <div className="left">
          <h2 className="text-center">Login Now</h2>

          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="dark" type="submit" className="w-100">
              SIGN IN
            </Button>
          </Form>
        </div>

        <div className="right">
          <div className="right-content">
            <h3>New here?</h3>
            <p>Sign up and discover new opportunities!</p>
            <Link to="/signup">
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
  Signup
</Button>

            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
