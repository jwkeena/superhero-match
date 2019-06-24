const singles = require("../data/singles.js")

module.exports = function (app) {
    
    app.get("/api/singles", function(req, res) {
        return res.json(singles);
    });

}