//User model
const User = require("../models/User");
const config = require("../config/keys");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

//Create controller function for singUp authentication and authorisation
exports.signup = (req, res) => {

    //get request input and use them to create a user 
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    });
    //save user model to linked database
    user.save((err, user) => {
        if(err){
            res.status(500).send({message: err});
            return;
        }
        res.send({message: "User was registered successfully!"});
    })
}

//When user log in, check whether they are authorized
exports.logIn = (req, res) => {
    //console.log(res)
    User.findOne({
        name: req.body.name
    }).exec((err, user) => {
        console.log(user);
        
        if(err){
            res.status(500).send({message: err});
            return;
        }
        
        if(user == null){
            return res.status(404).send({message: "User not found"});
        }
        console.log("user is "+ user)
        console.log("request password is "+ req.body.password)
        //check whether the input password is same as stored
        var passwordIsValid = bcrypt.compareSync(
            //password user input 
            req.body.password,
            //password get from database
            user.password
        )
        //send user information that password is invalid
        if(!passwordIsValid){
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }

        //Generate a token using jsonwebtoken
        var token = jwt.sign({id: user.id}, config.jwtSecret, {
            expiresIn: 86400
        });

        //return user informations
        res.status(200).send({
            id: user._id,
            name: user.name,
            email: user.email,
            accessToken: token
        })
    })
}