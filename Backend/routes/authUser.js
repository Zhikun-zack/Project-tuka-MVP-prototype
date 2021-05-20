const verifySignUp = require('../middleware/verifySignUp');

module.exports = (app) => {
    app.post("/api/auth/userSignUp", verifySignUp.checkDuplicateUsernameOrEmail);
}