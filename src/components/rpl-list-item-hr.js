import React from "react";
import { Link } from "react-router-dom";
function Rpllistitemhr({ job }) {
  return (
    <div className="rpl-list-item-1">
      <div className="part-1">
        <p>{job.company_name}</p>
      </div>
      <div className="part-2">
        <h2>{job.title}</h2>
      </div>
      <div className="part-3">
        <p>
        {job.description}
        </p>
      </div>
      <div className="part-4">
        <button>
          <Link to={`/jd-rounds/${job.id}`}>View</Link>
        </button>
      </div>
    </div>
  );
}

export default Rpllistitemhr;
