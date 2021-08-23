const mongoose = require('mongoose');
const key = require('./keys.js');
require('../models/Song');
//const fakeMusics = require("../public/fakeMusicData")
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
        "title": "I Don't Care",
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
        "title": "God's Country",
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
        "tags": ["hip-hop/rap", "vocal", "country"]
        
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
        "tags": ["blues", "urban", "jazz", "instrumental"]
        
    },
    
    {
        "title": "This is Us",
        "price": ".99",
        "userID": "00010",
        "songID": "00010-001",
        "uploadDate": "",
        "tags": ["rock", "classic rock", "country", "singer/songwriter", "guitar"]
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
        "tags": ["pop", "vocal", "rock", "hiphop"]
    },
    
    {
        "title": "Help Me",
        "price": ".80",
        "userID": "00012",
        "songID": "00012-001",
        "uploadDate": "",
        "tags": ["rock", "indie rock", "pop", "alternative"]
    },
    
    {
        "title": "Pray for the Wicked",
        "price": ".50",
        "userID": "00013",
        "songID": "00013-001",
        "uploadDate": "",
        "tags": ["dance", "hiphop", "electronic"]
    },
    
    {
        "title": "Walk Me Home",
        "price": ".90",
        "userID": "00014",
        "songID": "00014-001",
        "uploadDate": "",
        "tags": ["rock", "pop", "vocal", "female"]
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
        "tags": ["pop", "indie pop", "indie rock", "alternative", "dance"]
    },
    
    {
        "title": "Gods Plan",
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
        "tags": ["vocal", "pop", "r&b", "soul"]
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
        "tags": ["pop", "vocal", "rock", "dance"]
    },
    
    {
        "title": "Ode to Joy",
        "price": ".25",
        "userID": "00024",
        "songID": "00024-001",
        "uploadDate": "",
        "tags": ["classical", "concert", "instrumental"]
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
        "title": "Night Time",
        "price": ".69",
        "userID": "00027",
        "songID": "00027-001",
        "uploadDate": "",
        "tags": ["jazz", "blues", "r&b", "soul", "gospel"]
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
        "tags": ["blues", "rock", "jazz", "instrumental"]
    },
    
    {
        "title": "Oye Como Va",
        "price": ".50",
        "userID": "00030",
        "songID": "00030-001",
        "uploadDate": "",
        "tags": ["latin", "pop", "jazz", "vocal"]
    },
    
    {
        "title": "Hey Soul Sister",
        "price": ".50",
        "userID": "00031",
        "songID": "00031-001",
        "uploadDate": "",
        "tags": ["r&b", "soul", "hip-hop/rap"]
    },
    
    {
        "title": "Roxanne",
        "price": ".99",
        "userID": "00032",
        "songID": "00032-001",
        "uploadDate": "",
        "tags": ["rock", "reggae", "indie", "80s"]
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
        "tags": ["world", "indie", "hip-hop/rap", "dance", "dj"]
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
        "tags": ["country", "pop", "vocal"]
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
        "songID": "00019-001",
        "uploadDate": "",
        "tags": ["pop", "rock", "indie", "alternative"]
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
    },
    
    {
        "title": "Bad Habits",
        "price": ".70",
        "userID": "00002",
        "songID": "00002-003",
        "uploadDate": "",
        "tags": ["hip-hop/rap", "country", "pop", "vocal"]
    },
    
    {
        "title": "Butter",
        "price": ".49",
        "userID": "00045",
        "songID": "00045-001",
        "uploadDate": "",
        "tags": ["hip-hop/rap", "vocal", "urban", "dance"]
    },
    
    {
        "title": "Poker Face",
        "price": ".99",
        "userID": "00044",
        "songID": "00044-002",
        "uploadDate": "",
        "tags": ["pop", "vocal", "dance", "hip-hop/rap", "alternative"]
    },
    
    {
        "title": "Midnight Rider",
        "price": ".99",
        "userID": "00038",
        "songID": "00038-002",
        "uploadDate": "",
        "tags": ["blues", "country rock", "rock", "southern rock", "classic rock"]
    },
    
    {
        "title": "Happier Than Ever",
        "price": ".75",
        "userID": "00046",
        "songID": "00046-001",
        "uploadDate": "",
        "tags": ["pop", "vocal", "hiphop", "female"]
    },
    
    {
        "title": "Someone Like You",
        "price": ".99",
        "userID": "00025",
        "songID": "00025-002",
        "uploadDate": "",
        "tags": ["pop", "vocal", "rock", "female"]
    },
    
    {
        "title": "Every Breath You Take",
        "price": ".80",
        "userID": "00032",
        "songID": "00032-002",
        "uploadDate": "",
        "tags": ["rock", "reggae", "pop", "indie"]
    },
    
    {
        "title": "Blinding Lights",
        "price": ".",
        "userID": "00047",
        "songID": "00047-001",
        "uploadDate": "",
        "tags": ["hip-hop/rap", "urban", "vocal", "male"]	
    },
    
    {
        "title": "No Tears Left To Cry",
        "price": ".",
        "userID": "00048",
        "songID": "00048-001",
        "uploadDate": "",
        "tags": ["hiphop", "pop", "vocal"]
    },
    
    {
        "title": "Someone Like You",
        "price": ".50",
        "userID": "00049",
        "songID": "00049-001",
        "uploadDate": "",
        "tags": ["rock", "classic rock", "pop", "blues", "soul"]
    },
    
    {
        "title": "Moondance",
        "price": ".99",
        "userID": "00049",
        "songID": "00049-002",
        "uploadDate": "",
        "tags": ["rock", "classic rock", "pop", "jazz", "blues", "soul"]
    },
    
    {
        "title": "Lose You To Love Me",
        "price": ".99",
        "userID": "00050",
        "songID": "00050-001",
        "uploadDate": "",
        "tags": ["latin", "pop", "hiphop", "vocal", "female", "dance"]
    },
    
    {
        "title": "Bad Guy",
        "price": ".99",
        "userID": "00046",
        "songID": "00046-002",
        "uploadDate": "",
        "tags": ["pop", "vocal", "hiphop", "female"]
    },
    
    {
        "title": "I Shot the Sheriff",
        "price": ".99",
        "userID": "00051",
        "songID": "00051-001",
        "uploadDate": "",
        "tags": ["reggae", "ska", "rock"]
    },
    
    {
        "title": "Sweet Dream",
        "price": ".89",
        "userID": "00021",
        "songID": "00021-003",
        "uploadDate": "",
        "tags": ["hip-hop/rap", "country", "pop", "vocal"]
    },
    
    {
        "title": "Know-It-All",
        "price": ".89",
        "userID": "00021",
        "songID": "00021-004",
        "uploadDate": "",
        "tags": ["hip-hop/rap", "country", "pop", "vocal"]
    },
    
    {
        "title": "All Blues",
        "price": ".50",
        "userID": "00028",
        "songID": "00028-002",
        "uploadDate": "",
        "tags": ["jazz", "r&b", "soul", "instrumental", "trumpet"]
    },
    
    {
        "title": "Blue",
        "price": ".49",
        "userID": "00012",
        "songID": "00012-002",
        "uploadDate": "",
        "tags": ["country", "pop", "rock", "jazz", "female"]
    },
    
    {
        "title": "Lover",
        "price": ".99",
        "userID": "00005",
        "songID": "00005-003",
        "uploadDate": "",
        "tags": ["hiphop", "country", "pop", "female", "vocal"]
    },
    
    {
        "title": "Panini",
        "price": ".80",
        "userID": "00001",
        "songID": "00001-002",
        "uploadDate": "",
        "tags": ["hip-hop/rap", "pop"]
    },
    
    {
        "title": "Sailing to Philadelphia",
        "price": ".75",
        "userID": "00010",
        "songID": "00010-002",
        "uploadDate": "",
        "tags": ["classic rock", "country", "rock", "singer/songwriter", "guitar"]
    },
    
    {
        "title": "Sweet Little Angel",
        "price": ".50",
        "userID": "00016",
        "songID": "00016-002",
        "uploadDate": "",
        "tags": ["blues", "vocal", "guitar", "jazz", "r&b", "soul", "live"]
    },
    
    {
        "title": "Everyday I Have the BLues",
        "price": ".50",
        "userID": "00016",
        "songID": "00016-003",
        "uploadDate": "",
        "tags": ["blues", "vocal", "guitar", "jazz", "r&b", "soul"]
    },
    
    {
        "title": "Satin Doll",
        "price": ".49",
        "userID": "00043",
        "songID": "00043-002",
        "uploadDate": "",
        "tags": ["jazz", "instrumental", "classical", "standard"]
    },
    
    {
        "title": "Wrecking Ball",
        "price": ".79",
        "userID": "00042",
        "songID": "00042-002",
        "uploadDate": "",
        "tags": ["pop", "vocal", "hip-hop/rap"]
    },
    
    {
        "title": "Party in the USA",
        "price": ".79",
        "userID": "00042",
        "songID": "00042-003",
        "uploadDate": "",
        "tags": ["pop", "vocal", "hip-hop/rap"]
    },
    
    {
        "title": "reputation",
        "price": ".99",
        "userID": "00005",
        "songID": "00005-004",
        "uploadDate": "",
        "tags": ["hiphop", "country", "pop", "female", "vocal"]
    },
    
    {
        "title": "Blue Sky",
        "price": ".80",
        "userID": "00038",
        "songID": "00038-003",
        "uploadDate": "",
        "tags": ["country rock", "classic rock", "blues", "jazz", "southern rock", "guitar"]
    },
    
    {
        "title": "Black Magic Woman",
        "price": ".75",
        "userID": "00030",
        "songID": "00030-002",
        "uploadDate": "",
        "tags": ["rock", "latin", "pop", "classic rock"]
    },
    
    {
        "title": "Look What You Made Me Do",
        "price": ".99",
        "userID": "00005",
        "songID": "00005-005",
        "uploadDate": "",
        "tags": ["hiphop", "country", "pop", "female", "vocal"]
    },
    
    {
        "title": "When It Rains It Pours",
        "price": ".50",
        "userID": "00004",
        "songID": "00004-002",
        "uploadDate": "",
        "tags": ["country", "rock", "singer/songwriter"]
    },
    
    {
        "title": "What About Us",
        "price": ".80",
        "userID": "00014",
        "songID": "00014-002",
        "uploadDate": "",
        "tags": ["rock", "pop", "vocal", "female"]
    },
    
    {
        "title": "Fantasy",
        "price": ".50",
        "userID": "00052",
        "songID": "00052-001",
        "uploadDate": "",
        "tags": ["pop", "vocal", "female"]
    },
    
    {
        "title": "One Sweet Day",
        "price": ".60",
        "userID": "00052",
        "songID": "00052-002",
        "uploadDate": "",
        "tags": ["pop", "vocal", "female"]
    },
    
    {
        "title": "Bad Liar",
        "price": ".69",
        "userID": "00050",
        "songID": "00050-002",
        "uploadDate": "",
        "tags": ["latin", "pop", "hiphop", "vocal", "female", "dance"]
    },
    
    {
        "title": "In Memory of Elizabeth Reed",
        "price": ".99",
        "userID": "00038",
        "songID": "00038-004",
        "uploadDate": "",
        "tags": ["instrumental", "classic rock", "blues", "jazz", "southern rock", "guitar"]
    },
    
    {
        "title": "One Love",
        "price": ".70",
        "userID": "00051",
        "songID": "00051-002",
        "uploadDate": "",
        "tags": ["reggae", "ska", "rock", "pop"]
    },
    
    {
        "title": "No Woman No Cry",
        "price": ".70",
        "userID": "00051",
        "songID": "00051-003",
        "uploadDate": "",
        "tags": ["reggae", "ska", "rock"]
    },
    
    {
        "title": "Austin",
        "price": ".75",
        "userID": "00006",
        "songID": "00006-003",
        "uploadDate": "",
        "tags": ["country", "pop", "C&W", "vocal", "Christian"]
    },
    
    {
        "title": "Happy Anywhere",
        "price": ".",
        "userID": "00006",
        "songID": "00006-004",
        "uploadDate": "",
        "tags": ["country", "pop", "C&W", "vocal", "Christian"]
    },
    
    {
        "title": "Nobody But You",
        "price": ".",
        "userID": "00006",
        "songID": "00006-005",
        "uploadDate": "",
        "tags": ["country", "pop", "C&W", "vocal", "Christian"]
    },
    
    {
        "title": "Evolution",
        "price": ".",
        "userID": "00009",
        "songID": "00009-002",
        "uploadDate": "",
        "tags": ["hip-hop/rap", "country", "pop"]
    },
    
    
    
    {
        "title": "Headrush",
        "price": ".49",
        "userID": "00017",
        "songID": "00017-002",
        "uploadDate": "",
        "tags": ["hip-hop/rap", "country", "pop"]
    },
    
    {
        "title": "Scorpion",
        "price": ".75",
        "userID": "00018",
        "songID": "00018-002",
        "uploadDate": "",
        "tags": ["hip-hop/rap", "country", "pop"]
    },
    
    {
        "title": "Scary Hours",
        "price": ".60",
        "userID": "00018",
        "songID": "00018-003",
        "uploadDate": "",
        "tags": ["hip-hop/rap", "country", "pop"]
    },
    
    {
        "title": "How Far I’ll Go",
        "price": ".",
        "userID": "00021",
        "songID": "00021-005",
        "uploadDate": "",
        "tags": ["hip-hop/rap", "country", "pop", "vocal", "soundtrack"]
    },
    
    {
        "title": "Chief",
        "price": ".75",
        "userID": "00026",
        "songID": "00026-002",
        "uploadDate": "",
        "tags": ["country", "pop", "alternative", "country rock"]
    },
    
    {
        "title": "Hippie Radio",
        "price": ".75",
        "userID": "00026",
        "songID": "00026-003",
        "uploadDate": "",
        "tags": ["country", "pop", "alternative", "country rock"]
    },
    
    {
        "title": "Flying the Flag",
        "price": ".50",
        "userID": "00029",
        "songID": "00029-002",
        "uploadDate": "",
        "tags": ["blues", "rock", "jazz", "instrumental"]
    },
    
    {
        "title": "Marry Me",
        "price": ".70",
        "userID": "00031",
        "songID": "00031-002",
        "uploadDate": "",
        "tags": ["hip-hop/rap", "country", "pop", "soul", "r&b"]
    },
    
    {
        "title": "Las Train Home",
        "price": ".",
        "userID": "00053",
        "songID": "00053-001",
        "uploadDate": "",
        "tags": ["rock", "alternative", "guitar", "blues", "classic rock"]
    },
    
    {
        "title": "Say",
        "price": ".",
        "userID": "00053",
        "songID": "00053-002",
        "uploadDate": "",
        "tags": ["rock", "alternative", "guitar", "blues", "classic rock"]
    },
    {
        "title": "Gravity",
        "price": ".",
        "userID": "00053",
        "songID": "00053-003",
        "uploadDate": "",
        "tags": ["rock", "alternative", "guitar", "blues", "classic rock"]
    },
    
    {
        "title": "Wild Night",
        "price": ".99",
        "userID": "00049",
        "songID": "00049-003",
        "uploadDate": "",
        "tags": ["rock", "classic rock", "pop", "blues", "soul"]
    },
    
    {
        "title": "Gloria",
        "price": ".75",
        "userID": "00049",
        "songID": "00049-004",
        "uploadDate": "",
        "tags": ["rock", "classic rock", "pop", "blues", "soul"]
    },
    
    {
        "title": "Crazy Love",
        "price": ".99",
        "userID": "00049",
        "songID": "00049-005",
        "uploadDate": "",
        "tags": ["rock", "classic rock", "pop", "blues", "soul"]
    },
    
    {
        "title": " Take My Breath ",
        "price": ".89",
        "userID": "00047",
        "songID": "00047-002",
        "uploadDate": "",
        "tags": ["hip-hop/rap", "urban", "vocal", "male"]
    },
    
    {
        "title": "Starboy",
        "price": ".75",
        "userID": "00047",
        "songID": "00047-003",
        "uploadDate": "",
        "tags": ["hip-hop/rap", "urban", "vocal", "male"]
    },
    
    {
        "title": "Wolves",
        "price": ".99",
        "userID": "00050",
        "songID": "00050-003",
        "uploadDate": "",
        "tags": ["latin", "pop", "hiphop", "vocal", "female", "dance"]
    },
    
    {
        "title": "Your Body is a Wonderland",
        "price": ".75",
        "userID": "00053",
        "songID": "00053-004",
        "uploadDate": "",
        "tags": ["rock", "alternative", "guitar", "blues", "classic rock"]
    },
    
    {
        "title": "I Got",
        "price": ".50",
        "userID": "00034",
        "songID": "00034-002",
        "uploadDate": "",
        "tags": ["world", "indie", "hip-hop/rap", "dance", "dj"]
    },
    
    {
        "title": "Chacarron",
        "price": ".50",
        "userID": "00039",
        "songID": "00039-002",
        "uploadDate": "",
        "tags": ["latin", "world", "indie", "hip-hop/rap", "dance"]
    }

]

let n = fakeMusics.length;
console.log(n);
for (let i = 0; i < n; i++) {
    let randomDownload = parseInt(Math.random() * 30);
    fakeMusics[i]['download'] = randomDownload;
}

const connectDB = async () => {
    try {
        mongoose.connect(key.mongoURI, {
            useNewUrlParser: true,
            useCreateIndex: true
        });
        mongoose.set('useFindAndModify', false);
        console.log("connected");
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
    //input fake data into the mongodb
    //Song.insertMany(fakeMusics, (err) => {console.log(err)})
}


module.exports = connectDB;