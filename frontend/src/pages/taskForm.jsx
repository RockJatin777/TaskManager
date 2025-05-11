// frontend/src/components/TaskForm.js
import React, { useState } from 'react';
import {createTask} from '../middleware/fetchData';
import { useDispatch } from 'react-redux';
import './taskForm.css';

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
        title,
        description,
        dueDate,
        };
        console.log(title, description, dueDate)

        dispatch(createTask(newTask));
            setTitle('');
            setDescription('');
            setDueDate('');
        };

    return (
        <form className='form' onSubmit={handleSubmit}>
        <input 
            className='input'
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Task Title" 
            required 
        />
        <textarea 
            className='textarea'
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            placeholder="Task Description" 
            required 
        />
        <input 
            className='input'
            type="datetime-local" 
            value={dueDate} 
            onChange={(e) => setDueDate(e.target.value)} 
            required 
        />
        <button className='create-button' type="submit">Create Task</button>
        </form>
    );
};

export default TaskForm;
