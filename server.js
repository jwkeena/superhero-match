const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Gets routing information from the relevant files
require("./app/routing/apiRoutes.js")(app); // API routing must be loaded before the html routing
require("./app/routing/htmlRoutes.js")(app);

// Starts the server
app.listen(PORT, function() {
    console.log("Superhero Singles app listening on PORT " + PORT);
  });