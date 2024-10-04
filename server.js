const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const workoutRoutes = require('./routes/workouts'); // Ensure this path is correct
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend'))); // Serve static files from frontend directory

app.get('/', (req, res) => {
    res.send('Welcome to the Workout Tracker API!');
});


app.use('/api/workouts', workoutRoutes);

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
