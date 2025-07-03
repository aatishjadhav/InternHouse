const mongoose = require("mongoose");
require("dotenv").config();

const Jobs = require("../models/jobs.models");

const sampleJobs = [
  {
    jobTitle: "Software Engineer",
    companyName: "TechCorp",
    location: "San Francisco, CA",
    salary: 120000,
    jobType: "Full-time (On-site)",
    description: "Build and maintain scalable web applications.",
    qualifications: [
      "Bachelor’s degree in Computer Science",
      "3+ years of experience in full-stack development",
      "Strong knowledge of JavaScript and Node.js",
    ],
  },
  {
    jobTitle: "Content Writer",
    companyName: "Creative Ink",
    location: "Austin, TX",
    salary: 40000,
    jobType: "Part-time (Remote)",
    description: "Create engaging blog and web content for clients.",
    qualifications: [
      "Excellent writing and editing skills",
      "Familiarity with SEO principles",
      "Experience in digital marketing content",
    ],
  },
  {
    jobTitle: "Data Analyst",
    companyName: "Data Insights Inc.",
    location: "Chicago, IL",
    salary: 85000,
    jobType: "Full-time (On-site)",
    description: "Analyze data and generate actionable insights.",
    qualifications: [
      "Bachelor’s degree in Statistics or Data Science",
      "Proficiency in SQL and Excel",
      "Experience with Tableau or Power BI",
    ],
  },
  {
    jobTitle: "UI/UX Designer",
    companyName: "Design Studio",
    location: "Seattle, WA",
    salary: 60000,
    jobType: "Part-time (On-site)",
    description: "Design user-friendly interfaces and improve UX.",
    qualifications: [
      "Experience with Figma and Adobe XD",
      "Strong design portfolio",
      "Knowledge of responsive design",
    ],
  },
  {
    jobTitle: "DevOps Engineer",
    companyName: "CloudTech",
    location: "Remote",
    salary: 115000,
    jobType: "Full-time (Remote)",
    description: "Manage CI/CD pipelines and cloud infrastructure.",
    qualifications: [
      "Experience with AWS and Docker",
      "Knowledge of Kubernetes",
      "Scripting in Bash or Python",
    ],
  },
  {
    jobTitle: "Customer Support Representative",
    companyName: "Supportly",
    location: "Remote",
    salary: 45000,
    jobType: "Full-time (Remote)",
    description: "Provide technical and product support to customers.",
    qualifications: [
      "Excellent communication skills",
      "Experience with CRM software",
      "Ability to troubleshoot issues effectively",
    ],
  },
];


const seedJobs = async () => {
  try {
    await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("🌱 Connected to MongoDB for seeding...");

    await Jobs.deleteMany(); 
    await Jobs.insertMany(sampleJobs);

    console.log("✅ Seeded jobs successfully.");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding jobs:", error.message);
    process.exit(1);
  }
};

seedJobs();
