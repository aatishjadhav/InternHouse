import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const JobDetails = () => {
  const { jobId } = useParams();
  const { jobs } = useSelector((state) => state.jobs);

  const getJob = jobs.find((job) => job._id == jobId);
  console.log(getJob);
  
  return (
    <div className='container'>
      <h2 className='py-2'>{getJob.jobTitle}</h2>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                  <strong>Company Name: </strong>
                  {getJob.companyName}
                </p>
                <p className="card-text">
                  <strong>Location: </strong>
                  {getJob.location}
                </p>
                <p className="card-text">
                  <strong>Salary: </strong>
                  {getJob.salary}
                </p>
                <p className="card-text">
                  <strong>Job Type: </strong>
                  {getJob.jobType}
                </p>
                <p className="card-text">
                  <strong>Description: </strong>
                  {getJob.description}
                </p>
                <p className="card-text">
                <strong>Qualifications: </strong>
                <ol>
                {getJob.qualifications.map((qal) => (
                  <li>{ qal}</li>
                  ))}
                  </ol>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetails