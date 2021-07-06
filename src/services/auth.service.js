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
    //service for logging in
    logIn(email, password) {
        return API.post("/api/auth/userLogIn", {
            email: email,
            password: password
        }).then(response => {
            if(response.data.accessToken){
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        })
    }
    //service for logging out
    logOut(){
        localStorage.removeItem("user");
    }
    //service for getting current user
    getCurrentUser(){
        return JSON.parse(localStorage.getItem('user'));
    }

    
}

export default new AuthService();