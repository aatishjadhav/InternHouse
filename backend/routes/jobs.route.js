const express = require("express");
const router = express.Router();
const {
  getAllJobs,
  addNewJob,
  updateJob,
  deleteJobs,
} = require("../controllers/jobs.controller");

router.get("/", getAllJobs);
router.post("/", addNewJob);
router.put("/:id", updateJob);
router.delete("/:id", deleteJobs);

module.exports = router;