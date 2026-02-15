const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");


dotenv.config(); // Load environment variables FIRST

connectDB(); // Connect to MongoDB

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/user",require('./routes/userRoutes'));


// Port setup
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

module.exports = app;
