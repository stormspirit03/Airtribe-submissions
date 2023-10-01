const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const DB = require('./src/db/db')
const shows = require('./src/controllers/shows');
dotenv.config();

const routes = express.Router();
const app = express();
const PORT = process.env.PORT
app.use(routes);

app.use(bodyParser.json()); // middleware

app.get("/",(req , res) =>{
    return res.status(200).send(" This is BookMyShow.");
})

// not creating separet router directory as there is only one api as of now.
app.get("/shows",(req , res) =>{
    const result = shows('1','2023-09-11 15:00:00');
    return res.status(200).send(" This is BookMyShow.");
})


DB.getConnection;

app.listen(PORT, (error)=>{
    if(error){
        console.log("Error occured while starting the server...");
    }
    else{
        console.log(`Server is running on port ${PORT} ...`);
    }

}); 