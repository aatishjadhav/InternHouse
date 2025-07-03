import { Routes, Route } from "react-router-dom";
import JobListing from "./pages/JobListing";
import AddJob from "./pages/AddJob";
import JobDetails from "./pages/JobDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<JobListing />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/jobs/:jobId" element={<JobDetails />} />
      </Routes>
    </>
  );
}

export default App;
