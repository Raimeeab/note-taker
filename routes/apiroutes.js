// Dependencies
const router = require("express").Router();
const path = require("path");
const uuid = require("../helpers/uuid");
const {
    readFromFile, 
    writeToFile, 
    readAndAppend
} = require("../helpers/fsUtils")

router.get('/notes', function(req, res){
    //get notes from db.json
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

router.post('/notes', function(req, res){
    // save notes to db.json
    // read file, 
    // then add new data to array
    // then save array as file (overwrite when using writeFile)
    fs.readFile("./db/db.json", { encoding: "utf-8" }, (err, data) => {
        if (err) {
            console.log("Error writing file");
            res.status(500);
        } else {
            res.status(200);
        }
    });
})
module.exports = router;