const mongoose = require('mongoose');
const SongSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    songID: {
        type: String,
        required: true
    },
    uploadDate: {
        type: Date,
    },
    tags: {
        type: Array
    },
    download: {
        type: Number,
    }
    // shared: {
    //     type: String,
    //     required: true
    // }

});


module.exports = Song = mongoose.model('song', SongSchema)