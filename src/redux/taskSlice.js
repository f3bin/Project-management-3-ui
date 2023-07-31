import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
     try {
          const response = await fetch("http://localhost:8000/tasks");
          return response.json();
     } catch (error) {
          console.error('Error fetching chat data:', error);
          throw new Error('Failed to fetch chat data.');
     }
})

const initialState = {
     task: null
}

const taskSlice = createSlice({
     name: 'tasks',
     initialState,
     reducers: {},
     extraReducers: (builder) =>{
          builder.addCase(fetchTasks.fulfilled, (state, action) => {
               state.status = 'succeeded';
               state.chats = action.payload;
          })
     }
})

export default taskSlice.reducer;