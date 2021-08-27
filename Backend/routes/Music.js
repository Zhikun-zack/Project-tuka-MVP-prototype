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
    app.get(
        "/api/music/downloads",
        MusicController.GetSongByDownload
    )
    app.put(
        "/api/music/downloads",
        MusicController.UpdateDownloadsById
    )
    app.get(
        "/api/music/:id",
        MusicController.GetSongById
    )
}