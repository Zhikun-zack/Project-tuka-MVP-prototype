//Functions for verify operation in the sign up process
const User = require("../models/User");


//Check whether the user name or email are already in the database
checkDuplicateUsernameOrEmail = (req, res, next) => {
    //Check username
    User.findOne({
        name: req.body.name,
    }).exec((err, user) => {
        //get the error message
        if(err){
            res.status(500).send({message: err});
            return;
        }
        //send back the user info
        if(user){
            res.status(400).send({message: "Username is Already in use!"});
            return;
        }

        //Check Email when username is ok
        User.findOne({
            email:req.body.email
        }).exec((err, user) => {
            //get the error info
            if(err){
                res.status(500).send({message: err + "please input correct value"});
                return;
            }
            //send back the user info
            if(user){
                res.status(400).send({message: err + "The user has already exist"});
                return;
            }
            next();
        });
    });
};

//Package all functions and export as a whole
const verifySignUp = {
    checkDuplicateUsernameOrEmail,
}

module.exports = verifySignUp; 