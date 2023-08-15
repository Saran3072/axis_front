import React, { useState, useEffect } from "react";
import "./dashboard-a.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faChartSimple,
  faUser,
  faFile,
  faBox,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import Rpllistitemhr from "./rpl-list-item-hr";

function Dashboardhr() {
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

  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    fetchUserDetails();
    fetchJobPostings();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/user-hr/", {
        withCredentials: true, // Send cookies along with the request
      });
      setID(response.data.id);
      setName(response.data.name);
      setEmail(response.data.email);
      console.log(response.data); // Log the received user details
    } catch (error) {
      console.error("Error fetching user details:", error);
      // Handle error responses here
    }
  };
  const fetchJobPostings = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/postings-hr/",
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
            <p>Dashboard</p>
          </div>
          <div className="rp-middle">
            <div className="rpm-align">
              <div className="rpm-pic">
                <img src="/assets/Image.png" />
              </div>
              <div className="rpm-text">
                <h3>{name}</h3>
                <p>{email}</p>
              </div>
            </div>
          </div>
          <div className="rp-lower">
            <div className="rpl-heading">
              <h3>Jos Posted by You</h3>
            </div>
            <div className="rpl-list-items">
              {jobPostings.map((job) => (
                <Rpllistitemhr key={job.id} job={job} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboardhr;
