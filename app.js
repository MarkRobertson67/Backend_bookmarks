
// DEPENDENCIES
const express = require('express');
const cors = require ("cors");
const bookmarkController = require('./controllers/bookmarkController')

// CONFIGURATION
const app = express();


// MIDDLEWARE

app.use(express.json())  // takes json and converts to JS
app.use(cors());  //


// ROUTES
app.use("/bookmark", bookmarkController);

app.get('/', (req, res) => {
    res.send("welcome to the Bookmarks Server");
});

app.get('*', (req, res) => {
    res.status(404).send('Come back later... idk What to tell you.');
});

// EXPORT
module.exports = app;
