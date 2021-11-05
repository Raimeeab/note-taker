// Dependencies
const path = require('path');

// API routes to HTML pages 
module.exports = function(app){
    app.get('/notes', function(req, res){
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
    
    app.get('*', function(req, res){
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};