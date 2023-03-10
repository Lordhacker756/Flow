import { createSlice } from "@reduxjs/toolkit";

interface TaskState {
    task: {
        id: string,
        title: string,
        date: string,
        time: string,
        category: string,
        working_sessions: number,
        long_break: number,
        short_break: number
    }[];
}

const initialState: TaskState = {
    task: []
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask(state, action) {
            // state.task.push(action.payload)
            console.log(action.payload)
        },

        deleteTask(state, action) {
            state.task = state.task.filter((task) => task.id !== action.payload)
        },

        editTask(state, action) {
            const { id, updatedTask } = action.payload;
            const index = state.task.findIndex((task) => task.id === id);
            if (index !== -1) {
                state.task[index] = updatedTask;
            }
        }
    }
})


export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
