import axios from "axios";
const API2 = axios.create({baseURL: "http://localhost:8080"})

class MusicService{
    extractBasedOnTags(primaryGenre, subGenre=[]){
        let url = "/api/music?";
        url = "/api/music?primaryGenre=" + primaryGenre;
        if(subGenre.length !== 0){
            subGenre.map((t) => {
                url += "&subGenre=" + t
            })
        }
        return API2.get(url)
            .then(response => {
                return response
            });
    }

    extractBasedOnDownloads(){
        let url = "/api/music/downloads";
        return API2.get(url)
            .then(response => {
                return response;
            })
    }
    extractBasedOnId(id){
        let url = "/api/music/" + id;
        return API2.get(url)
            .then(response => {
                return response;
            })
    }
    updateDownloadsById(id, updateDownloads){
        let url = "/api/music/downloads?id=" + id + "&updateD=" + updateDownloads;
        return API2.put(url)
            .then(response => {console.log(response)});
    }
    uploadFiles(){}
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