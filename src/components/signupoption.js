import React from "react";
import { Link } from "react-router-dom";
import "./signupoption.css";

function Signupoption() {
  return (
    <div className="suo-backgrd">
      <h1>Ready to dive in? Choose your path below .!</h1>
      <ul className="btn-align">
        <li>
          <Link to="/signuphr">Sign up as HR</Link>
        </li>
        <li>
          <Link to="/signupa">Sign up as applicant</Link>
        </li>
      </ul>
      <button className="returnhome">
        <Link to="/">Return Home</Link>
      </button>
    </div>
  );
}

export default Signupoption;
