var friends = require("../data/friends");

module.exports = function(app) {

    // this will display a JSON of all possible friends
    app.get("/api/friends", function(req,res) {
        res.json(friends);
    });

  
};