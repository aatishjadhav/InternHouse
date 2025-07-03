import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteJobs, getAllJobs } from "../slices/jobSlice";
import { Link } from "react-router-dom";

const JobListing = () => {
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.jobs);
  console.log(jobs);

  const [searchJob, setSearchJob] = useState("");

  const filteredJobs = jobs?.filter((job) => job.jobTitle.toLowerCase().includes(searchJob.toLowerCase()));

  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  const handleDelete = (jobId) => {
    dispatch(deleteJobs(jobId));
  };

  return (
    <div className="container">
      <input
        type="text"
        className="form-control mt-3"
        placeholder="Search by job title..."
        onChange={(e) => setSearchJob(e.target.value)}
      />
      <h2 className="py-3">All Jobs</h2>
      <div className="row">
        {filteredJobs?.map((job) => (
          <div key={job._id} className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{job.jobTitle}</h5>
                <p className="card-text">
                  <strong>Company Name: </strong>
                  {job.companyName}
                </p>
                <p className="card-text">
                  <strong>Location: </strong>
                  {job.location}
                </p>
                <p className="card-text">
                  <strong>Job Type: </strong>
                  {job.jobType}
                </p>
                <div className="d-flex gap-2">
                  <Link
                    className="btn btn-primary w-50"
                    to={`/jobs/${job._id}`}
                  >
                    See Details
                  </Link>
                  <button
                    className="btn btn-danger w-50"
                    onClick={() => handleDelete(job._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListing;
