import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const viewProject = createAsyncThunk(
     'projects/fetchData',
     async () => {
          const response = await axios.get("http://localhost:8000/projects");
          return response.data;

     }
)

export const viewProjectTeam = createAsyncThunk('projectTeam/fetchProjectTeam',
     async () => {
          const response = await axios.get("http://localhost:8000/project_team");
          return response.data
     })

const initialState = {
     projects: null,
     projectTeam: null,

};

const ProjectSlice = createSlice({
     name: "projects",
     initialState,
     reducers: {},
     extraReducers: (builder) => {

          builder.addCase(viewProject.fulfilled, (state, action) => {
               state.projects = action.payload;
          })

          builder.addCase(viewProjectTeam.fulfilled,(state,action)=>{
               state.projectTeam = action.payload;
          })

     }
})


export default ProjectSlice.reducer;