import axios from "axios";

const API = axios.create({baseURL: "http://localhost:4080"})

class AuthService {
    //service for signing up 
    register(username, email, password){
            return API.post("/api/auth/userSignUp", {
                name: username,
                email: email,
                password: password
            });
    }
}

export default new AuthService();