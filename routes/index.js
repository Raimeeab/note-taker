const router = require("express").Router()
const path = require("path");
const apiRoutes = require("./apiroutes")

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/notes', function(req, res){
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.use("/api", apiRoutes)

module.exports = router;