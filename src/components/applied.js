import React, { useState, useEffect } from "react";
import "./applied.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faChartSimple,
  faUser,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import Rpllistitemav from "./rpl-list-item-av";

function Applied() {
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
  const [jobDetails, setJobDetails] = useState([]);

  useEffect(() => {
    fetchJobDetails();
  }, []);

  const fetchJobDetails = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/applied-jobs",
        {
          withCredentials: true,
        }
      );
      setJobDetails(response.data.job_details);
    } catch (error) {
      console.error("Error fetching job details:", error);
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
          {/* <div className="rp-middle">
            <div className="rpm-align">
              <div className="rpm-pic">
                <img src="/assets/Image.png" />
              </div>
              <div className="rpm-text">
                <h3>Bokka Shashikanth</h3>
                <p>shashikanthb13@gmail.com</p>
              </div>
            </div>
            <div> */}
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
          {/* </div>
          </div> */}
          <div className="rp-lower">
            <div className="rpl-heading">
              <h3>All applied Jobs</h3>
            </div>
            <div className="rpl-list-items">
              {jobDetails.map((job) => (
                <div className="rpl-list-item-1" key={job.id}>
                  <div className="part-1">
                    <p>{job.company_name}</p>
                  </div>
                  <div className="part-2">
                    <h2>{job.title}</h2>
                  </div>
                  <div className="part-3">
                    <p>{job.description}</p>
                  </div>
                  <div className="part-4">
                    <button>
                      <Link to={`/jobdetails-a/${job.id}`}>View</Link>
                    </button>
                  </div>
                  {/* Display other job details here */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Applied;
