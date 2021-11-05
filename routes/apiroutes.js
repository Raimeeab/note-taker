// Dependencies
const router = require('express').Router();
const noteDb = require('../db/db.json');
const fs = require('fs');

router.get('/notes', function(req, res){
    //get notes from db.json
    let readNotes = fs.readFile(noteDb, "utf-8"); 
    let parseNotes = JSON.parse(readNotes); // will get an array of strings 

    return res.json(paresNotes);
});

// router.post('/notes', function(req, res){
//     // save notes to db.json
//     let saveNotes = 
// })
module.exports = router;