const Song = require("../models/Song");

exports.ExtractSong = (req, res) => {
    console.log("request body:")
    console.log(req.query)
    Song.find({
        tags: req.query.genre
    })
    .limit(12)
    .exec((err,song) => {
        if(err){
            res.status(500).send({message: err});
            return;
        }
        if(song == null){
            res.status(404).send({message:"Song not found"});
            return;
        }
        //console.log(song)

        res.status(200).send({
            tags: song.tags,
            title: song.title,
            price: song.price,
            userID: song.userID,
            songID: song.songID
        })
    })
}

exports.UploadSong = (req, res) => {
    console.log(req.body)
    const currDate = new Date();
    const song = new Song({
        tags: req.body.tags,
        title: req.body.title,
        price: req.body.price,
        userID: req.body.userID,
        songID: req.body.songID,
        uploadDate: currDate.getDate()
    })
    song.save((err, song) => {
        if(err){
            res.status(500).send({message: err});
            return;
        }
        res.send({message: "Song has successfully inserted!"})
    })
}