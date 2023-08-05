const express = require('express');
const router = express.Router();
const tasksController = require ('../controller/tasks');
const getAllTasks = tasksController.getAllTasks;
const createTask = tasksController.createTask;

router.get('/', getAllTasks);
router.post('/', createTask);

module.exports={
    router
}