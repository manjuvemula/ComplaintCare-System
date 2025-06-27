// routes/register.js
const express = require("express");
const router = express.Router();
const User = require("../models/User"); // You must have a User model

router.post("/register", async (req, res) => {
  try {
    const { name, email, password, mobile, userType } = req.body;
    const newUser = new User({ name, email, password, mobile, userType });
    await newUser.save();
    res.status(200).json({ message: "Registration successful" });
  } catch (err) {
    res.status(500).json({ message: "Error registering user", error: err });
  }
});

module.exports = router;
