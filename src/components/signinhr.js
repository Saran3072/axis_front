import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import "./signin.css";
import "../App.css";
function Signinhr() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/login-hr/", formData, {
        withCredentials: true, // Send cookies along with the request
      })
      .then((response) => {
        const token = response.data.jwt;
        console.log(token);
        localStorage.setItem("token", token);
        if (response.data.status === "Success") {
          // Redirect to the profile page on successful login
          alert("Success");
          navigate("/dashboard-hr");
        } else {
          alert("Wrong Credentials");
        }
      })
      .catch((error) => {
        alert("Error: " + error.message);
        console.error("Error posting data:", error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="sin-page">
        <nav className="navbar-1">
          <div className="logo-1">
            <Link to="/">
              <img id="logo" src="/assets/axisbank-logo.png" />
            </Link>{" "}
          </div>
          <ul>
            <li>
              <Link to="/signinoption">Sign in</Link>
            </li>
            <li>
              <Link to="/signupoption">Sign up</Link>
            </li>
          </ul>
        </nav>
        <div className="form-inner">
          <div className="form-group">
            <FontAwesomeIcon icon={faUser} />
            <label htmlfor="email"></label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="User Name"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <FontAwesomeIcon icon={faLock} />
            <label htmlfor="password"></label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password.."
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button className="signinbutton" onClick={handleSubmit}>
            GET STARTED
          </button>

          {/* <div className="Forgot_password">
            <button className="Forgot_password"></button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Signinhr;
