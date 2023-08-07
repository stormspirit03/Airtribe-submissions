const express = require('express');
const router = express.Router();
const tasksControllerr = require ('../controller/tasks');

router.get('/', tasksControllerr.getAllTasks);
router.post('/', tasksControllerr.createTask);

module.exports = router;

 