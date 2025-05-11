// frontend/src/components/TaskList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';

import { fetchTaskData } from '../middleware/fetchData';

import TaskItem from '../component/taskItem';

import './taskList.css';

const TaskList = () => {
    const dispatch = useDispatch();
    const {taskData, taskLoading, taskError, errMsg} = useSelector((store) => store.taskState);

    useEffect(() => {
        dispatch(fetchTaskData)
    }, [dispatch]);

    return (
        <div>
        <h2 className='task-list-head'>Task List</h2>
        {taskLoading ? (
            <h3>Loading....</h3>
        ) : (
            taskError ? (
                <h2>{errMsg}</h2>
            ) : (
                taskData.map((task) => (
                    <TaskItem key={task._id} task={task} />
                ))
            )
        )}
        </div>
    );
};

export default TaskList;
