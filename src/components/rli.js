import React from "react";

function Rli({props}) {
  return (
    <div className="round-list-item">
      <div className="rli-right">
        <div className="rli-pic">
          <img src="/assets/Image.png" />
        </div>
        <div className="rli-text">
          <h3>{props.name}</h3>
          <p>{props.email}</p>
        </div>
      </div>
      <div>
        <p>View Profile</p>
      </div>
    </div>
  );
}

export default Rli;
