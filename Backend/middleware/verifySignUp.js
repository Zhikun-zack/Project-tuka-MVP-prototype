//Functions for verify operation in the sign up process
const User = require("../models/User");


//Check whether the user name or email are already in the database
checkDuplicateUsernameOrEmail = (req, res, next) => {
    //Check username
    User.findOne({
        name: req.body.name,
    })
    console.log(User.findOne({
        name: req.body.name,
    }))
}

//Package all functions and export as a whole
const verifySignUp = {
    checkDuplicateUsernameOrEmail,
}

module.exports = verifySignUp; 