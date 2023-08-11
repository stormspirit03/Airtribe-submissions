const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const userRoutes = require('./src/users/routes/index');

// const authController = require("./src/users/controllers/auth.js");
// const User = require("./src/users/models/user.js");
// const userValidator = require '/../src/middleware/validator.js';
dotenv.config();
const app = express();
const router = express.Router();
app.use(bodyParser.json());

try {
  mongoose.connect("mongodb://localhost:27017/newsApi", {
      useUnifiedTopology: true,
      useNewUrlParser: true
  });
  console.log('DB connected...')
} catch (error) {
  console.log(error);
}

app.use(router);
router.get("/",(req,res)=>{
  res.send("welcome to news Api");
});
app.use('/user', userRoutes.router);

// router.post('/register', authController.userRegister);
// router.post('/login', authController.userLogin);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


