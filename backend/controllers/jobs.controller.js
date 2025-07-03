const Jobs = require("../models/jobs.models");

const getAllJobs = async (req, res) => {
  try {
    const getJobs = await Jobs.find({});
    res.status(200).json(getJobs);
  } catch (error) {
    console.error("Error while fetching jobs", error);
  }
};

const addNewJob = async (req, res) => {
  try {
    const {
      jobTitle,
      companyName,
      location,
      salary,
      jobType,
      description,
      qualifications,
    } = req.body;
    const addJob = new Jobs({
      jobTitle,
      companyName,
      location,
      salary,
      jobType,
      description,
      qualifications,
    });
    await addJob.save();
    res.status(201).json({ message: "Added new job post", jobs: addJob });
  } catch (error) {
    console.error("Error while adding jobs", error);
  }
};

const updateJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    const dataToUpdate = req.body;
    const updatedJob = await Jobs.findByIdAndUpdate(jobId, dataToUpdate, {
      new: true,
    });
    if (updateJob) {
      return res
        .status(200)
        .json({ message: "Job post updated successfully", jobs: updateJob });
    }
  } catch (error) {
    console.error("Error while updating jobs", error);
  }
};

const deleteJobs = async (req, res) => {
  try {
    const jobId = req.params.id;
    const deletedJob = await Jobs.findByIdAndDelete(jobId);
    if (deletedJob) {
      return res
        .status(200)
        .json({ message: "Job deleted successfully.", jobs: deletedJob });
    }
  } catch (error) {
    console.error("Error while deleting jobs", error);
  }
};

module.exports = { getAllJobs, addNewJob, updateJob, deleteJobs };
