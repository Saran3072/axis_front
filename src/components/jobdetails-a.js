import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./jobdetails-a.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faChartSimple,
  faUser,
  faFile,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
function Jobdetailsa() {
  const navigate = useNavigate();
  const job_id = useParams();
  console.log(job_id.id);
  const [jobDetails, setJobDetails] = useState({});
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
  useEffect(() => {
    fetchJobApplicants();
  }, []);
  const fetchJobApplicants = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/job-details/${job_id.id}`
      );
      setJobDetails(response.data.job_details);
      console.log(response.data);
      console.log(jobDetails)
    } catch (error) {
      console.error("Error fetching job details and applicants:", error);
    }
  };
  return (
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
            <FontAwesomeIcon icon={faFile} className="icon" onClick={handleSignOut}/> Sign Out
          </div>
        </div>
      </div>
      <div className="right-part">
        <div className="rp-upper">
          <p> Job Details</p>
        </div>
        <div className="rp-lower-a">
          <div className="rpl-heading-a">
            <h3>Job Details</h3>
            <div className="rpm-full-btn">
              <FontAwesomeIcon icon={faWrench} className="icon1" />{" "}
              <button>Edit</button>
            </div>
          </div>
          <div className="rpl-list-items">
            <div className="rpl-list-item">
              <b>Job Role :</b> {jobDetails.title}
            </div>
            <div className="rpl-list-item">
              <b>Company :</b> {jobDetails.company_name}
            </div>
            <div className="rpl-list-item">
              <b>Package :</b> {jobDetails.package}
            </div>
            <div className="rpl-list-item">
              <b>Number of Openings :</b> {jobDetails.number_of_openings}
            </div>
            <div className="rpl-list-item">
              <b>Job Description :</b> {jobDetails.description}
            </div>
            <div className="sfi-line-4-input">
              <button>
                <Link id="link" to={`/application/${job_id.id}`}>
                  APPLY
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobdetailsa;
