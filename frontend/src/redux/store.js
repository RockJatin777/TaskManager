// store.js
import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './taskSlice';


const store = configureStore({
    reducer: {
        taskState: taskSlice.reducer,
    },
});

export default store;