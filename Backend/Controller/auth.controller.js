//User model
const User = require("../models/User");

//Create controller function for singUp authentication and authorisation
exports.signup = (req, res) => {
    //get request input and use them to create a user 
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
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