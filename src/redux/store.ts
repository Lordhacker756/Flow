import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./slices/taskSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        task: taskSlice
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/* 
The store is going to, store two things, if the user is logged in or not, along with the user's data. 
There are going to be the following reducers

! Get Methods
- Get current day's task
- Get current week's task

TODO: This must be followed
The week tasks need to be fetched beforehand and used to display the current week's tasks, and the current day's tasks are going to refer the week's task and return the slice of data for the day. Insted of running the SQL command for it. 

! Post Methods
- AddTask: A reducer will be there to add a new task
- UpdateTask: A reducer will be there to update a task

TODO: After adding and updating the task, the task must be fetched again to update the state.

! Delete Methods
- DeleteTask: A reducer will be there to delete a task, which will take the task id as a parameter

TODO: After deleting the task, the task must be fetched again to update the state.
*/