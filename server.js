// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");
const { clog } = require("./helpers/clog");
const routes = require("./routes/index.js")
// const routes = require("./routes");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Import custom middleware, "clog"
app.use(clog);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", routes);
app.use(express.static(path.join(__dirname, "public")));

// GET Route for Homepage
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// GET Route for notes page
app.get('/notes', function(req, res){
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// GET Route for wildcard - page not found 
// (From my understanding it's not common practice to get the wildcard to always lead to the homepage)
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, './public/404.html'));
    res.status(404);
});

app.listen(PORT, function() {
    console.log(`App listening at http://localhost:${PORT} 🚀`);
});