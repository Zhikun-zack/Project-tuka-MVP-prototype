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
    next();
});

app.get('/', (req, res) => res.send('API Running'));


// app.use('/api/users', require('./routes/api/users'));
// app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/artist', require('./routes/api/artist'));

require("./routes/authUser")(app);




//Define Routes
// app.use('/api/users', require('./routes/api/users'));
// app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/profile', require('./routes/api/profile'));
// app.use('/api/posts', require('./routes/api/posts'));


const PORT = process.env.PORT || 4080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
