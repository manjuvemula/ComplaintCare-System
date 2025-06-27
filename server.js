const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // This must come BEFORE your routes

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/complaintdb")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/complaints", require("./routes/complaints"));
app.use("/api", require("./routes/login"));    // Login route
app.use("/api", require("./routes/register")); // Register route

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
