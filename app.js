require('dotenv').config();
const express = require ('express');
const app = express();
const taskRoutes = require ('./src/routes/taskRoutes');
const tasksController = require('./src/controller/tasks')

console.log("inside task manager app");

app.use(express.json());
// taskRoutes(app, tasksController);
app.use('/tasks', taskRoutes);
 
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`server is running on port number ${port}` );
})


