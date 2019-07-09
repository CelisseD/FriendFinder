var path = require("path");

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on all possible friends
// ===============================================================================

var friends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
 

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    console.log(req.body.scores);

    var userInput = req.body;
    var userResponses = userInput.scores;
    var bestMatchName = "";
    var bestMatchImage = "";
    var totalDifference = 500;


    for (var i = 0; i < friends.length; i++) {


      var difference = 0;

      for (var j = 0; j < userResponses.length; j++) {
				difference += Math.abs(friends[i].scores[j] - userResponses[j]);
			}


    if (difference < totalDifference) {
    
 
    totalDifference = difference;
				bestMatchName = friends[i].name;
				bestMatchImage = friends[i].photo;

    friends.push(userInput);


    // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
    res.json({status: 'OK', bestMatchName: bestMatchName, bestMatchImage: bestMatchImage});
  }}}
  );
};