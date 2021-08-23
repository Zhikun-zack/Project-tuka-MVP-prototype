const { query } = require("express");
const Song = require("../models/Song");

exports.ExtractSong = (req, res) => {
    console.log("request query:")
    console.log(req.query)
    /***query structure 
     * {
     *    &and: [{
     *              tags: primarykey
     *            }, 
     *            {
     *               $or: [{tags: subGenre1}, 
     *                     {tags: subGenre2}]
     *           }]
     * }
     */
    //
    //storing the whole query language
    let andQuery = []
    //saving the or query
    let orQuery = []
    //always get a primarykey query
    andQuery.push({
        tags: req.query.primaryGenre
    })
    //if subgenre key exist
    if (req.query.primaryGenre && req.query.subGenre){
        //if query several subgenres
        if (Array.isArray(req.query.subGenre)){
            for(const g of req.query.subGenre){
                orQuery.push({
                    tags: g
                })
            }
            console.log('orQuery')
            console.log(orQuery)
            andQuery.push({
                $or: orQuery
            })
        //if only one subgenre
        }else{
            andQuery.push({
                tags: req.query.subGenre
            })
        }   
    }
    Song.find({$and: andQuery})
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
        //Success, set status to 200 and return information back to client side 
        res.status(200).send(song.map(s => {
            return(
                {
                    id: s._id,
                    tags: s.tags,
                    title: s.title,
                    price: s.price,
                    userID: s.userID,
                    songID: s.songID
                }
            )
            
        }))
    })
}
exports.GetSongByDownload = (req, res) => {
    Song.find()
    //get most popular music
    .sort({download: -1})
    .limit(12)
    .exec((err, song) => {
        console.log(song)
        if(err) {
            res.status(500).send({message: err});
            return;
        }
        if(song == null){
            res.status(404).send({message:"Song not found"});
            return;
        }
        res.status(200).send(song.map(s => {
            return({
                id: s._id,
                tags: s.tags,
                title: s.title,
                price: s.price,
                userID: s.userID,
                songID: s.songID
            })
        }))
    })
} 

//Update downloads when use click download button of that song
exports.UpdateDownloadsById = (req, res) => {
    Song.findOneAndUpdate({_id: req.query.id}, {download: req.query.updateD})
        .then((err) => {
            if(err){
                res.status(500).send({message: err.message});
                return;
            }
            res.send({message: "update downloads successfully!"})
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