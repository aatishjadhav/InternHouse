const { initializeDB } = require("./db/db.connect");

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initializeDB();

const jobRoutes = require("./routes/jobs.route");

app.use("/jobs", jobRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
