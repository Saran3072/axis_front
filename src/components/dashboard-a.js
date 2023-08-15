import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./dashboard-a.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faChartSimple,
  faUser,
  faFile,
  faBox,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import Rpllistitema from "./rpl-list-item-a";

function Dashboarda() {
  const navigate = useNavigate();
  const [jobPostings, setJobPostings] = useState([]);

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

  const [userDetails, setUserDetails] = useState({
    id: "",
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

  useEffect(() => {
    fetchUserDetails();
    fetchJobPostings();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/user-applicant/",
        {
          withCredentials: true, // Send cookies along with the request
        }
      );
      setUserDetails(response.data);
      console.log(response.data); // Log the received user details
    } catch (error) {
      console.error("Error fetching user details:", error);
      // Handle error responses here
    }
  };
  const fetchJobPostings = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/all-jobs-applicant/",
        {
          withCredentials: true,
        }
      );
      setJobPostings(response.data);
      console.log(response.data); // Log the received job postings
    } catch (error) {
      console.error("Error fetching job postings:", error);
    }
  };
  return (
    <>
      <div className="dboard-screen">
        <div className="left-part">
          <div className="left-align">
            <div className="lp-button">
              <FontAwesomeIcon icon={faHouse} className="icon" />{" "}
              <Link id="link" to="/dashboard-a">
                Dashboard
              </Link>
            </div>
            <div className="lp-button">
              <FontAwesomeIcon icon={faChartSimple} className="icon" />
              <Link id="link" to="/applied">
                Applications
              </Link>
            </div>
            <div className="lp-button">
              <FontAwesomeIcon icon={faChartSimple} className="icon" />
              <Link id="link" to="/assesment">
                Assesments
              </Link>
            </div>

            <div>
              <p className="lp-text">ACCOUNT PAGES</p>
            </div>
            <div className="lp-button">
              <FontAwesomeIcon icon={faUser} className="icon" />{" "}
              <Link id="link" to="/profile-a">
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
            <p>Dashboard</p>
          </div>
          <div className="rp-middle">
            <div className="rpm-align">
              <div className="rpm-pic">
                <img src="/assets/Image.png" />
              </div>
              <div className="rpm-text">
                <h3>{userDetails.name}</h3>
                <p>{userDetails.email}</p>
              </div>
            </div>
            <div>
              {/* <div className="rpm-buttons">
                <div className="rpm-full-btn">
                  <FontAwesomeIcon icon={faBox} className="icon1" />{" "}
                  <button>Overview</button>
                </div>
                <div className="rpm-full-btn">
                  <FontAwesomeIcon icon={faWrench} className="icon1" />{" "}
                  <button>Edit</button>
                </div>
              </div> */}
            </div>
          </div>
          <div className="rp-lower">
            <div className="rpl-heading">
              <h3>All Jobs</h3>
            </div>
            <div className="rpl-list-items">
              {jobPostings.map((job) => (
                <Rpllistitema key={job.id} job={job} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboarda;
