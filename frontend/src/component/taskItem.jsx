// frontend/src/components/TaskItem.js
import { useDispatch} from 'react-redux'
import React from 'react';

import { deleteTask, statusChange } from '../middleware/fetchData';
import './taskItem.css';

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTask(task._id))
    };

    const handleStatusChange = () => {
        dispatch(statusChange(task))
    };

    return (
        <div className='task-item-container'>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <button className='button' onClick={handleStatusChange}>
                Mark as {task.status === 'Pending' ? 'Completed' : 'Pending'}
            </button>
            <button className='button' onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default TaskItem;
