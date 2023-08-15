import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./application.css";
function Application() {
  const navigate = useNavigate();
  const job_id = useParams();
  const id = job_id.id;
  console.log(id);
  const [app_id, setID] = useState("");
  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/user-applicant",
        {
          withCredentials: true, // Send cookies along with the request
        }
      );
      setID(response.data.id);
      console.log(response.data);
      console.log(response.data.id);
      // Log the received user details
    } catch (error) {
      console.error("Error fetching user details:", error);
      // Handle error responses here
    }
  };
  const [formData, setFormData] = useState({
    resume: "",
    cover_letter: "",
    job_posting: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      job_posting: id,
    }));
  }, [id]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:8000/api/apply-applicant/", formData, {
        withCredentials: true, // Send cookies along with the request
      })
      .then((response) => {
        // Display a success alert
        alert("Success");
        console.log("Posted Succesfully");
        navigate("/dashboard-a");
      })
      .catch((error) => {
        // Display an error alert
        alert("Error: " + error.message);
        console.log("Not Posted");
      });
  };
  return (
    <>
      <div className="ap-screen">
        <div className="ap-upper">
          <p>Application</p>
        </div>
        <div className="ap-middle">
          <h3>Resume * ( Upload in text format )</h3>
          <textarea
            rows="15"
            cols="100"
            name="resume"
            value={formData.resume}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="ap-lower">
          <h3> Cover Letter </h3>
          <textarea
            rows="15"
            cols="100"
            name="cover_letter"
            value={formData.cover_letter}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="ap-btn">
          <button onClick={handleSubmit}>CONTINUE FOR APPLICATION</button>
        </div>
      </div>
    </>
  );
}

export default Application;
