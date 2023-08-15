import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import "./signupa.css";

function Signupa() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    degree: "",
    major: "",
    cgpa: "",
    passout: "",
    job_role: "",
    exp_desc: "",
    company: "",
    college: "",
    years: "",
    skills: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/register-applicant/",
        formData
      );
      alert("Success");
      console.log(response.data); // Success response from the server
      // You can perform further actions after successful submission, like redirecting the user
    } catch (error) {
      alert("Error: " + error.message);
      console.log("Not Posted");
      console.error(error);
      // Handle error responses here
    }
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
      <div className="sup-page">
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
              placeholder=" Full Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <FontAwesomeIcon icon={faUser} />

            <input
              type="email"
              name="email"
              id="email"
              placeholder="User Name"
              value={formData.email}
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
            />
          </div>

          {/* <button className="signupbutton">CONTINUE</button> */}
        </div>
      </div>
      <div className="full-form">
        <div className="sup-form">
          <h1>Educational Qualifications</h1>
          <div className="sup-form-inner">
            <h3>Latest Education</h3>
            <div className="sfi-line-1">
              <FontAwesomeIcon icon={faUser} />

              <input
                type="text"
                id="degree"
                placeholder=" Degree"
                name="degree"
                value={formData.degree}
                onChange={handleInputChange}
              />
            </div>
            <div className="sfi-line-1">
              <FontAwesomeIcon icon={faUser} />

              <input
                type="text"
                id="degree"
                placeholder=" College"
                name="college"
                value={formData.college}
                onChange={handleInputChange}
              />
            </div>
            <div className="sfi-line-2">
              <div className="sfi-line-2-input">
                <FontAwesomeIcon icon={faUser} />

                <input
                  type="text"
                  id="majorsub"
                  placeholder="Major Subject"
                  name="major"
                  value={formData.major}
                  onChange={handleInputChange}
                />
              </div>
              <div className="sfi-line-2-input">
                <FontAwesomeIcon icon={faUser} />

                <input
                  type="text"
                  id="cgpa"
                  placeholder="CGPA"
                  name="cgpa"
                  value={formData.cgpa}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="sfi-line-3">
              <div className="sfi-line-2-input">
                <FontAwesomeIcon icon={faUser} />

                <input
                  type="text"
                  id="clgyear"
                  placeholder="College Year"
                  name="years"
                  value={formData.years}
                  onChange={handleInputChange}
                />
              </div>
              <div className="sfi-line-2-input">
                <FontAwesomeIcon icon={faUser} />

                <input
                  type="text"
                  id="passout"
                  placeholder="Passing Out Year"
                  name="passout"
                  value={formData.passout}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="sfi-line-4">
              <div className="sfi-line-4-input">
                <button>ADD</button>
              </div>
              <div className="sfi-line-4-input">
                <button>SAVE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="sup-form">
          <h1>Work Experience</h1>
          <div className="sup-form-inner">
            <h3>Add New Experience</h3>
            <div className="sfi-line-1">
              <FontAwesomeIcon icon={faUser} />

              <input
                type="text"
                id="degree"
                placeholder="Employer"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
              />
            </div>
            <div className="sfi-line-2">
              <div className="sfi-line-2-input">
                <FontAwesomeIcon icon={faUser} />

                <input
                  type="text"
                  id="role"
                  placeholder="Role"
                  name="job_role"
                />
              </div>
              <div className="sfi-line-2-input">
                <FontAwesomeIcon icon={faUser} />

                <input type="text" id="cgpa" placeholder="From - To Date" />
              </div>
            </div>
            <div className="sfi-line-1">
              <FontAwesomeIcon icon={faUser} />

              <input
                type="text"
                id="degree"
                placeholder="Description"
                name="exp_desc"
                value={formData.exp_desc}
                onChange={handleInputChange}
              />
            </div>

            <div className="sfi-line-4">
              <div className="sfi-line-4-input">
                <button>ADD</button>
              </div>
              <div className="sfi-line-4-input">
                <button>SAVE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="sup-form">
          <h1>Skills</h1>
          <div className="sup-form-inner">
            <h3>Enter all skills ( comma seperated )</h3>
            <div className="sfi-line-1">
              <input
                type="text"
                id="degree"
                placeholder="Enter the skills .."
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
              />
            </div>

            <div className="sfi-line-4">
              <div className="sfi-line-4-input">
                <button>SAVE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="big-btn">
          <button onClick={handleSubmit}>
            <Link to="/signina">CONTINUE</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Signupa;
