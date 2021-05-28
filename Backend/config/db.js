const mongoose = require('mongoose');
const key = require('./keys.js');
require('../models/Song');
const fake = require("../public/fakeMusicData")

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
    console.log(fake[0])
    //input fake data into the mongodb
    //Song.insertMany(fakeMusics, (err) => {console.log(err)})
}


module.exports = connectDB;