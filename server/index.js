const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// create server
const app = express();

// connect to database
connectDB();

// enable cors
app.use(cors());

// enable express.json
app.use(express.json({ extended: true}));

// server port
const PORT = process.env.PORT || 4000;

// import routes


// server up
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});
