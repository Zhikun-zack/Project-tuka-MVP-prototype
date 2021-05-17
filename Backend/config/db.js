const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
const key = require('./keys.js');


const connectDB = async () => {
    try {
        mongoose.connect(key.mongoURI, {
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log("connected");
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}


module.exports = connectDB;