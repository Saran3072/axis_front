import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import "./signuphr.css";
import axios from "axios";
function Signuphr() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    company: "",
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
    console.log(formData)
    axios
      .post("http://localhost:8000/api/register-hr/", formData)
      .then((response) => {
        // Display a success alert
        alert("Success");
        console.log("Posted Succesfully");
      })
      .catch((error) => {
        // Display an error alert
        alert("Error: " + error.message);
        console.log("Not Posted");
      });
  };
  return (
    <>
      <div className="sin-page">
        <nav className="navbar-1">
          <div className="logo-1">
            <Link to="/">
              <img id="logo" src="/assets/axisbank-logo.png" />
            </Link>
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

            <input
              type="text"
              id="fname"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <FontAwesomeIcon icon={faUser} />

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <FontAwesomeIcon icon={faUser} />

            <input
              type="tel"
              id="phno"
              name="mobile"
              placeholder="Contact Number"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <FontAwesomeIcon icon={faLock} />

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password.."
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <FontAwesomeIcon icon={faUser} />

            <input
              type="text"
              id="fname"
              name="company"
              placeholder=" Company Name"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <Link to="/signinhr"><button className="signinbutton" onClick={handleSubmit}>GET STARTED</button></Link>
          

          {/* <div className="Forgot_password">
            <button className="Forgot_password"></button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Signuphr;
