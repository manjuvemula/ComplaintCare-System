// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  mobile: { type: String, required: true, match: /^[6-9]\d{9}$/ },
  userType: { type: String, enum: ["user", "admin", "agent"], default: "user" }
});

module.exports = mongoose.model("User", userSchema);
