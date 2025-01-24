const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  position: { type: String, required: true },
  resume: { type: String, required: true }, // Store the file path of the uploaded resume
  coverLetter: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Career', careerSchema);
