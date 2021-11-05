// Dependencies
const noteDb = require('../db/db.json');
const fs = require('fs');

// router.post('/notes', function(req, res){
//     // save notes to db.json
//     let saveNotes = 
// })
module.exports = function(app) {
    app.get('/notes', function(req, res){
        //get notes from db.json
        let readNotes = fs.readFile(noteDb, "utf-8"); 
        let parseNotes = JSON.parse(readNotes); // will get an array of strings 
    
        return res.json(paresNotes);
    });

    // app.get('/notes', function(req, res) {
    //     let newNote = 
    // })
};