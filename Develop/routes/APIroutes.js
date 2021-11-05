// Dependencies
const router = require('express').Router();
const saveNote = require('../db/saveNote.js');

router.get('/notes', function(req, res){
    saveNote
        .retrieveNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});