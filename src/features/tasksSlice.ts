import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../types/Task";

const initialTask: Task[] = [];

const tasksSlice = createSlice({
    name: "tasks",
    initialState: initialTask,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },
        removeTask: (state, action) => {
            return state.filter((task: { id: number; }) => task.id !== action.payload.id)
        },
        editTask: (state, action) => {
            const { id, title, description } = action.payload;
            const task = state.find(task => task.id === id);
            if (task) {
                task.title = title;
                task.description = description
            }
        },
        toogleComplete: (state, action) => {
            const task = state.find(task => task.id === action.payload.id);
            if (task) {
                task.completed = true
            }
        }
    }
})

const tasksReducer =  tasksSlice.reducer;

export const { addTask, removeTask, editTask, toogleComplete } = tasksSlice.actions;
export default tasksReducer;