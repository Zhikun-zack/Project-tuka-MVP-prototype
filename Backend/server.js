const express = require('express');
const connectDB = require('./config/db');
const app = express();



// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

//fixed CORS problem for axios
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

//app.get('/', (req, res) => res.send('API Running'));



// app.use('/api/users', require('./routes/api/users'));
// app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/artist', require('./routes/api/artist'));

require("./routes/authUser")(app);
require("./routes/Music")(app);

//Define Routes
// app.use('/api/users', require('./routes/api/users'));
// app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/profile', require('./routes/api/profile'));
// app.use('/api/posts', require('./routes/api/posts'));

// Express will serve up production assets
// like our main.js file, or main.css file!
app.use(express.static('build'));
  
// Express will serve up the index.html file
// if it doesn't recognize the route
const path = require('path');
app.get('*', (req, res) => {
  console.log(__dirname)
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT);
