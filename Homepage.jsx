import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="container mt-5">
    <h1>Welcome to Our Website</h1>
    <div className="card mt-4" style={{ width: "18rem" }}>
      <img
        src="https://via.placeholder.com/300"
        className="card-img-top"
        alt="Card Image"
      />
      <div className="card-body">
        <h5 className="card-title">Image Card</h5>
        <p className="card-text">
          This is a simple image card to display an illustration.
        </p>
      </div>
    </div>
  </div>
);

const Login = () => (
  <div className="container mt-5">
    <h2>Login</h2>
    <p>Please enter your login details.</p>
  </div>
);

const Signup = () => (
  <div className="container mt-5">
    <h2>Signup</h2>
    <p>Create a new account by filling out the form below.</p>
  </div>
);

const Homepage = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            BrandName
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Homepage;
