const express = require ('express');
const app = express();
const taskRoutes = require ('./src/routes/taskRoutes')

app.use(express.json());
app.use('/tasks', taskRoutes); 
const port = process.env.PORT;
app.listen(port,()=>{
    console.log("server is running on port number "+ port );
})


