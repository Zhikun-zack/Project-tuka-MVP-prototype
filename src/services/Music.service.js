import axios from "axios";
const API = axios.create({baseURL: "http://localhost:4080"})

class MusicService{
    extractBasedOnTags(tags){
        return API.get("/api/music",{
            tags: 'pop'
        }).then(response => {
            console.log(response)
        });
    }
}
export default new MusicService();