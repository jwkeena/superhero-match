const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

// Starts the server
app.listen(PORT, function() {
    console.log("Table reservation app listening on PORT " + PORT);
  });