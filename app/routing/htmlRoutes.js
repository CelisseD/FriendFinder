// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
var path = require("path");
// ===============================================================================


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

    // if the users navs to survey.html or presses survey button, this will respond with the survey questions
    app.get("/survey", function(req,res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    // or they will get the regular home page
    app.use(function(req,res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};

