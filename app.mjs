import  express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from 'mongoose'
// import userRoutes from './src/users/routes/index'; // Reference to user routes
// import newsRoutes from './src/news/routes/index'; // Reference to news routes

const app = express();
const router = express.Router();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/news_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use user and news routes
// app.use('/user', userRoutes);
// app.use('/news', newsRoutes);
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

