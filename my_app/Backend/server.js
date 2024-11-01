const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./UserRoute');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongoURI = 'mongodb+srv://Bilalkhan:Pakistan@cluster1.moct8fi.mongodb.net/Mlops'; 

mongoose.connect(mongoURI, {
  
})
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection failed:', error.message));

// Routes
app.use('/api', authRoutes);

const PORT = 5000; // Specify your port here if not using environment variables
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
