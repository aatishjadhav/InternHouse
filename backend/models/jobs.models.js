const mongoose = require("mongoose");

const jobsSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  qualifications: [
    {
      type: String,
      required: true,
    },
  ],
});

const Jobs = mongoose.model("Jobs", jobsSchema);
module.exports = Jobs;
