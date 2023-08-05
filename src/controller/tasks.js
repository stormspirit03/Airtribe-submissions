const fs = require ('fs');
const path = require ('path');
const tasksPath = path.join(__dirname, '../data/tasks.json');


function readTasks(){
    try {
        const tasksData = fs.readFileSync(tasksPath,'utf-8');
        return JSON.parse(tasksData);
    } catch (error) {
        throw new Error(error);
    }
}

function writeTasks(tasks){
    try {
        fs.writeFileSync(tasksPath,JSON.stringify(tasks, null, 2),'utf-8');
    } catch (error) {
        throw new Error(error);
    }
}

const tasksController = {
    getAllTasks : (req, res) =>{
        try {
            const tasks = readTasks();
            res.JSON(tasks);
        } catch (error) {
            throw new Error(error);
        }
    },
    createTask : async (req, res)=>{
        try {
            const tasks = await readTasks();
            const newTask = req.body;
            tasks.push(newTask);
            await writeTasks(tasks);
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = {
   tasksController
}