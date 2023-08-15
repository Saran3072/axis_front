import React from "react";
import "./assesment.css";
function Assesment() {
  return (
    <>
      <div className="as-screen">
        <div className="as-upper">
          <p>Assesment</p>
        </div>
        <div className="as-mid-top">
          <h3>Assesment for Frontend Role</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p></p>
        </div>

        <div className="as-lower">
          <h3> What is HTML ? </h3>
          <textarea rows="15" cols="100"></textarea>
        </div>
        <div className="as-lower">
          <h3> What is CSS ? </h3>
          <textarea rows="15" cols="100"></textarea>
        </div>
        <div className="as-lower">
          <h3> What is MERN ? </h3>
          <textarea rows="15" cols="100"></textarea>
        </div>
        <div className="as-lower">
          <h3> How do you maintain servers in MERN stack ? </h3>
          <textarea rows="15" cols="100"></textarea>
        </div>
        <div className="as-lower">
          <h3> What is postman ?</h3>
          <textarea rows="15" cols="100"></textarea>
        </div>
        <button className="as-submit">SUBMIT</button>
      </div>
    </>
  );
}

export default Assesment;
