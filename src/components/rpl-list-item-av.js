import React from "react";
import { Link } from "react-router-dom";

function Rpllistitemav({ application, jobDetails }) {
  return (
    <div className="rpl-list-item-1">
      <div className="part-1">
        <p>{jobDetails.company_name}</p>
      </div>
      <div className="part-2">
        <h2>{jobDetails.title}</h2>
      </div>
      <div className="part-3">
        <p>{jobDetails.description}</p>
      </div>
      <div className="part-4">
        <button>
          <Link to={`/jobdetails-a/${jobDetails.id}`}>View</Link>
        </button>
      </div>
      <div className="part-5">
        <p>
          <b>Status :</b> {application.qualified_round}
        </p>
      </div>
    </div>
  );
}

export default Rpllistitemav;
