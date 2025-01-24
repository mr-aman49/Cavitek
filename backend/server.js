require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Contact = require('./models/Contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

const multer = require('multer');
const path = require('path');

// Configure storage for resumes
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory to save files
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size to 10MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['application/pdf', 'application/msword', 
                          'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF, DOC, and DOCX files are allowed.'));
    }
  },
});

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


const Career = require('./models/Career');

// Career Application Route
app.post('/api/career', upload.single('resume'), async (req, res) => {
  const { name, email, phone, position, coverLetter } = req.body;

  if (!name || !email || !phone || !position || !coverLetter || !req.file) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newCareer = new Career({
      name,
      email,
      phone,
      position,
      resume: `/uploads/${req.file.filename}`, // Save file path
      coverLetter,
    });

    await newCareer.save();
    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to submit application' });
  }
});


const Partner = require('./models/Partner');

// Partner Form Submission Route
app.post('/api/partner', async (req, res) => {
  const { name, email, company, type, message } = req.body;

  if (!name || !email || !company || !type || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newPartner = new Partner({ name, email, company, type, message });
    await newPartner.save();
    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to submit application' });
  }
});


// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
