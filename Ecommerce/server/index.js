import express from "express";
import connectDB from "./utils/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect Database
connectDB();

//importin routes
import userRoutes from './routes/user.js'

// Routes
app.use('/api',userRoutes)

// Start server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});