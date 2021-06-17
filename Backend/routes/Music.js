const Song = require("../models/Song");
const MusicController = require("../Controller/Music.controller");

module.exports = (app) => {

    app.post(
        "/api/music",
        MusicController.UploadSong
    );
    app.get(
        "/api/music",
        MusicController.ExtractSong
    );
}