// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");
const htmlroutes = require("./routes/htmlroutes.js");
const apiroutes = require("./routes/apiroutes");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// API routes
app.use('/', htmlroutes);
app.use('/api', apiroutes);


// // DB filename
// const dbFileName = path.join(__dirname, "/db/db.json");

// // Routes
// app.get("/notes", function(req, res) {
//     res.sendFile(path.join(__dirname, "/public/notes.html"));
// });

// app.use("/assets", express.static(path.join(__dirname, 'public/assets')));

// app.get('/api/notes', function(req, res){
//   //get notes from db.json
//   let readNotes = fs.readFile(dbFileName, "utf-8"); 
//   let parseNotes = JSON.parse(readNotes); // will get an array of strings 

//   return res.json(paresNotes);
// });

// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "/public/index.html"));
// });

app.listen(PORT, function() {
    console.log(`App listening at http://localhost:${PORT}`);
});