import  express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from 'mongoose'
// import userRoutes from './src/users/routes/index'; // Reference to user routes
// import newsRoutes from './src/news/routes/index'; // Reference to news routes
import registerUser from './src/users/controllers/auth.js'
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

routes.post('/register', userRegister);