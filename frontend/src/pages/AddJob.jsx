import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewJob } from "../slices/jobSlice";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [jobType, setJobType] = useState("");
  const [description, setDescription] = useState("");
  const [qualifications, setQualifications] = useState("");

  const handleSubmitJob = (e) => {
    e.preventDefault();
    const jobsData = {
      jobTitle,
      companyName,
      location,
      salary: Number(salary),
      jobType,
      description,
      qualifications: qualifications.split(",").map((q) => q.trim()),
    };
    dispatch(addNewJob( jobsData ));
    console.log(jobsData);
    
    navigate("/");
  };
  return (
    <div className="container py-3">
      <h2 className="py-2">Post a Job</h2>
      <form action="" onSubmit={handleSubmitJob}>
        <label htmlFor="">Job Title:</label>
        <input
          type="text"
          className="form-control mb-2"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <label htmlFor="">Company Name:</label>
        <input
          type="text"
          className="form-control mb-2"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <label htmlFor="">Location:</label>
        <input
          type="text"
          className="form-control mb-2"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label htmlFor="">Salary:</label>
        <input
          type="number"
          className="form-control mb-2"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <label htmlFor="">Job Type:</label>
        <input
          type="text"
          className="form-control mb-2"
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
        />
        <label htmlFor="">Job Description:</label>
        <textarea
          name=""
          id=""
          className="form-control mb-2"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label htmlFor="">Job Qualification:</label>
        <textarea
          name=""
          id=""
          className="form-control mb-2"
          onChange={(e) => setQualifications(e.target.value)}
        ></textarea>

        <button type="submit" className="btn btn-primary mt-2">
          Post Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
