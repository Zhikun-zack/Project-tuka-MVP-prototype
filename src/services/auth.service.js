import axios from "axios";


class AuthService {
    //service for signing up 
    register(username, email, password){
        return axios.post("/api/auth/userSignUp", {
            username,
            email,
            password
        });
    }
}

export default new AuthService();