const verifySignUp = require('../middleware/verifySignUp');
const controller = require("../Controller/auth.controller");

module.exports = (app) => {
    app.post("/api/auth/userSignUp", verifySignUp.checkDuplicateUsernameOrEmail,controller.signup);
}