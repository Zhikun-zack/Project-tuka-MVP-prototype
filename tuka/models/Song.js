const mongoose = require('mongoose');
const SongSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    tag: {
        type: Array
    },
    shared: {
        type: String,
        required: true
    }

});


module.expoers = Song = mongoose.model('song', SongSchema)