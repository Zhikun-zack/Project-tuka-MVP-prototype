const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');

const {check, validationResult} = require('express-validator/check');

const User = require('../../models/User');
const Song = require('../../models/Song');

//@route  GET api/users @desc   Create a song @access Public

router.get('/artist/:id', [
    auth,
    check('title', 'Song title is required')
        .not()
        .isEmpty(),
    check('price', 'Song price is required')
        .not()
        .isEmpty()
], async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
        return res
            .status(400)
            .json({errors: errors.array()});
    }

    try {
        // const user = await User
        //     .findById(req.user.id)
        //     .select('-password');

        const newSong = new Song({
            title: req.body,
            title,
            price: req.body.price,
            user: req.user.id,
            tags: req.body.tags || []
        });

        const song = await newSong.save();
        res.json(song);

    } catch (error) {
        console.error(error.message);
        res
            .status(500)
            .send('Server Error');
    }

});

module.exports = router;