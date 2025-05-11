// backend/routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// Create a Task
router.post('/', async (req, res) => {
    const { title, description, dueDate } = req.body;

    const task = new Task({
        title,
        description,
        dueDate,
    });

    try {
        await task.save();
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
    });

    // Get all Tasks
    router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
    });

    // Update Task Status
    router.put('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).send('Task not found');

        task.status = req.body.status || task.status;
        task.updatedOn = Date.now();
        await task.save();

        res.json(task);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
    });

    // Delete Task
    router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).send('Task not found');

        await task.deleteOne(); 
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


module.exports = router;
