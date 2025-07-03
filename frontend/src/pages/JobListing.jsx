import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteJobs, getAllJobs } from "../slices/jobSlice";
import { Link } from "react-router-dom";

const JobListing = () => {
  const dispatch = useDispatch();
  const { jobs, status, error } = useSelector((state) => state.jobs);
 const toastRef = useRef(null);
  const [searchJob, setSearchJob] = useState("");

  const filteredJobs = jobs?.filter((job) =>
    job?.jobTitle?.toLowerCase().includes(searchJob.toLowerCase())
  );

  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  const handleDelete = (jobId) => {
    dispatch(deleteJobs(jobId));
      // Trigger toast
    const toast = new window.bootstrap.Toast(toastRef.current);
    toast.show();
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
      {error && <p>{error}</p>}
      {status === "loading" ? (
        <div class="d-flex align-items-center">
          <strong role="status">Loading...</strong>
          <div class="spinner-border ms-auto" aria-hidden="true"></div>
        </div>
      ) : (
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
      )}
       <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 9999 }}>
        <div
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          ref={toastRef}
        >
          <div className="toast-header">
            <img
              src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
              className="rounded me-2"
              alt="Bootstrap"
              width="20"
            />
            <strong className="me-auto">Success</strong>
            <small>Just now</small>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">Job added successfully!</div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
