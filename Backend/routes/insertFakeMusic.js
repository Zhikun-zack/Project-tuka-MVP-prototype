const Song = require("../models/Song");

const fakeMusics = [
    {
        "title": "Old Town Road",
        "price": ".99",
        "userID": "00001",
        "songID": "00001-001",
    "uploadDate": "",
        "tags": ["hip-hop/rap", "country", "pop"]
        
    },
    
    {
        "title": "I Don’t Care",
        "price": ".99",
        "userID": "00002",
        "songID": "00002-001",
        "uploadDate": "",
        "tags": ["pop", "vocal"]
        
    },
    
    {
        "title": "Suge",
        "price": ".89",
        "userID": "00003",
        "songID": "00003-001",
        "uploadDate": "",
        "tags": ["hip-hop/rap", "r&b", "soul"]
        
    },
    
    {
        "title": "Me!",
        "price": ".99",
        "userID": "00005",
        "songID": "00005-001",
        "uploadDate": "",
        "tags": ["country", "pop", "rock"]
        
    },
    {
        "title": "Cross Me",
        "price": ".90",
        "userID": "00002",
        "songID": "00002-002",
        "uploadDate": "",
        "tags": ["pop", "vocal"]
    },
    
    {
        "title": "God’s Country",
        "price": ".99",
        "userID": "00006",
        "songID": "00006-001",
        "uploadDate": "",
        "tags": ["country", "Christian", "guitar", "vocal", "pop"]	
    },
    
    {
        "title": "Rumor",
        "price": ".69",
        "userID": "00007",
        "songID": "00007-001",
        "uploadDate": "",
        "tags": ["hip-hop", "vocal", "country""]
        
    },
    
    {
        "title": "Beautiful Crazy",
        "price": ".89",
        "userID": "00004",
        "songID": "00004-001",
        "uploadDate": "",
        "tags": ["country", "rock", "singer/songwriter"]
        
    },
    {
        "title": "Isis",
        "price": ".69",
        "userID": "00009",
        "songID": "00009-001",
        "uploadDate": "",
        "tags": ["blues", "urban", "jazz"]
        
    },
    
    {
        "title": "This is Us",
        "price": ".99",
        "userID": "00010",
        "songID": "00010-001",
        "uploadDate": "",
        "tags": ["rock", "classic rock", "country", "singer/songwriter"]
    },
    
    {
        "title": "Cool",
        "price": ".99",
        "userID": "00011",
        "songID": "00011-001",
        "uploadDate": "",
        "tags": ["pop", "vocal", "rock"]
    },
    
    {
        "title": "Sucker",
        "price": ".99",
        "userID": "00011",
        "songID": "00011-002",
        "uploadDate": "",
        "tags": ["pop", "vocal", "rock""]
    },
    
    {
        "title": "Help Me",
        "price": ".80",
        "userID": "00012",
        "songID": "00012-001",
        "uploadDate": "",
        "tags": ["indie rock", "pop", "alternative"]
    },
    
    {
        "title": "Pray for the Wicked",
        "price": ".50",
        "userID": "00013",
        "songID": "00013-001",
        "uploadDate": "",
        "tags": ["dance", "hip-hop", "electronic"]
    },
    
    {
        "title": "Walk Me Home",
        "price": ".90",
        "userID": "00014",
        "songID": "00014-001",
        "uploadDate": "",
        "tags": ["rock", "pop", "vocal"]
    },
    
    {
        "title": "Miss Me More",
        "price": ".80",
        "userID": "00015",
        "songID": "00015-001",
        "uploadDate": "",
        "tags": ["pop", "vocal", "country"]
    },
    
    {
        "title": "The Thrill is Gone",
        "price": ".75",
        "userID": "00016",
        "songID": "00016-001",
        "uploadDate": "",
        "tags": ["blues", "vocal", "guitar", "jazz", "r&b", "soul"]
    },
    
    {
        "title": "Paradise",
        "price": ".50",
        "userID": "00017",
        "songID": "00017-001",
        "uploadDate": "",
        "tags": ["world", "dance", "electronic"]
    },
    
    {
        "title": "Happy",
        "price": ".99",
        "userID": "00035",
        "songID": "00035-001",
        "uploadDate": "",
        "tags": ["indie pop", "indie rock", "alternative", "dance"]
    },
    
    {
        "title": "God’s Plan",
        "price": ".60",
        "userID": "00018",
        "songID": "00018-001",
        "uploadDate": "",
        "tags": ["hip-hop/rap", "vocal", "Christian", "r&b", "soul"]
    },
    
    {
        "title": "The Middle",
        "price": "60",
        "userID": "00008",
        "songID": "00008-001",
        "uploadDate": "",
        "tags": ["vocal", "pop", "easy listening"]
    },
    
    {
        "title": "No Tears",
        "price": ".99",
        "userID": "00020",
        "songID": "00020-001",
        "uploadDate": "",
        "tags": ["vocal", "hip-hop/rap", "pop"]
    },
    
    {
        "title": "Growing Pains",
        "price": ".99",
        "userID": "00021",
        "songID": "00021-001",
        "uploadDate": "",
        "tags": ["vocal", "pop", "r&b/soul"]
    },
    
    {
        "title": "Light Years Away",
        "price": ".79",
        "userID": "00022",
        "songID": "00022-001",
        "uploadDate": "",
        "tags": ["blues", "guitar", "instrumental"]
    },
    
    {
        "title": "Faith",
        "price": ".99",
        "userID": "00023",
        "songID": "00023-001",
        "uploadDate": "",
        "tags": ["pop", "vocal", ""]
    },
    
    {
        "title": "Ode to Joy",
        "price": ".25",
        "userID": "00024",
        "songID": "00024-001",
        "uploadDate": "",
        "tags": ["classical", "concert"]
    },
    
    {
        "title": "Hello",
        "price": ".99",
        "userID": "00025",
        "songID": "00025-001",
        "uploadDate": "",
        "tags": ["pop", "vocal", "rock"]
    },
    
    {
        "title": "Hell of a View",
        "price": ".99",
        "userID": "00026",
        "songID": "00026-001",
        "uploadDate": "",
        "tags": ["country", "pop", "alternative"]
    },
    
    {
        "title": "Night TIme",
        "price": ".69",
        "userID": "00027",
        "songID": "00027-001",
        "uploadDate": "",
        "tags": ["jazz", "blues", "R&B", "Soul", "Gospel"]
    },
    
    {
        "title": "Kind of Blue",
        "price": ".80",
        "userID": "00028",
        "songID": "00028-001",
        "uploadDate": "",
        "tags": ["jazz", "r&b", "soul", "instrumental"]
    },
    
    {
        "title": "I Love You",
        "price": ".90",
        "userID": "00029",
        "songID": "00029-001",
        "uploadDate": "",
        "tags": ["blues", "rock", "jazz"]
    },
    
    {
        "title": "Oye Como Va",
        "price": ".50",
        "userID": "00030",
        "songID": "00030-001",
        "uploadDate": "",
        "tags": ["latin", "pop", "jazz"]
    },
    
    {
        "title": "Hey Soul Sister",
        "price": ".50",
        "userID": "00031",
        "songID": "00031-001",
        "uploadDate": "",
        "tags": ["r&b/soul", "hip-hop/rap"]
    },
    
    {
        "title": "Roxanne",
        "price": ".99",
        "userID": "00032",
        "songID": "00032-001",
        "uploadDate": "",
        "tags": ["rock", "reggae", "indie"]
    },
    
    {
        "title": "So Close",
        "price": ".60",
        "userID": ".00033",
        "songID": "00033-001",
        "uploadDate": "",
        "tags": ["hip-hop/rap", "country", "pop"]
    },
    
    {
        "title": "Rock Star",
        "price": ".69",
        "userID": "00003",
    "songID": "00003-002",
        "uploadDate": "",
        "tags": ["hip-hop/rap", "indie", "vocal"]
    },
    
    {
        "title": "Tequila",
        "price": ".80",
        "userID": "00036",
        "songID": "00036-001",
    "uploadDate": "",
        "tags": ["pop", "rock", "country", "acoustic"]
    },
    
    {
        "title": "Chun-Li",
        "price": ".60",
        "userID": ".00037",
        "songID": "00037-001",
        "uploadDate": "",
        "tags": ["k-pop", "world", "indie", "hip-hop/rap", "dance"]
    },
    
    {
        "title": "Tati",
        "price": ".50",
        "userID": "00034",
        "songID": "00034-001",
        "uploadDate": "",
        "tags": ["world", "indie", "hip-hop/rap"]
    },
    
    {
        "title": "Overdose",
        "price": ".50",
        "userID": "00021",
        "songID": "00021-002",
        "uploadDate": "",
        "tags": ["hip-hop/rap", "country", "pop", "vocal"]
    },
    
    
    {
        "title": "Stormy Monday",
        "price": ".75",
        "userID": "00038",
        "songID": "00038-001",
        "uploadDate": "",
        "tags": ["blues", "jazz", "southern rock"]
    },
    
    {
        "title": "Dame Tu Cosita",
        "price": ".70",
        "userID": "00039",
        "songID": "00039-001",
        "uploadDate": "",
        "tags": ["latin", "hip-hop/rap", "dance"]
    },
    
    {
        "title": "evermore",
        "price": ".99",
        "userID": "00005",
        "songID": "00005-002",
        "uploadDate": "",
        "tags": ["hip-hop/rap", "country", "pop"]
    },
    
    {
        "title": "Mercy",
        "price": ".69",
        "userID": "00040",
        "songID": "00040001",
        "uploadDate": "",
        "tags": ["country", "pop"]
    },
    
    {
        "title": "Minimum Wage",
        "price": ".60",
        "userID": "00006",
        "songID": "00006-002",
        "uploadDate": "",
        "tags": ["country", "pop", "C&W", "vocal"]
    },
    
    {
        "title": "Despacito",
        "price": ".99",
        "userID": "00041",
        "songID": "00041-001",
        "uploadDate": "",
        "tags": ["latin", "hip-hop/rap", "dance", "pop"]
    },
    
    {
        "title": "Malibu",
        "price": ".75",
        "userID": "00027",
        "songID": "00027-002",
        "uploadDate": "",
        "tags": ["pop", "vocal", "hip-hop/rap"]
    },
    
    {
        "title": "Closer",
        "price": ".60",
        "userID": "00019",
        "songID": "00019-002",
        "uploadDate": "",
        "tags": ["hip-hop/rap", "vocal", "pop"]
    },
    
    {
        "title": "The A Train",
        "price": ".50",
        "userID": "00043",
        "songID": "00043-001",
        "uploadDate": "",
        "tags": ["jazz", "instrumental", "classical"]
    },
    
    {
        "title": "The Cure",
        "price": ".99",
        "userID": "00044",
        "songID": "00044-001",
        "uploadDate": "",
        "tags": ["pop", "vocal", "dance", "hip-hop/rap", "alternative"]
    }     
]

function loadFakeMusic() {
    Song.insertMany(fakeMusics, (err) => {console.log(err)})
}

module.exports = (app) => {
    app.post(
        "/",
        loadFakeMusic()
    )
}