// node modules
const express = require ("express");
const fs = require("fs");
const path = require("path");

// Require routes file
const htmlRoutes = require("./routes/HTMLroutes.js");
const apiRoutes = require("./routes/apiRoutes.js");

// initialise port and express.js
const PORT = process.env.port || 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data 
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(__dirname));
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);


// Setup listener
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

