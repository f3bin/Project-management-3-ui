import { configureStore, prepareAutoBatched } from "@reduxjs/toolkit";
import ProjectReducer from "./ProjectSlice";

export const Store = configureStore({
     reducer:{
          projects:ProjectReducer,
     }
})