import React from "react";
import "../App.css";
import "./landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div className="l-page">
        <div className="l-1">
          <nav className="navbar">
            <div className="logo">
              {/* <Link to="/" style={{ color: "white" }}>
                Career
              </Link>
              <Link to="/">Connect</Link> */}
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
          <div className="foralign">
            <div className="main-text">CarrerConnect</div>
            <div className="caption">
              The Heroes of HR team find their Superstars !
            </div>
          </div>
        </div>
        <div className="l-2">
          <p>
            Welcome to the future of <b>AI-powered job recruitment </b>and
            evaluation ! with our state-of-the-art platform, you can say goodbye
            to tedious manual process and hello to a more efficient, data-driven
            approach to hiring top talent.
          </p>
        </div>
        <div className="l-3">
          <div className="l-button">
            <div className="l-3-btn">
              <FontAwesomeIcon icon={faCheck} />
              <p>Job Search</p>
            </div>
          </div>
          <div className="l-3-img">
            <p>ENHANCE YOUR JOB SEARCH.</p>
          </div>
        </div>
        <div className="l-4">
          <div className="l-button">
            <div className="l-3-btn">
              <FontAwesomeIcon icon={faCheck} />
              <p>Talent Acquisition</p>
            </div>
          </div>
          <div className="l-4-img">
            <p>EMPOWER YOUR HR TEAMS.</p>
          </div>
          <div className="big-num">289</div>
          <p className="half-only">
            Successful hirings and <br />
            counting
          </p>
          <p className="l-matter">
            Ready to recharge your recruitment process?Unlock the full potential
            of your HR team.
          </p>
          <div className="l-button">
            <div className="l-3-btn last-btn">
              <p>
                <Link to="/signuphr">
                  <p>Get Started</p>
                </Link>
              </p>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
          <p className="l-matter">
            Ready to turbocharge your job search?Unleash your true potential and
            stand out in a competitive market.
          </p>
          <div className="l-button">
            <div className="l-3-btn last-btn-2">
              <Link to="/signupa">
                <p>Get Started</p>
              </Link>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
