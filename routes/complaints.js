const express = require("express");
const router = express.Router();
const Complaint = require("../models/Complaint");

router.post("/", async (req, res) => {
  try {
    const newComplaint = new Complaint(req.body);
    await newComplaint.save();
    res.status(201).json({ message: "Complaint has been recorded successfully" });
  } catch (err) {
    console.error("Error saving complaint:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
