import { configureStore } from "@reduxjs/toolkit";
import ProjectReducer from "./ProjectSlice";
import usersReducer from "./usersSlice";
import chatReducer from "./chatSlice";
import taskReducer from "./taskSlice";


export const Store = configureStore({
     reducer: {
          projects: ProjectReducer,
          users: usersReducer,
          chats: chatReducer,
          tasks: taskReducer,
     }
})