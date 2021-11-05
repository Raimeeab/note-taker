// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");
const routes = require("./routes");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// API routes
app.use(routes);

app.listen(PORT, function() {
    console.log(`App listening at http://localhost:${PORT} 🚀`);
});