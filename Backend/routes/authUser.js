const verifySignUp = require('../middleware/verifySignUp');
const controller = require("../Controller/auth.controller");

module.exports = (app) => {
    //route for user sign up
    app.post(
        "/api/auth/userSignUp", 
        verifySignUp.checkDuplicateUsernameOrEmail,
        controller.signup
    );
    
    //route for user log in
    app.post("/api/auth/userLogIn", controller.logIn);
}