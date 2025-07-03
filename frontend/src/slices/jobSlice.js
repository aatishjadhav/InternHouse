import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../utils/config";

export const getAllJobs = createAsyncThunk("jobs/getjobs", async () => {
  const response = await axios.get(`${BASE_URL}/jobs`);
  return response.data;
});

export const addNewJob = createAsyncThunk("job/addJob", async (jobData) => {
  const response = await axios.post(`${BASE_URL}/jobs`, jobData);
  return response.data;
});

export const updateJob = createAsyncThunk(
  "job/updateJob",
  async ({ jobId, jobData }) => {
    const response = await axios.put(`${BASE_URL}/jobs/${jobId}`, jobData);
    return response.data;
  }
);

export const deleteJobs = createAsyncThunk("job/deleteJob", async (jobId) => {
  await axios.delete(`${BASE_URL}/jobs/${jobId}`);
  return jobId;
});

export const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllJobs.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getAllJobs.fulfilled, (state, action) => {
      state.status = "success";
      state.jobs = action.payload;
    });
    builder.addCase(getAllJobs.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
    builder.addCase(addNewJob.fulfilled, (state, action) => {
      state.jobs.push(action.payload);
    });
    builder.addCase(updateJob.fulfilled, (state, action) => {
      state.jobs = state.jobs.map((job) =>
        job._id === action.payload._id ? action.payload : job
      );
    });
    builder.addCase(deleteJobs.fulfilled, (state, action) => {
      state.jobs = state.jobs.filter((job) => job._id !== action.payload);
    });
  },
});

export default jobSlice.reducer;
