import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const viewProject = createAsyncThunk(
     'projects/fetchData',
     async () => {
          const response = await axios.get("http://localhost:8000/projects");

          return response.data;

     }
)

const initialState = {
     data: null,
     loading: false,
     error: null,
   };

const ProjectSlice = createSlice({
     name: "projects",
     initialState,
     reducers: {},
     extraReducers: (builder) => {
          builder
               .addCase(viewProject.pending, (state) => {
                    state.loading = true;
                    state.error = null;
               })
               .addCase(viewProject.fulfilled, (state, action) => {
                    state.loading = false;
                    state.data = action.payload;
               })
               .addCase(viewProject.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
               });
     }
})


export default ProjectSlice.reducer;