import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'taskslice',
    initialState: {
        taskError: false,
        taskLoading: true,
        taskData: [],
        errMsg: '',
    },
    reducers:{
        tasksLoading: (state) => {
            state.taskLoading=true;
            state.taskError=false;
        },
        tasksError: (state, action) => {
            state.taskError=true;
            state.taskLoading=false;
            state.errMsg=action.payload;
        },
        gettingTaskData: (state, action) => {
            state.taskError=false;
            state.taskLoading=false;
            state.taskData=action.payload;
        },
        taskDeleted: (state, action) => {
            state.taskData = state.taskData.filter(task => task._id !== action.payload);
        },
        taskStatusUpdated: (state, action) => {
            const { id, status } = action.payload;
            const task = state.taskData.find((t) => t._id === id);
            if (task) {
                task.status = status;
            }
        },
        taskCreated: (state, action) => {
            state.taskData.push(action.payload); // Add new task to the list
        },
    }
})

export default taskSlice;