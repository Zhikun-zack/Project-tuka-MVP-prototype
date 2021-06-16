import axios from "axios";
const API2 = axios.create({baseURL: "http://localhost:4080"})

class MusicService{
    extractBasedOnTags(tags){
        return API2.get("/api/music?genre="+tags+"&"+"name=try")
        .then(response => {console.log(response.data)});
    }
    uploadFiles()
    // uploadMusic(){
    //     return API2.post("/api/music", {
    //         "title": "Inserted music2",
    //         "price": ".100",
    //         "userID": "00005",
    //         "songID": "00005-006",
    //         "tags": ["hip-hop/rap", "country"]
    //     })
    // }
}
export default new MusicService();