import "./jd-rounds.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faChartSimple,
  faUser,
  faFile,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Rli from "./rli";

function Jdrounds() {
  const navigate = useNavigate();
  const job_id = useParams();
  console.log(job_id.id);
  const [jobDetails, setJobDetails] = useState({});
  const [applicants, setApplicants] = useState([]);
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
        `http://localhost:8000/api/job-applicants/${job_id.id}`
      );
      setJobDetails(response.data.job_details);
      setApplicants(response.data.applicants);
      console.log(response.data);
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
            <FontAwesomeIcon icon={faUser} className="icon" />
            <Link id="link" to="/profilehr">
              Profile
            </Link>
          </div>
          <div className="lp-button">
            <FontAwesomeIcon
              icon={faFile}
              className="icon"
              onClick={handleSignOut}
            />
            <Link to="/">Sign Out</Link>
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
              <b>Company :</b> title{jobDetails.company_name}
            </div>
            <div className="rpl-list-item">
              <b>Package :</b> {jobDetails.package}
            </div>
            <div className="rpl-list-item">
              <b>Number of Openings :</b> {jobDetails.number_of_openings}
            </div>
            <div className="rpl-list-item">
              <b>Job Description Score :</b>
            </div>
            <div className="rpl-list-item">
              <b>Job Description :</b> {jobDetails.description}
            </div>
            <div className="rpl-list-item">
              <b>Eligibility Criteria :</b> Nothing
            </div>
            <div className="rounds">
              <div className="round-heading">
                <h3>
                  Round 1 - Resume Review Selects ( Written exam to be conducted
                  )
                </h3>
              </div>
              <p>Details</p>
              <div className="round-list">
                {applicants.map((props) => (
                  <Rli props={props} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jdrounds;
