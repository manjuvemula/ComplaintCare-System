const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  state: String,
  pincode: String,
  status: String,
  description: String,
});

module.exports = mongoose.model("Complaint", complaintSchema);
