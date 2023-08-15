import React, { useState, useEffect } from "react";
import "./job-posting.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import {
  faHouse,
  faChartSimple,
  faUser,
  faFile,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
function Jobposting() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Clear authentication from frontend
    localStorage.removeItem("token");

    // Clear authentication from backend (via API call)
    axios
      .post("http://localhost:8000/api/logout/", null, {
        withCredentials: true,
      })
      .then(() => {
        // Redirect to landing page
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  const [companyName, setCompanyName] = useState("");
  const [id, setID] = useState("");
  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/user-hr/", {
        withCredentials: true, // Send cookies along with the request
      });
      setCompanyName(response.data.company);
      setID(response.data.id);
      console.log(response.data.company);
      console.log(companyName)
      console.log(id)
      // Log the received user details
    } catch (error) {
      console.error("Error fetching user details:", error);
      // Handle error responses here
    }
  };

  const [formData, setFormData] = useState({
    poster: "",
    title: "",
    description: "",
    expected_cgpa: "",
    package: "",
    number_of_openings: "",
    expected_interviewees: "",
    company_name: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      poster: id,
      company_name: companyName
    }));
  }, [id, companyName]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:8000/api/job-posting/", formData, {
        withCredentials: true, // Send cookies along with the request
      })
      .then((response) => {
        // Display a success alert
        alert("Success");
        console.log("Posted Succesfully");
        navigate("/dashboard-hr");
      })
      .catch((error) => {
        // Display an error alert
        alert("Error: " + error.message);
        console.log("Not Posted");
      });
  };

  return (
    <div className="dboard-screen">
      <div className="left-part">
        <div className="left-align">
          <div className="lp-button">
            <FontAwesomeIcon icon={faHouse} className="icon" />{" "}
            <Link id="link" to="/dashboard-hr">
              Dashboard
            </Link>
          </div>
          <div className="lp-button">
            <FontAwesomeIcon icon={faChartSimple} className="icon" />
            <Link id="link" to="/job-posting">
              Post A Job
            </Link>
          </div>
          <div>
            <p className="lp-text">ACCOUNT PAGES</p>
          </div>
          <div className="lp-button">
            <FontAwesomeIcon icon={faUser} className="icon" />{" "}
            <Link id="link" to="/profilehr">
              Profile
            </Link>
          </div>
          <div className="lp-button">
            <FontAwesomeIcon
              icon={faFile}
              className="icon"
              onClick={handleSignOut}
            />{" "}
            Sign Out
          </div>
        </div>
      </div>
      <div className="right-part">
        <div className="rp-upper">
          <p> Posting a New Job</p>
        </div>
        <div className="rp-form">
          <h1>Job Details</h1>
          <div className="rp-form-inner">
            <div className="rp-line-1">
              <FontAwesomeIcon icon={faUser} />

              <input
                type="text"
                id="jobtitle"
                placeholder="Job Title/Job Role *"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="rp-line-2">
              <div className="rp-line-2-input">
                <FontAwesomeIcon icon={faUser} />

                <input
                  type="text"
                  id="package"
                  placeholder="Package *"
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                />
              </div>
              <div className="rp-line-2-input">
                <FontAwesomeIcon icon={faUser} />

                <input
                  type="text"
                  id="noofint"
                  placeholder="Application Limit *"
                  name="number_of_openings"
                  value={formData.number_of_openings}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="rp-line-3">
              <div className="rp-line-2-input">
                <FontAwesomeIcon icon={faUser} />

                <input
                  type="text"
                  id="expcgpa"
                  placeholder="Expected CGPA *"
                  name="expected_cgpa"
                  value={formData.expected_cgpa}
                  onChange={handleChange}
                />
              </div>
              <div className="rp-line-2-input">
                <FontAwesomeIcon icon={faUser} />

                <input
                  type="text"
                  id="noofopen"
                  placeholder="Number of Jobs *"
                  name="expected_interviewees"
                  value={formData.expected_interviewees}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="rp-line-1 rp-line-btn">
              <FontAwesomeIcon icon={faUser} />

              <input
                type="text"
                id="jd"
                placeholder=" Job Description *"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
              <div className="rp-line-4-input">
                <button>ENHANCE</button>
              </div>
            </div>
            <div className="rp-line-1 ">
              <FontAwesomeIcon icon={faUser} />

              <input
                type="text"
                id="eligibility"
                placeholder=" Eligibility Criteria"
              />
            </div>
            <div className="rp-line-4">
              <div className="rp-line-4-input">
                <button>ADD</button>
              </div>
              <div className="rp-line-4-input">
                <button onClick={handleSubmit}>SAVE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Jobposting;
