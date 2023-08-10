import  express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from 'mongoose'
// import  userRegister  from './src/users/controllers/auth';
import userRegister from "./src/users/controllers/auth.mjs";
import User from "./src/users/models/user";
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

// Use user and news routes
// app.use('/user', userRoutes);
// app.use('/news', newsRoutes);
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

router.post('/register', userRegister);