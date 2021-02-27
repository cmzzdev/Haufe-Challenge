const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const { SERVER_STARTED } = require('./config/messages');

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
app.use('/api/auth', require('./routes/auth'));


// server up
app.listen(PORT, () => {
    console.log(SERVER_STARTED + PORT)
});
