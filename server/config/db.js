const mongoose = require('mongoose');
require('dotenv').config({path: 'vars.env'});
const { MONGO_CONECTED } = require('./messages');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        console.log(MONGO_CONECTED)
    } catch (error) {
        console.log(error);
        process.exit(1); // Stop API
    }
}

module.exports = connectDB;