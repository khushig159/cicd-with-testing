const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const userRoute=require('./routes/users')

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', userRoute);

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch(err => console.log(err));
}

module.exports = app; // Important for testing