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
        type: String,
    },
    tags: {
        type: Array
    },
    // shared: {
    //     type: String,
    //     required: true
    // }

});


module.expoers = Song = mongoose.model('song', SongSchema)